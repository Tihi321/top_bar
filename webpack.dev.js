const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

/* webpack */

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        bundle: path.resolve(__dirname, 'src/js') + '/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: './js/[name].js',
        //publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({filename: 'index.html', template: 'src/index.html', hash: true}),
        new ExtractTextWebpackPlugin({filename: "css/style.css", disable: false, allChunks: true}),
        new CleanWebpackPlugin(['public']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(html|json)$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false,
                            removeComments: false,
                            collapseWhitespace: false,
                            interpolate: true
                        }
                    }
                ]
            }, {
                test: /\.(js|jsx)$/,
                use: "babel-loader"
            }, {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader', 'sass-loader'
                    ],
                    publicPath: '/'
                })
            }, {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            }, {
                test: /\.json$/,
                type: 'javascript/auto',
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/data/'
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: ['svgr/webpack'],
            }
        ]
    },
    devServer: {
        hot: true,
        stats: "errors-only",
        open: true
    }
};