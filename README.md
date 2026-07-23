# pattern-collector-anyjs-matches 🔍

> **A high-performance pattern matching and line tracking utility for JavaScript/ESM, wrapping pattern-collector.**

[![npm version](https://img.shields.io/npm/v/pattern-collector-anyjs-matches.svg?style=flat-square&color=38bdf8)](https://www.npmjs.com/package/pattern-collector-anyjs-matches)
[![license](https://img.shields.io/npm/l/pattern-collector-anyjs-matches.svg?style=flat-square&color=34d399)](LICENSE)

🔗 **Quick Links:**
*   📦 **NPM Registry**: [npmjs.com/package/pattern-collector-anyjs-matches](https://www.npmjs.com/package/pattern-collector-anyjs-matches)
*   💻 **GitHub Repo**: [github.com/keshavsoft/pattern-collector-anyjs-matches](https://github.com/keshavsoft/pattern-collector-anyjs-matches)
*   📄 **Interactive Docs**: [keshavsoft.github.io/pattern-collector-anyjs-matches](https://keshavsoft.github.io/pattern-collector-anyjs-matches/)
*   ⚙️ **Publish Workflow**: [.github/workflows/npm-publish.yml](file:///d:/KeshavSoftRepos/2026-07-23(1)/pattern-collector-anyjs-matches/.github/workflows/npm-publish.yml)

---

## 📖 Overview

`pattern-collector-anyjs-matches` is a lightweight wrapper around `pattern-collector`. It accepts a file content string and a regular expression, runs the regex match, and returns all matches along with line contents and 1-indexed line numbers.

This utility serves as the parsing step for extracting imports, function usage, and other patterns downstream.

---

## ✨ Features

*   **⚡ Zero External Dependencies**: Relying only on the lightweight `pattern-collector` core.
*   **🏷️ Line & Line Number Tracking**: Automatically calculates the exact line number where each match occurred.
*   **📦 ESM Native**: Built for modern ES module environments.

---

## 🚀 Installation

```bash
npm install pattern-collector-anyjs-matches
```

---

## 🔗 Dependency Chain

*   [`pattern-collector`](https://www.npmjs.com/package/pattern-collector) - listed in [`package.json`](package.json) as `^1.5.10`.

---

## 🛠️ API Reference

### `default(options)`

The default export is a function that collects all occurrences of a search regex in the file.

#### Parameters

An options object containing:

*   **`fileContent`** `(string)`: The raw text or code content to search.
*   **`searchRegex`** `(RegExp)`: A regular expression with the global (`g`) flag to match patterns in the content.
*   **`showLog`** `(boolean)` *(optional)*: Whether to log debugging output.

#### Returns

*   `Object[]`: An array of matches found. If no matches are found, it returns an empty array.
    *   `match` `(string)`: The exact matched substring.
    *   `line` `(string)`: The full line of code containing the match.
    *   `lineNumber` `(number)`: The 1-indexed line number in the source file.

---

## 💻 Usage Example

```javascript
import getAllMatches from 'pattern-collector-anyjs-matches';

const code = `
import { exec } from "child_process";
import dotenv from 'dotenv';
`;

const matches = getAllMatches({
  fileContent: code,
  searchRegex: /import\s+[\s\S]*?\s+from\s+['"][^'"]+['"]/g
});

console.log(matches);
/*
Output:
[
  {
    match: 'import { exec } from "child_process"',
    line: 'import { exec } from "child_process";',
    lineNumber: 2
  },
  {
    match: "import dotenv from 'dotenv'",
    line: "import dotenv from 'dotenv';",
    lineNumber: 3
  }
]
*/
```

---

## ⚖️ License

MIT License. Designed with ❤️ by [KeshavSoft](https://github.com/keshavsoft).
