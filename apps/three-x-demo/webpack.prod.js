const {merge} = require("webpack-merge")
const common = require("./webpack.config.js")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash:8].bundle.js"
    },
    performance: {
        hints: "warning"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].bundle.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                exclude: /node_modules/,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name].[contenthash:8][ext]"
                }
            },
            {
                test: /\.(svg|png|jpg|gif|hdr|exr)$/i,
                exclude: /node_modules/,
                type: "asset",
                generator: {
                    filename: "images/[name].[contenthash:8][ext]"
                }
            },
            {
                test: /\.(wav|mp3|ogg)$/i,
                exclude: /node_modules/,
                type: "asset/resource",
                generator: {
                    filename: "audios/[name].[contenthash:8][ext]"
                }
            },
            {
                test: /\.(mp4|webm)$/i,
                exclude: /node_modules/,
                type: "asset/resource",
                generator: {
                    filename: "videos/[name].[contenthash:8][ext]"
                }
            },
            {
                test: /\.(glb)$/i,
                exclude: /node_modules/,
                type: "asset/resource",
                generator: {
                    filename: "models/[name].[contenthash:8][ext]"
                }
            }
        ]
    },
    devtool: false
})
