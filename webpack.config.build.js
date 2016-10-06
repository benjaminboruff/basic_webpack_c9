 const webpack = require('webpack');
 
 module.exports = {
     
     entry: [
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