const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

const setDirname = dirname =>  path.resolve( __dirname, dirname );

module.exports = {
    entry: setDirname( 'src/index.js' ),
    output: {
        path: setDirname( 'dist'),
        filename: 'index.js',
        // output.library和output.libraryTarget
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            include: setDirname( 'src' ), // 只处理 src 目录下的文件
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject : 'body', // 制定 js 被插入的位置
            title: 'feitools',
            // minify : { // 压缩模板
			// 	removeComments : true, // 删除注释
			// 	collapseWhitespace : true, // 删除空格
			// }
        }),
    ],
};