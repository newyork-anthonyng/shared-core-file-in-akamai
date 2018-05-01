// this webpack holds information related to commons.js
const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const NameAllModulesPlugin = require("name-all-modules-plugin");

module.exports = {
    // using fake directory to have same relative path structure
    context: path.resolve(__dirname, "src/foo"),
    
    entry: {
        common: ["create-html-element"],
    },

    output: {
        path: path.resolve(__dirname, "dist/commons"),
        filename: "[name].bundle.[chunkhash].js"
    },

    plugins: [
        new CleanWebpackPlugin(["dist/commons"]),

        new webpack.NamedChunksPlugin(chunk => {
            if (chunk.name) {
                return chunk.name;
            }

            // handle code split chunks without a name
            return chunk.mapModules(m => path.relative(m.context, m.request)).join("_");
        }),

        new webpack.NamedModulesPlugin(),

        new NameAllModulesPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        })
    ]
}