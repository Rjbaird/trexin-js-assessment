# Trexin Assessment

## Usage

Download the most current version of [Node.js](https://nodejs.org/en) to run a report. There are no other dependencies.

```bash
node index.js
```

By default, index.js will generate a report based on the jude.txt file in the temp folder. To generate a report on a different txt file, add the file name as an argument.

```bash
node index.js -hamlet
```

Reports can also be ran using npm scripts with or without arguments.

```bash
npm start
```

## Questions:

1. What is the expected input file format? (txt, csv, json, etc.)
2. What is the expected output format? (txt, csv, json, etc.)
3. What is the expected output file name?
4. What is the expected output file location?
5. Where is the input file located?
6. How do you select the input file?
7. Do you need a spsecific version of JavaScript or Node.js

## Assumptions:

1. The input file is a txt file.
2. The output file is a txt file.
3. The output file name is the same as the input file name + "-report" i.e. jude-report.txt.
4. The output file is located in the out folder.
5. The input file is located in the temp folder.
6. The input file is selected by the user via command-line arguments i.e. -filename. The default is the jude.txt file.
7. This program uses the most current version of Node.js - v20.6.1

This program makes no assumptions about how to handle file errors. If the input txt file does not exist, JavaScript throws an error, exits and no report is generated.
