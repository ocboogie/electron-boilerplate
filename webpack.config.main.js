const path = require("path")

const base = require("./webpack.config.base");
const merge = require("webpack-merge");
const webpack = require("webpack");

module.exports = merge(base, {
    devtool: "source-map",

    entry: "./app/main/index.js",

    output: {
        filename: "main.js"
    },
    node: {
        __dirname: false,
        __filename: false
    },
    target: 'electron-main'
});
