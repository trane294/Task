var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, '../public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devtool: "eval",
    module : {
        loaders : [
            {
                include : APP_DIR,
                loader : 'babel'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('assets/style.css', {
            allChunks: true
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        "alias": {
           "react": "preact-compat",
           "react-dom": "preact-compat"
        }
    }
};

module.exports = config;