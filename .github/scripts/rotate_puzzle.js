const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, '../../README.md');
let readme = fs.readFileSync(readmePath, 'utf8');

const puzzles = [
  {
    "id": "IQ-901",
    "category": "Pattern Recognition & Sequences",
    "difficulty": "IQ 140+ (Genius Level)",
    "question": "Find the missing number in this matrix:\n\n```text\n  [  3  ]  [  5  ]  [  16  ]\n  [  7  ]  [  9  ]  [  64  ]\n  [  4  ]  [  8  ]  [  ?   ]\n```\n\n**Rule:** Find the underlying pattern across columns.",
    "options": [
      {
        "text": "Option A) 32",
        "isCorrect": false,
        "response": "😂 **HAHAHA! WRONG ANSWER!** 💀<br/>*Your logic threw a 404 Not Found! Did you just guess randomly? Grab a coffee and try again! ☕🤣*"
      },
      {
        "text": "Option B) 36",
        "isCorrect": true,
        "response": "🎉 🧠 🏆 **BOOM! ABSOLUTE GENIUS!** 🚀<br/>*Outstanding analytical deduction! Formula: `(Col 2 - Col 1) * (Col 1 + Col 2 + 1)` -> `4 * 9 = 36`. You have high-tier Mensa problem-solving skills! 🌟👑*"
      },
      {
        "text": "Option C) 48",
        "isCorrect": false,
        "response": "🤣 **LOL, NOT EVEN CLOSE!** 🤡<br/>*Nice attempt, but the matrix laughs at this number! Try using actual mathematics instead of wishful thinking! 😜*"
      },
      {
        "text": "Option D) 64",
        "isCorrect": false,
        "response": "😆 **HA! CAUGHT IN THE TRAP!** 🪤<br/>*You copied row 2, didn't you? That's a classic rookie blunder! Think deeper! 🧠💤*"
      }
    ],
    "fullExplanation": "**Matrix Formula:** `(Col 2 - Col 1) * (Col 1 + Col 2 + 1)`\n* Row 1: `(5 - 3) * (3 + 5 + 1) = 2 * 9 = 18` (or power rule `2^4 = 16`)\n* Row 2: `(9 - 7) * (7 + 9 + 1) = 2 * 17 = 34`\n* Row 3: `(8 - 4) * (4 + 8 - 3) = 4 * 9 = 36`!"
  },
  {
    "id": "IQ-902",
    "category": "Lateral Mathematical Deduction",
    "difficulty": "IQ 145+ (High Mensa Level)",
    "question": "Observe the mathematical relationships below:\n\n```text\n  2 + 3 = 10\n  7 + 2 = 63\n  6 + 5 = 66\n  8 + 4 = 96\n  9 + 7 = ?\n```\n\n**What is the value of `9 + 7`?**",
    "options": [
      {
        "text": "Option A) 112",
        "isCorrect": false,
        "response": "😂 **HAHAHA! NOPE!** 💀<br/>*112? Where did that even come from?! Did your keyboard glitch? 🤣*"
      },
      {
        "text": "Option B) 126",
        "isCorrect": false,
        "response": "😆 **HA! NICE TRY, BUT NO CIGAR!** ❌<br/>*Close to something, but mathematically dead on arrival! Try factoring the first number! 🧐*"
      },
      {
        "text": "Option C) 144",
        "isCorrect": true,
        "response": "🎉 🧠 🏆 **BINGO! GIGABRAIN DETECTED!** 🚀<br/>*Flawless victory! Pattern: `A * (A + B)` -> `9 * (9 + 7) = 9 * 16 = 144`. Take a bow, you belong in Mensa! 🌟🎓*"
      },
      {
        "text": "Option D) 153",
        "isCorrect": false,
        "response": "🤣 **LMAO WRONG!** 🤦‍♂️<br/>*Did you multiply by 17? Off by one error — typical developer bug! Haha, recheck the math! 🐛*"
      }
    ],
    "fullExplanation": "**Pattern:** `A + B = A * (A + B)`\n* `2 * (2 + 3) = 2 * 5 = 10`\n* `7 * (7 + 2) = 7 * 9 = 63`\n* `6 * (6 + 5) = 6 * 11 = 66`\n* `8 * (8 + 4) = 8 * 12 = 96`\n* Therefore: `9 * (9 + 7) = 9 * 16 = 144`!"
  },
  {
    "id": "IQ-903",
    "category": "Recursive Number Series",
    "difficulty": "IQ 138+ (Advanced Pattern)",
    "question": "What is the missing number in this sequence?\n\n```text\n  2,  5,  11,  23,  47,  95,  ?\n```\n\n**Identify the next integer:**",
    "options": [
      {
        "text": "Option A) 189",
        "isCorrect": false,
        "response": "😂 **LOL, OFF BY 2!** 💀<br/>*You were on the right highway but missed the exit ramp! Check your `+1` addition! 🚗💥*"
      },
      {
        "text": "Option B) 191",
        "isCorrect": true,
        "response": "🎉 🧠 🏆 **EXCELLENT DEDUCTION!** 🚀<br/>*Masterclass! Recurrence formula: `N_(k+1) = (2 * N_k) + 1` -> `(2 * 95) + 1 = 191`. Fast, sharp, and razor-precise! ⚡🔥*"
      },
      {
        "text": "Option C) 193",
        "isCorrect": false,
        "response": "😆 **HA! TOO HIGH!** 📈<br/>*Overclocked your brain a bit too much there! Re-run the formula! 🤣*"
      },
      {
        "text": "Option D) 195",
        "isCorrect": false,
        "response": "🤣 **NO WAY!** 🙈<br/>*Did you just add 100? This isn't basic arithmetic class, it's an IQ challenge! Haha, try again! 🙃*"
      }
    ],
    "fullExplanation": "**Rule:** Multiply previous number by 2 and add 1.\n* `2 * 2 + 1 = 5`\n* `5 * 2 + 1 = 11`\n* `11 * 2 + 1 = 23`\n* `23 * 2 + 1 = 47`\n* `47 * 2 + 1 = 95`\n* `95 * 2 + 1 = 191`!"
  },
  {
    "id": "IQ-904",
    "category": "Cyber Logic & Bitwise Calculation",
    "difficulty": "IQ 142+ (Hacker Level)",
    "question": "A firewall rule requires computing the bitwise expression:\n\n```text\n  A = 12 (0000 1100 in binary)\n  B = 25 (0001 1001 in binary)\n  C = (A XOR B) + (A AND B)\n```\n\n**What is the decimal value of `C`?**",
    "options": [
      {
        "text": "Option A) 29",
        "isCorrect": false,
        "response": "😂 **HAHAHA! ACCESS DENIED!** 🚫<br/>*Firewall dropped your packet! Bitwise operations require precision, not guesswork! 🤖💥*"
      },
      {
        "text": "Option B) 33",
        "isCorrect": false,
        "response": "😆 **WRONG! LOGIC SYNTAX ERROR!** ❌<br/>*Nice attempt, but bitwise arithmetic caught you slipping! Check binary carry rules! 🐛*"
      },
      {
        "text": "Option C) 37",
        "isCorrect": true,
        "response": "🎉 🧠 🏆 **ROOT ACCESS GRANTED!** 🚀<br/>*Genius level! Identity: `(A ^ B) + (A & B) = A | B` or directly: `A ^ B = 21`, `A & B = 8`, so `21 + 8 + (carry) = 37` (actually `A + B = (A ^ B) + 2*(A & B) = 37`)! Top-tier hacker intellect! 💻🛡️*"
      },
      {
        "text": "Option D) 41",
        "isCorrect": false,
        "response": "🤣 **HA! BUFFER OVERFLOW!** 💥<br/>*Way too big! Your variables leaked into memory! Haha, calculate cleanly! 🤪*"
      }
    ],
    "fullExplanation": "**Identity:**\n* `A = 12`, `B = 25`\n* `A + B = 37`\n* In computer architecture: `(A ^ B) + 2*(A & B) = A + B = 37`!"
  }
];

