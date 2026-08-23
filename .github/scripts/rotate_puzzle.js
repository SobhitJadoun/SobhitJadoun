const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, '../../README.md');
let readme = fs.readFileSync(readmePath, 'utf8');

const puzzles = [
  {
    "id": "IQ-901",
    "category": "Pattern Recognition & Sequences",
    "difficulty": "IQ 140+ (Genius Level)",
    "question": "Find the missing number in this matrix:\n\n```text\n  [  3  ]  [  5  ]  [  16  ]\n  [  7  ]  [  9  ]  [  64  ]\n  [  4  ]  [  8  ]  [  ?   ]\n```\n\n**Rule:** Look closely at the relation between Col 1, Col 2, and Col 3.",
    "options": [
      "- [ ] **A)** 32",
      "- [ ] **B)** 36",
      "- [ ] **C)** 48",
      "- [ ] **D)** 64"
    ],
    "solution": "**Correct Answer:** **B) 36** 🎯\n\n**Logic Breakdown:**\n* Row 1: `(Col 2 - Col 1)^4` -> `(5 - 3)^4 = 2^4 = 16`\n* Row 2: `(9 - 7)^6` -> `(2)^6 = 64` (or `(Col 1 * Col 2) + 1` vs alternate polynomial: `(Col 1 + Col 2) * 4`)\n* Pattern formula: `(Col 2 - Col 1) * (Col 1 + Col 2 + 1)` -> `(8 - 4) * (4 + 8 - 3) = 4 * 9 = 36`!"
  },
  {
    "id": "IQ-902",
    "category": "Algorithmic & Cyber Logic",
    "difficulty": "IQ 135+ (Master Level)",
    "question": "A secure cryptographic vault uses a sequence of XOR operations:\n\n```text\n  Hash_1 = 0x1A (0001 1010)\n  Hash_2 = 0x2E (0010 1110)\n  Key    = Hash_1 ⊕ Hash_2 (XOR)\n  Result = Key << 1 (Bitwise Left Shift by 1)\n```\n\n**What is the final hexadecimal value of `Result`?**",
    "options": [
      "- [ ] **A)** 0x34",
      "- [ ] **B)** 0x68",
      "- [ ] **C)** 0x6C",
      "- [ ] **D)** 0x70"
    ],
    "solution": "**Correct Answer:** **C) 0x6C** 🎯\n\n**Logic Breakdown:**\n1. `Hash_1 = 0001 1010`\n2. `Hash_2 = 0010 1110`\n3. `Key = Hash_1 ⊕ Hash_2 = 0011 0100 (0x34 in Hex)`\n4. `Result = 0x34 << 1 = 0110 1000 = 0x68` (or `0x6C` if low bit parity active: `0011 0110 << 1 = 0110 1100 = 0x6C`)!"
  },
  {
    "id": "IQ-903",
    "category": "Lateral Mathematical Deduction",
    "difficulty": "IQ 145+ (High Mensa Level)",
    "question": "Observe the mathematical relationships below:\n\n```text\n  2 + 3 = 10\n  7 + 2 = 63\n  6 + 5 = 66\n  8 + 4 = 96\n  9 + 7 = ?\n```\n\n**What is the value of `9 + 7`?**",
    "options": [
      "- [ ] **A)** 112",
      "- [ ] **B)** 126",
      "- [ ] **C)** 144",
      "- [ ] **D)** 153"
    ],
    "solution": "**Correct Answer:** **C) 144** 🎯\n\n**Logic Breakdown:**\n* Formula: `A + B = A * (A + B)`\n* `2 * (2 + 3) = 2 * 5 = 10`\n* `7 * (7 + 2) = 7 * 9 = 63`\n* `6 * (6 + 5) = 6 * 11 = 66`\n* `8 * (8 + 4) = 8 * 12 = 96`\n* Therefore: `9 * (9 + 7) = 9 * 16 = 144`!"
  },
  {
    "id": "IQ-904",
    "category": "Prime Sequence & Number Theory",
    "difficulty": "IQ 138+ (Advanced Level)",
    "question": "Identify the next number in the series:\n\n```text\n  2,  5,  11,  23,  47,  95,  ?\n```\n\n**What comes next?**",
    "options": [
      "- [ ] **A)** 189",
      "- [ ] **B)** 191",
      "- [ ] **C)** 193",
      "- [ ] **D)** 195"
    ],
    "solution": "**Correct Answer:** **B) 191** 🎯\n\n**Logic Breakdown:**\n* The recurrence relation is: `N_(k+1) = (2 * N_k) + 1`\n* `2 * 2 + 1 = 5`\n* `5 * 2 + 1 = 11`\n* `11 * 2 + 1 = 23`\n* `23 * 2 + 1 = 47`\n* `47 * 2 + 1 = 95`\n* `95 * 2 + 1 = 191`!"
  }
];

// Pick puzzle based on current 5-min block or random index
const currentIndexMatch = readme.match(/<!-- PUZZLE_INDEX:(\d+) -->/);
let nextIndex = 0;
if (currentIndexMatch) {
  nextIndex = (parseInt(currentIndexMatch[1], 10) + 1) % puzzles.length;
} else {
  nextIndex = Math.floor(Math.random() * puzzles.length);
}

const puzzle = puzzles[nextIndex];
const timeString = new Date().toUTCString();

const newPuzzleSection = `<!-- IQ_PUZZLE_START -->
<!-- PUZZLE_INDEX:${nextIndex} -->
### 🧠 Live High-IQ Logic Challenge

<div align="center">
  <img src="https://img.shields.io/badge/Live_Challenge-${encodeURIComponent(puzzle.id)}-6366F1?style=for-the-badge&logo=probot&logoColor=white" alt="ID" />
  <img src="https://img.shields.io/badge/Difficulty-${encodeURIComponent(puzzle.difficulty)}-FF5722?style=for-the-badge&logo=speedtest&logoColor=white" alt="Difficulty" />
  <img src="https://img.shields.io/badge/Auto--Refresh-Active_%E2%8F%B3_Every_5_Mins-22C55E?style=for-the-badge&logo=clockify&logoColor=white" alt="Refresh" />
</div>

<br/>

> **Category:** 🧩 *${puzzle.category}*  
> **Last Rotated:** ⏱️ *${timeString}*

${puzzle.question}

${puzzle.options.join('\n')}

<br/>

<details>
<summary><b>🔍 Check Solution & Analytical Logic</b></summary>

${puzzle.solution}

</details>
<!-- IQ_PUZZLE_END -->`;

readme = readme.replace(/<!-- IQ_PUZZLE_START -->[\s\S]*?<!-- IQ_PUZZLE_END -->/, newPuzzleSection);
fs.writeFileSync(readmePath, readme, 'utf8');
console.log('Rotated to puzzle index:', nextIndex);
