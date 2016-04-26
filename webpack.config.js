'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?/',
        // 'webpack-dev-server/client',
        'webpack/hot/dev-server',
        './home'
    ],
    output: {
        filename: 'build.js'
    },
    // watch: NODE_ENV == 'development',
    // watchOptions: {
    //     aggregateTimeout: 100
    // },
    // devtool: NODE_ENV == 'development' ? "eval" : null,
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify('ru')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    // resolve: {
    //     modulesDirectories: ['node_modules'],
    //     extensions: ['', '.js']
    // },
    // resolveLoader: {
    //     modulesDirectories: ['node_modules'],
    //     moduleTemplates: ['*-loader'],
    //     extensions: ['', '.js']
    // },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel?presets[]=es2015'}
        ]
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        hot: true
    }
};

// if (NODE_ENV == 'production') {
// if (NODE_ENV == 'development') {
//     module.exports.plugins.push(
//         new webpack.optimize.UglifyJsPlugin({
//             compress: {
//                 warnings: false,
//                 drop_console: true,
//                 unsafe: true
//             }
//         })
//     );
// }