

# Breakout Game

A simple and interactive **Breakout** game built using **HTML**, **CSS**, and **JavaScript**. This game challenges the player to break all the blocks using a bouncing ball while controlling a paddle. It's a fun way to explore DOM manipulation and game development basics in JavaScript.

## Features

- **Dynamic Gameplay**: Blocks are dynamically rendered and disappear upon collision with the ball.
- **Score Tracking**: The current score is displayed and updated in real-time.
- **Win/Lose Conditions**:
  - Win: Clear all blocks.
  - Lose: The ball falls below the paddle.
- **Responsive Design**: Adapts to different screen sizes for a better user experience.
- **User Interaction**: Move the paddle left or right using the keyboard arrow keys.

## Technologies Used

- **HTML**: For structuring the game elements.
- **CSS**: For styling the game and making it visually appealing.
- **JavaScript**: For game logic, DOM manipulation, and interactivity.

## How to Play

1. Use the **left** and **right arrow keys** to move the paddle.
2. Prevent the ball from falling below the paddle.
3. Clear all blocks by hitting them with the ball to win the game.
4. If the ball falls below the paddle, the game ends with a "You lose" message.

## Code Structure

### HTML
The game layout is defined in the `index.html` file, which includes:
- A grid container for the game area.
- A score display.
  
### CSS
The styling is handled in `style.css`, which includes:
- Grid and block designs.
- Paddle and ball styling.
- Responsive adjustments for smaller screens.

### JavaScript
The game logic is in `script.js`, which:
- Dynamically creates blocks and renders the grid.
- Manages the paddle and ball movements.
- Detects collisions with blocks, walls, and the paddle.
- Updates the score and game status.

## How to Run the Game

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in any modern web browser.
3. Use the arrow keys to play and enjoy the game!

## Folder Structure

```
|-- index.html       # Main HTML file
|-- style.css        # CSS file for styling
|-- script.js        # JavaScript file for game logic
```

## Example Code

### Block Creation
```javascript
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}
```

### Collision Detection
```javascript
function checkForCollisions() {
  for (let i = 0; i < blocks.length; i++) {
    if (
      ballCurrentPosition[0] > blocks[i].bottomLeft[0] &&
      ballCurrentPosition[0] < blocks[i].bottomRight[0] &&
      (ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] &&
      ballCurrentPosition[1] < blocks[i].topLeft[1]
    ) {
      const allBlocks = Array.from(document.querySelectorAll(".block"));
      allBlocks[i].classList.remove("block");
      blocks.splice(i, 1);
      changeDirection();
      score++;
      scoreDisplay.innerHTML = score;
    }
  }
}
```

## Controls

- **Arrow Left**: Move the paddle left.
- **Arrow Right**: Move the paddle right.


