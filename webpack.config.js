 const webpack = require('webpack');
 
 module.exports = {
     
     entry: [
        'webpack-dev-server/client?https://0.0.0.0:8080',
        'webpack/hot/dev-server',
         './src/app.js'
    ],
     output: {
         path: './build',
         filename: 'bundle.js'
     },
     module: {
         loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            
            { 
                test: /\.scss/,
                loaders: ['style', 'css', 'sass']
            }
         ]
    },
    devServer: {
        contentBase: './build'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        })
    ]
 };