const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
module.exports = {
    entry: path.resolve( __dirname,'src/index.js' ),
    output: {
        path: path.resolve( __dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            include: path.resolve( __dirname, 'src' ), // 只处理 src 目录下的文件
            use: {
                loader: 'babel-loader',
                options: {
                    plugins:[ '@babel/plugin-proposal-class-properties' ],
                    presets: [ '@babel/env' ]
                }
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin({ }),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
};