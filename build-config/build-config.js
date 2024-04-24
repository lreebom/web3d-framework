const path = require("path");
module.exports = {
    entry: "./src/entry.ts",
    output: path.resolve(__dirname, "../dist"),
    title: "Web3D-Projects",
    htmlTemplate: path.join(__dirname, "./html-template.html"),
};
