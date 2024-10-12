import Matter from 'matter-js'

export const generateTower = () => {
  const blocks: Matter.Body[] = [];
  const mascots: Matter.Body[] = [];
  // Level 1 Pillar
  for (let xPos = 400; xPos <= 700; xPos += 100) {
    blocks.push(Matter.Bodies.rectangle(xPos + 500, 450 - 100, 15, 70, {
      render: {
        fillStyle: "#FFFFFF"
      }
    }))
  }
  // Mascot
  for (let xPos = 450; xPos <= 650; xPos += 100) {
    mascots.push(Matter.Bodies.circle(xPos + 500, 450 - 100, 20, {
      render: {
        sprite: {
          texture: "../../assets/capybara.png",
          yScale: 0.08,
          xScale: 0.08
        }
      }
    }))
  }

  // Level 1 Platform
  blocks.push(Matter.Bodies.rectangle(450 + 500, 400 - 100, 105, 10, {
    render: {
      fillStyle: "#FFFFFF"
    }
  }))
  blocks.push(Matter.Bodies.rectangle(450 + 100 + 500, 400 - 100, 100, 10, {
    render: {
      fillStyle: "#FFFFFF"
    }
  }))
  blocks.push(Matter.Bodies.rectangle(450 + 100 + 100 + 500, 400 - 100, 105, 10, {
    render: {
      fillStyle: "#FFFFFF"
    }
  }))

  // Level 2 Pillar
  blocks.push(Matter.Bodies.rectangle(
    420 + 500,
    360 - 100,
    15, 60, {
    render: {
      fillStyle: "#FFFFFF"
    },
  }
  ))
  blocks.push(Matter.Bodies.rectangle(
    550 + 500,
    360 - 100,
    15, 60, {
    render: {
      fillStyle: "#FFFFFF"
    },
  }
  ))
  blocks.push(Matter.Bodies.rectangle(
    680 + 500,
    360 - 100,
    15, 60, {
    render: {
      fillStyle: "#FFFFFF"
    },
    // isStatic: true
  }
  ))

  // Level 2 mascots
  mascots.push(Matter.Bodies.circle(460 + 500, 390 - 100, 10, {
    render: {
      sprite: {
        texture: "../../assets/duck.png",
        yScale: 0.05,
        xScale: 0.05
      }
    }
  }))
  mascots.push(Matter.Bodies.circle(640 + 500, 390 - 100, 10, {
    render: {
      sprite: {
        texture: "../../assets/duck.png",
        yScale: 0.05,
        xScale: 0.05
      }
    }
  }))

  // Level 2 platform
  blocks.push(Matter.Bodies.rectangle(482 + 500, 320 - 100, 134, 10, {
    render: {
      fillStyle:
        "#FFFFFF"
    }
  }))
  blocks.push(Matter.Bodies.rectangle(484.3 + 133 + 500, 320 - 100, 132, 10, {
    render: {
      fillStyle: "#FFFFFF"
    }
  }))


  return {
    blocks,
    mascots,
  }
}
