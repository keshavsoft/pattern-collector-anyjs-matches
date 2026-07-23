import { createRequire } from "module";
import getLatestVersion from "./bin/core/getLatestVersion.js";

const require = createRequire(import.meta.url);

const v = getLatestVersion();
const latestModule = require(`./bin/${v}/index.js`);

const load = ({ fileContent, searchRegex, showLog }) => {
    return latestModule.default({ fileContent, searchRegex, showLog });
};

export default load;