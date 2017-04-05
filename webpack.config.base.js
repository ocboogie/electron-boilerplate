const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            "presets": [
                                "latest",
                                "react"
                            ]
                        }
                    },
                    "eslint-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    }
}