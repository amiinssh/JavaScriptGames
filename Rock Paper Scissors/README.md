Here’s a clean and detailed **README.md** file for your Rock Paper Scissors game project.

---

# Rock Paper Scissors Game 🎮

This is a simple **Rock Paper Scissors** game built using **HTML**, **CSS**, and **JavaScript**. The player competes against the computer, and the game determines the result based on standard Rock Paper Scissors rules.

---

## 🚀 Features

- **Interactive Gameplay**: Play against the computer in real time.
- **Responsive Design**: Works on all screen sizes, including mobile devices.
- **Visual Feedback**: Displays user choice, computer choice, and the game result.
- **Stylish Interface**: Modern, clean, and user-friendly design with interactive buttons.

---

## 🛠️ Technologies Used

- **HTML**: Structure of the game.
- **CSS**: Styling and layout for a clean, modern look.
- **JavaScript**: Logic for gameplay, random choices, and result calculation.

---

## 🎮 How to Play

1. Open the game in a browser.
2. Choose one of the three options: **Rock**, **Paper**, or **Scissors**.
3. The computer randomly selects an option.
4. The result (Win, Lose, or Draw) will be displayed on the screen.

---

## 📂 Project Files

Here’s a breakdown of the files included:

1. **index.html**  
   - The main HTML file that structures the game UI.  

2. **style.css**  
   - The external stylesheet that styles the game layout and buttons.  

3. **script.js**  
   - The JavaScript file that handles the game logic, including:
     - Random computer choice generation.
     - Determining the winner.
     - Displaying results.

---

## 💻 Code Overview

### HTML Structure

```html
<h2>Computer choice: <span id="computer-choice"></span></h2>
<h2>User choice: <span id="user-choice"></span></h2>
<h2>Result: <span id="result"></span></h2>

<button id="rock">rock</button>
<button id="paper">paper</button>
<button id="scissors">scissors</button>
```
- **`span` elements**: Used to dynamically display computer choice, user choice, and the result.
- **Buttons**: Three buttons allow the user to select "rock," "paper," or "scissors."

### JavaScript Logic

- Randomly generates the computer's choice.
- Compares the player's choice and computer's choice.
- Determines the result based on the rules:
   - **Rock beats Scissors**  
   - **Scissors beat Paper**  
   - **Paper beats Rock**  
   - Identical choices result in a **DRAW**.

### Example JavaScript Snippet

```javascript
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) computerChoice = "rock";
  if (randomNumber === 2) computerChoice = "paper";
  if (randomNumber === 3) computerChoice = "scissors";

  computerChoiceDisplay.innerHTML = computerChoice;
}
```

---

## 🎨 Design Overview (CSS)

- **Gradient Background**: Modern and visually pleasing.
- **Buttons**: Styled with hover effects, transitions, and active states for interaction.
- **Responsive Design**: Ensures usability on mobile devices.

**Example Styling for Buttons**:
```css
button {
    background-color: #0078ff;
    color: #fff;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
    background-color: #005bb5;
    transform: translateY(-3px);
}
```

---




