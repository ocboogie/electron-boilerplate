const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            "latest",
                            "react"
                        ],
                        "plugins": ["flow-runtime"]
                    }
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    }
}