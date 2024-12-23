# Frogger Game

A browser-based implementation of the classic Frogger game. This project is built using **HTML**, **CSS**, and **JavaScript**. The objective is to navigate the frog across a busy street and a log-filled river to reach the red ending block without getting hit by cars or falling into the water.

## Table of Contents
- [Features](#features)
- [Game Rules](#game-rules)
- [How to Play](#how-to-play)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Code Highlights](#code-highlights)
- [Styling Details](#styling-details)
- [Future Enhancements](#future-enhancements)

---

## Features
- A grid-based game board with defined start and end points.
- Obstacles such as cars and logs that move automatically.
- A timer to add urgency to the gameplay.
- Clear win and lose conditions.
- Visually enhanced styling for a better user experience.

---

## Game Rules
1. The frog starts at the blue **starting block**.
2. Use the arrow keys to move the frog:
   - **ArrowUp**: Move up.
   - **ArrowDown**: Move down.
   - **ArrowLeft**: Move left.
   - **ArrowRight**: Move right.
3. Avoid cars (black and light grey blocks) and logs (brown and light blue blocks).
4. Safely cross the river by hopping onto the logs.
5. Reach the red **ending block** before the timer runs out to win.
6. Colliding with a car, falling into the water, or running out of time results in a loss.

---


## Technologies Used
- **HTML**: Defines the structure of the game, including the grid layout and elements.
- **CSS**: Adds styling and visual effects for a polished look.
- **JavaScript**: Implements the game logic, movement mechanics, and timers.

---

## Code Highlights
### Movement Logic
The frog's movement is implemented using keyboard event listeners:
```javascript
function moveFrog(e) {
  squares[currentIndex].classList.remove("frog");

  switch (e.key) {
    case "ArrowLeft":
      if (currentIndex % width !== 0) currentIndex -= 1;
      break;
    case "ArrowRight":
      if (currentIndex % width < width - 1) currentIndex += 1;
      break;
    case "ArrowUp":
      if (currentIndex - width >= 0) currentIndex -= width;
      break;
    case "ArrowDown":
      if (currentIndex + width < width * width) currentIndex += width;
      break;
  }

  squares[currentIndex].classList.add("frog");
}
```

### Styling Enhancements
The game elements are styled for clarity and aesthetic appeal:
```css
.frog {
  background-color: green;
  border: 1px solid #006400;
  border-radius: 50%;
  animation: bounce 0.5s infinite alternate;
}

@keyframes bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-2px);
  }
}
```

---

## Styling Details
- The game board is a flexible, grid-based layout with defined dimensions.
- Each element (frog, cars, logs, etc.) is styled to differentiate their roles visually.
- Subtle animations and rounded corners enhance the gameplay experience.

---





