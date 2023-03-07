const HtmlWebpackPlugin =require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Dotenv = require('dotenv-webpack');

module.exports = {
    // target: 'node',
    context: __dirname,
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css?$/,
                exclude: /node_modules/,
                use: [ MiniCssExtractPlugin.loader , 'css-loader' , 'postcss-loader']
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: ['file-loader']
            }
            
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
        }),
        new Dotenv()
    ]
}