const {merge} = require("webpack-merge")
const common = require("./webpack.config.js")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js"
    },
    performance: {
        hints: false
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].bundle.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                exclude: /node_modules/,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name][ext]"
                }
            },
            {
                test: /\.(svg|png|jpg|gif|hdr|exr)$/i,
                exclude: /node_modules/,
                type: "asset",
                generator: {
                    filename: "images/[name][ext]"
                }
            },
            {
                test: /\.(wav|mp3|ogg)$/i,
                exclude: /node_modules/,
                type: "asset/resource",
                generator: {
                    filename: "audios/[name][ext]"
                }
            },
            {
                test: /\.(mp4|webm)$/i,
                exclude: /node_modules/,
                type: "asset/resource",
                generator: {
                    filename: "videos/[name][ext]"
                }
            },
            {
                test: /\.(glb)$/i,
                exclude: /node_modules/,
                type: "asset/resource",
                generator: {
                    filename: "models/[name][ext]"
                }
            }
        ]
    },
    devtool: "inline-source-map",
    devServer: {
        open: true,
        // host: "local-ipv4",
        port: 3434,
        static: {
            directory: common.output.path
        }
    }
})


