const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        index: {
            import: path.join(__dirname, "src/entry.ts")
        }
    },
    output: {
        path: path.join(__dirname, "dist"),
        asyncChunks: false,
        clean: {
            keep: /^thumb/
        }
    },
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx"],
        alias: {
            "@assets": path.resolve(__dirname, "src/assets")
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "THREE-X-Demo-Dev",
            filename: "index.html",
            template: "./html-template.html",
            inject: "head",
            scriptLoading: "defer",
            favicon: path.join(__dirname, "favicon.ico")
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/i,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
            },
            {
                test: /\.less$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"]
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
            },
            {
                test: /\.(glsl|vert|frag|wgsl)$/i,
                exclude: /node_modules/,
                type: "asset/source"
            }
        ]
    }
}
