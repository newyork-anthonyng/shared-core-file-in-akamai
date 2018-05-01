const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const NameAllModulesPlugin = require("name-all-modules-plugin");

module.exports = {
    context: path.resolve(__dirname, "src/b"),

    entry: {
        main: "./index.js",
        common: ["create-html-element"]
    },

    output: {
        path: path.resolve(__dirname, "dist/b"),
        filename: "[name].bundle.[chunkhash].js"
    },

    plugins: [
        new CleanWebpackPlugin(["dist/b"]),
        
        new HTMLWebpackPlugin({
            inject: false,
            template: path.resolve(__dirname, "template.html")
        }),

        new webpack.NamedChunksPlugin(chunk => {
            if (chunk.name) {
                return chunk.name;
            }

            // handle code split chunks without a name
            return chunk.mapModules(m => path.relative(m.context, m.request)).join("_");
        }),
        new webpack.NamedModulesPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            minChunks: Infinity
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        }),

        new NameAllModulesPlugin()
    ]
}