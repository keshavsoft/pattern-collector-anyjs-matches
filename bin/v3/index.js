import getAllMatches from "pattern-collector";

import packageJson from '../../package.json' with {type: 'json'};

const fileNameToPull = "routes.js";

const startFunc = ({ fileContent, searchRegex, showLog, showLogStep1 }) => {
    try {
        if (showLog?.keysOnly) console.log(`${packageJson.name}-start`);
        if (showLog?.withValues) console.log(`${packageJson.name}-inputs : `, fileContent, searchRegex);

        const matches = getAllMatches({
            fileContent, searchString: searchRegex,
            showLog: showLogStep1
        });

        if (showLog?.keysOnly) console.log(`${packageJson.name}-end`);
        if (showLog?.withValues) console.log(`${packageJson.name}-outputs : `, matches);

        return matches;
    } catch (error) {
        console.error("Error running test:", error.message);
    };

    return [];
};

export default startFunc;