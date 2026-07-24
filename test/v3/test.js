import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";

import defaultFunc from '../../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "routes.js");

const fileContent = fs.readFileSync(appJsPath, 'utf8');

const searchString = /^[ \t]*import\b.*from\s+['"]\.[^'"]*['"];/gm;

const k1 = defaultFunc({
    fileContent,
    searchRegex: searchString,
    showLog: {
        keysOnly: true,
        withValues: true
    },
    showLogStep1: {
        keysOnly: true,
        withValues: true
    }
});

console.log("ssssssssss : ", k1);

