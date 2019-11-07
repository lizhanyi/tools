const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

// hot-module-replacement
// webpack.HotModuleReplacementPlugin

const resolve = dirname => path.resolve( __dirname, dirname );

const entry = resolve({ 
    dev: 'src/main.js', 
    prod: 'src/lib/index.js' 
}[ process.env.NODE_ENV ]);

module.exports = {
    entry,
    output: {
        path: resolve( 'dist' ),
        filename: 'index.js',
        // output.library和output.libraryTarget
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            include: resolve( 'src' ), // 只处理 src 目录下的文件
            use: {
                loader: 'babel-loader',
                // presets:[
                //     "es2015","react"
                // ]
                // options: {
                //     plugins:[ '@babel/plugin-proposal-class-properties' ],
                //     presets: [ '@babel/env',{
                //             "modules": false,
                //             "targets": {
                //               "browsers": ["ie >=9"]
                //             },
                //             "useBuiltIns": true,
                //             "debug": true
                //           }
                //     ]
                // }
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject : 'body', // 制定 js 被插入的位置
            title: 'feitools',
            minify : { // 压缩模板
				removeComments : true, // 删除注释
				collapseWhitespace : true, // 删除空格
			}
        }),
    ],

    // // 别名
    alias: {
        "@": path.resolve( "src" ),
        "@static": path.resolve( "src/static" ),
        "@pages": path.resolve( "src/pages" ),
        // "@utils":path.resolve("src/utils"),
    },

    // 配置服务器
	devServer : {
		open : false,
        port : 8081,
        // compress: true,
        // lazy: true,
        // quiet: true, // 信息是否展示 在 控制台
        overlay: { 
            warnings: true, 
            errors: true,
        },
        // host: 'http://www.feitools.com',
        // hot: true,
        inline: true,
	}
};