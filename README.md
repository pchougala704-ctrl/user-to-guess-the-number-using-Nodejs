# 🎯 Number Guessing Game — Node.js

A simple command-line game where the computer picks a random number between **1 and 100**, and you have to guess it. After each wrong guess, the game tells you whether your guess was **too high** or **too low**. When you get it right, it shows your total number of attempts.

---

## 📁 Project Structure

```
user-to-guess-the-number-using-nodejs/
├── game.js          # Main game logic
├── package.json     # Project metadata and start script
└── README.md        # Project documentation
```

---

## ⚙️ How It Works

1. The program generates a **random number between 1 and 100** when it starts.
2. You are prompted to **enter a guess**.
3. After each guess, the program responds with:
   - 📉 **"Too low!"** — your guess is below the secret number
   - 📈 **"Too high!"** — your guess is above the secret number
   - 🎉 **"Correct!"** — you found the number!
4. The game ends when you guess correctly and prints the **total number of attempts** it took.

---

## 🚀 How to Run

### Prerequisites

Make sure you have **Node.js** installed. You can check with:

```bash
node --version
```

If Node.js is not installed, download it from [https://nodejs.org](https://nodejs.org).

---

### Step 1 — Clone or download the project

```bash
git clone <your-repo-url>
cd user-to-guess-the-number-using-nodejs
```

Or simply place the files in a folder and open a terminal in that folder.

---

### Step 2 — Run the game

**Option A — using npm:**

```bash
npm start
```

**Option B — using Node directly:**

```bash
node game.js
```

No dependencies to install — the game uses only Node.js built-in modules.

---

## 🎮 Example Session

```
🎯 Welcome to the Number Guessing Game!
I have picked a number between 1 and 100.
Can you guess it?

Enter your guess: 50
📈 Too high! Try a lower number.

Enter your guess: 25
📉 Too low! Try a higher number.

Enter your guess: 37
📈 Too high! Try a lower number.

Enter your guess: 31
🎉 Correct! The number was 31.
✅ You guessed it in 4 attempts!
```

---

## 🛡️ Input Validation

- If you enter something that is not a number, or a number outside 1–100, the game will warn you and ask again without counting it as an attempt.

---

## 📜 License

MIT
