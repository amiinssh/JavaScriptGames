# **Memory Game**

A simple, interactive **Memory Matching Game** built with **HTML**, **CSS**, and **JavaScript**. The game challenges players to match pairs of cards while keeping track of their score.

---

## **Table of Contents**
1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup and Installation](#setup-and-installation)
5. [How to Play](#how-to-play)
6. [Code Overview](#code-overview)
7. [Screenshots](#screenshots)
8. [License](#license)

---

## **Overview**
The Memory Game involves flipping cards to find matching pairs. The player clicks on two cards, and if the images match, the cards remain revealed. If not, the cards flip back. The goal is to match all pairs with the fewest moves.

---

## **Features**
- **Interactive Gameplay**: Match card pairs and track progress.
- **Dynamic Grid Layout**: Cards are displayed neatly using CSS Grid.
- **Randomized Cards**: Card positions are shuffled at the start of the game.
- **Score Counter**: The score increases with each successful match.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Smooth Animations**: Cards respond with hover and click effects.

---

## **Technologies Used**
- **HTML**: For structuring the game layout.
- **CSS**: For styling, animations, and responsiveness.
- **JavaScript**: For game logic, card interactions, and score updates.

---

### **Winning Condition**:
Match all card pairs to win the game. A message will display: **"Congratulations, you found them all!"**

---

## **Code Overview**

### **HTML**:  
The structure of the game grid and score display:
```html
<h3>Score: <span id="result"></span></h3>
<div id="grid"></div>
```

### **CSS**:  
Defines the layout, card styling, and responsiveness:
- Cards are displayed in a grid using `display: grid`.
- Hover and active effects for cards:
```css
#grid img:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
```

### **JavaScript**:
The main logic of the game:
1. **Shuffling Cards**:
   ```javascript
   cardArray.sort(() => 0.5 - Math.random());
   ```
2. **Creating the Board**:
   ```javascript
   function createBoard() {
       for (let i = 0; i < cardArray.length; i++) {
           const card = document.createElement("img");
           card.setAttribute("src", "/images/blank.png");
           card.setAttribute("data-id", i);
           card.addEventListener("click", flipCard);
           gridDisplay.appendChild(card);
       }
   }
   ```
3. **Card Matching Logic**:
   ```javascript
   function checkMatch() {
       if (cardChosen[0] == cardChosen[1]) {
           alert('You found a match!');
       } else {
           alert('Sorry try again');
       }
   }
   ```

---

