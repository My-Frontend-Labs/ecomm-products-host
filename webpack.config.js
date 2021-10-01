const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Module } = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    devServer: {
        port: 8081,
    },
    mode: 'development',
    optimization: {
        usedExports: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/index.js',
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