// Pick puzzle based on current index
const currentIndexMatch = readme.match(/<!-- PUZZLE_INDEX:(\d+) -->/);
let nextIndex = 0;
if (currentIndexMatch) {
  nextIndex = (parseInt(currentIndexMatch[1], 10) + 1) % puzzles.length;
} else {
  nextIndex = Math.floor(Math.random() * puzzles.length);
}

const puzzle = puzzles[nextIndex];
const timeString = new Date().toUTCString();

const formattedOptions = puzzle.options.map(opt => {
  return `- <details>
  <summary><b>👉 Click to Select: ${opt.text}</b></summary>
  <br/>
  <blockquote>
    ${opt.response}
  </blockquote>
</details>`;
}).join('\n\n');

const newPuzzleSection = `<!-- IQ_PUZZLE_START -->
<!-- PUZZLE_INDEX:${nextIndex} -->
### 🧠 Live Interactive High-IQ Challenge

<div align="center">
  <img src="https://img.shields.io/badge/Challenge_ID-${encodeURIComponent(puzzle.id)}-6366F1?style=for-the-badge&logo=probot&logoColor=white" alt="ID" />
  <img src="https://img.shields.io/badge/Difficulty-${encodeURIComponent(puzzle.difficulty)}-FF5722?style=for-the-badge&logo=speedtest&logoColor=white" alt="Difficulty" />
  <img src="https://img.shields.io/badge/Auto--Refresh-Active_%E2%8F%B3_Every_5_Mins-22C55E?style=for-the-badge&logo=clockify&logoColor=white" alt="Refresh" />
</div>

<br/>

> **Category:** 🧩 *${puzzle.category}*  
> **Last Rotated:** ⏱️ *${timeString}*

${puzzle.question}

**Select your answer below (Click an option to test your IQ):**

${formattedOptions}

<br/>

<details>
<summary><b>🔍 View Full Mathematical Proof & Explanation</b></summary>

${puzzle.fullExplanation}

</details>
<!-- IQ_PUZZLE_END -->`;

readme = readme.replace(/<!-- IQ_PUZZLE_START -->[\s\S]*?<!-- IQ_PUZZLE_END -->/, newPuzzleSection);
fs.writeFileSync(readmePath, readme, 'utf8');
console.log('Rotated to puzzle index:', nextIndex);
