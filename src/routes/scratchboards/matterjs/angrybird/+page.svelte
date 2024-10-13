<script lang="ts">
	import Matter from 'matter-js';
	import { generateTower } from '$lib/bodies/tower';
	import { onMount } from 'svelte';
	let container: HTMLDivElement;
	const {
		Engine,
		Mouse,
		Body,
		MouseConstraint,
		Events,
		Render,
		Bodies,
		Constraint,
		Composite,
		Runner
	} = Matter;

	onMount(() => {
		const engine = Engine.create();
		const render = Render.create({
			element: container!,
			engine,
			options: {
				width: 1440,
				height: 600,
				showAngleIndicator: true,
				wireframes: false,
				background: 'transparent'
			}
		});
		Render.run(render);
		const runner = Runner.create();
		Runner.run(runner, engine);
		const ground = Bodies.rectangle(695 + 500, 600 - 200, 815, 50, {
			isStatic: true,
			render: { fillStyle: '#ff5733' }
		});

		let rock = Bodies.polygon(170, 450, 8, 20, {
			density: 0.004,
			render: {
				sprite: {
					texture: '../../assets/mascot.png',
					xScale: 0.1,
					yScale: 0.1
				}
			}
		});
		const elastic = Constraint.create({
			pointA: { x: 170, y: 450 },
			bodyB: rock,
			length: 0.01,
			damping: 0.01,
			stiffness: 0.05
		});
		const { blocks, mascots } = generateTower();
		Composite.add(engine.world, [ground, rock, elastic, ...blocks, ...mascots]);
		const mouse = Mouse.create(container);
		const mouseConstraint = MouseConstraint.create(engine, {
			mouse: mouse,
			constraint: {
				stiffness: 0.2,
				render: {
					visible: false
				}
			}
		});
		Events.on(engine, 'afterUpdate', function () {
			if (mouseConstraint.mouse.button === -1 && (rock.position.x > 190 || rock.position.y < 430)) {
				// Limit maximum speed of current rock.
				if (Body.getSpeed(rock) > 45) {
					Body.setSpeed(rock, 45);
				}

				// Release current rock and add a new one.
				// Matter.World.remove(engine.world, rock);
				rock = Bodies.polygon(170, 450, 8, 20, {
					density: 0.004,
					render: {
						sprite: {
							texture: '../../assets/mascot.png',
							xScale: 0.1,
							yScale: 0.1
						}
					}
				});
				Composite.add(engine.world, rock);
				elastic.bodyB = rock;
			}
		});
		Composite.add(engine.world, mouseConstraint);

		// keep the mouse in sync with rendering
		render.mouse = mouse;

		// fit the render viewport to the scene
		Render.lookAt(render, {
			min: { x: 0, y: 0 },
			max: { x: 1440, y: 600 }
		});
	});
</script>

<div bind:this={container}></div>

<style>
	div {
		background-image: url('../../../../../assets/background.png');
		background-repeat: no-repeat, no-repeat;
	}
</style>
