var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './src/index.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    devServer: {
        inline: true,
        host: 'localhost',
        port: 8080,
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
            { test: /\.css$/, loader: "style-loader!css-loader"},
            { test:/\.(png|jpg)$/, loader: "url-loader?limit=8192"},

            {
                test:/\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query : {
                    presets : ['react' , 'es2015','stage-1'],
                    plugins: [
                        ["import", { libraryName: "antd", style: true }] // `style: true` 会加载 less 文件
                     /*   ["import", { libraryName: "react", style: true }],
                        ["import", { libraryName: "react-dom", style: true }],*/
                    ]
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};