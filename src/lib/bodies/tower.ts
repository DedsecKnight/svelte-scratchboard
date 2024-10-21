import Matter from 'matter-js'

export const generateTower = () => {
  const blocks: Matter.Body[] = [];
  const mascots: Matter.Body[] = [];
  // Level 1 Pillar
  for (let xPos = 400; xPos <= 700; xPos += 100) {
    blocks.push(Matter.Bodies.rectangle(xPos + 500, 450 - 100, 15, 70, {
      render: {
        // fillStyle: "#FFFFFF"
        sprite: {
          texture: "../../assets/vertical.png",
          xScale: 0.75,
          yScale: 0.75
        }
      }
    }))
  }
  // Mascot
  let mascotList = ["../../assets/capybara.png", "../../assets/frog.png", "../../assets/corgi.png"]
  for (let xPos = 450; xPos <= 650; xPos += 100) {
    mascots.push(Matter.Bodies.circle(xPos + 500, 450 - 100, 20, {
      render: {
        sprite: {
          texture: mascotList[(xPos - 450) / 100],
          yScale: 0.1,
          xScale: 0.1
        }
      }
    }))
  }

  // Level 1 Platform
  blocks.push(Matter.Bodies.rectangle(450 + 500, 400 - 100, 105, 10, {
    render: {
      sprite: {
        texture: "../../assets/horizontal.png",
        xScale: 0.4,
        yScale: 0.5
      }
    }
  }))
  blocks.push(Matter.Bodies.rectangle(450 + 100 + 500, 400 - 100, 100, 10, {
    render: {
      sprite: {
        texture: "../../assets/horizontal.png",
        xScale: 0.4,
        yScale: 0.5
      }
    }
  }))
  blocks.push(Matter.Bodies.rectangle(450 + 100 + 100 + 500, 400 - 100, 105, 10, {
    render: {
      sprite: {
        texture: "../../assets/horizontal.png",
        xScale: 0.4,
        yScale: 0.5
      }
    }
  }))

  // Level 2 Pillar
  blocks.push(Matter.Bodies.rectangle(
    420 + 500,
    360 - 100,
    15, 60, {
    render: {
      sprite: {
        texture: "../../assets/vertical.png",
        xScale: 0.65,
        yScale: 0.65
      }
    },
  }
  ))
  blocks.push(Matter.Bodies.rectangle(
    550 + 500,
    360 - 100,
    15, 60, {
    render: {
      sprite: {
        texture: "../../assets/vertical.png",
        xScale: 0.65,
        yScale: 0.65
      }
    },
  }
  ))
  blocks.push(Matter.Bodies.rectangle(
    680 + 500,
    360 - 100,
    15, 60, {
    render: {
      sprite: {
        texture: "../../assets/vertical.png",
        xScale: 0.65,
        yScale: 0.65
      }
    },
    // isStatic: true
  }
  ))

  // Level 2 mascots
  mascots.push(Matter.Bodies.circle(460 + 500, 390 - 100, 10, {
    render: {
      sprite: {
        texture: "../../assets/duck.png",
        yScale: 0.1,
        xScale: 0.1
      }
    }
  }))
  mascots.push(Matter.Bodies.circle(640 + 500, 390 - 100, 10, {
    render: {
      sprite: {
        texture: "../../assets/duck.png",
        yScale: 0.1,
        xScale: 0.1
      }
    }
  }))

  // Level 2 platform
  blocks.push(Matter.Bodies.rectangle(482 + 500, 320 - 100, 134, 10, {
    render: {
      sprite: {
        texture: "../../assets/horizontal.png",
        xScale: 0.5,
        yScale: 0.5
      }
    }
  }))
  blocks.push(Matter.Bodies.rectangle(484.3 + 133 + 500, 320 - 100, 132, 10, {
    render: {
      sprite: {
        texture: "../../assets/horizontal.png",
        xScale: 0.5,
        yScale: 0.5
      }
    }
  }))


  return {
    blocks,
    mascots,
  }
}
