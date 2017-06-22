const express = require('express');

const webpack = require('webpack');

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config');
const webpackHotMiddleware = require('webpack-hot-middleware')
const app = express();

const compiler = webpack(webpackConfig)
const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: '/'
});

const hotMiddleware = webpackHotMiddleware(compiler);

app.use(devMiddleware);
app.use(hotMiddleware);
app.listen(3000, () => {
    console.log('transpiler listening 3000');
})