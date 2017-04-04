const path = require("path")

const base = require("./webpack.config.base");
const merge = require("webpack-merge");
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = merge(base, {
    devtool: "source-map",

    entry: "./app/renderer/index.js",

    output: {
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "file-loader"
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
            // Use one of these to serve jQuery for Bootstrap scripts:
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        })
    ],
    target: 'electron-renderer'
});
