let fs = require("fs");

function main() {
    let args = process.argv[2] || "jude";
    let fileName = args.replace("-", "");
    createTxtReport(fileName);
    return console.log("Done");
}

function createTxtReport(name) {
    let inputPath = `./temp/${name}.txt`;
    let outputPath = `./out/${name}-report.txt`;

    let text = fs.readFileSync(inputPath, "utf-8");

    createOutputFile(outputPath, `File name: ${inputPath}`);

    let lines = text.split("\n");

    appendToOutputFile(outputPath, `Number of lines: ${lines.length}`);

    let chars = text.split("");
    appendToOutputFile(
        outputPath,
        `Number of characters (total): ${chars.length}`
    );

    let letters = text.replace(/[^a-zA-Z]/g, "");
    appendToOutputFile(outputPath, `Number of letters: ${letters.length}`);

    let figures = text.replace(/[^0-9]/g, "");
    appendToOutputFile(outputPath, `Number of figures: ${figures.length}`);

    let words = text.split(" ");
    appendToOutputFile(outputPath, `Number of words: ${words.length}`);

    let otherChars = text.replace(/[a-zA-Z0-9]/g, "");
    appendToOutputFile(
        outputPath,
        `Number of other characters: ${otherChars.length}`
    );

    appendToOutputFile(
        outputPath,
        `Number of 1 letter words: ${wordsByLength(words, 1)}`
    );
    appendToOutputFile(
        outputPath,
        `Number of 2 letters words: ${wordsByLength(words, 2)}`
    );

    appendToOutputFile(outputPath, "[...]");

    appendToOutputFile(
        outputPath,
        `Number of 16 letters words: ${wordsByLength(words, 16)}`
    );

    appendToOutputFile(
        outputPath,
        `Number of 19 letters words: ${wordsByLength(words, 19)}`
    );
}

function wordsByLength(words, num) {
    return words.filter(function (word) {
        return word.length === num;
    }).length;
}

function createOutputFile(path, text) {
    fs.writeFileSync(path, text + "\n", function (err) {
        if (err) throw err;
    });
}

function appendToOutputFile(path, text) {
    fs.appendFileSync(path, text + "\n", function (err) {
        if (err) throw err;
    });
}

main();
