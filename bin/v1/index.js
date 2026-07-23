import getAllMatches from "pattern-collector";

const fileNameToPull = "routes.js";

const startFunc = ({ fileContent, searchRegex, showLog }) => {
    try {
        if (showLog) console.log("inputs : ", fileContent, searchRegex);

        const matches = getAllMatches({
            fileContent, searchString: searchRegex
        });

        return matches;
    } catch (error) {
        console.error("Error running test:", error.message);
    };

    return [];
};

export default startFunc;