const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entryApp = path.join(__dirname, 'app.js');
const webpack = require('webpack');


module.exports = {
    entry: {
      //  0: 'webpack-hot-middleware/client',
        app: entryApp
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}