const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const app = express();

const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    quiet: true
})

// express.config.js
app.use(require("webpack-hot-middleware")(compiler, {
    path: '/__webpack_hmr'
}));

app.use(express.static('./dist'))


app.use(devMiddleware)

app.listen(1010, () => console.log('Example app listening on port 1010!'))
