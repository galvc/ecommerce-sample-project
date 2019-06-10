const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["sass-loader", "css-loader", "style-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: "./build"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("./index.html")
        })
    ]
};
