var webpack = require('webpack'),
    path = require('path');

module.exports = {
    devtool: 'eval',

    entry: {
        path: path.resolve(__dirname, 'src', 'js', 'app.jsx')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.OccurenceOrderPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            mangle:   true,
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test:  /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'  // presets (es2015) in .babelrc
                //include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-function-bind']
                }
                //include: path.resolve(__dirname, 'src')
            }
        ]
    }
};