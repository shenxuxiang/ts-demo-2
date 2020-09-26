process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const path = require('path');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin');
const InterPolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const { raw, stringified } = require('./env');

const { PUBLIC_PATH } = stringified;

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: path.resolve('src/index.tsx'),
    output: {
        path: path.resolve('dist'),
        filename: 'static/js/boundle.js',
        chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
        publicPath: PUBLIC_PATH,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [ 
            path.resolve('node_modules'),
        ],
        plugins: [
            new ModuleScopePlugin(path.resolve('src'), path.resolve('node_modules')),
        ],
        alias: {
            '@static': path.resolve('src/static'),
            '@components': path.resolve('src/components'),
        },
    },
    optimization: {
        splitChunks: {
            name: true,
            chunks: 'all',
        },
        runtimeChunk: true,
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                enforce: 'pre',
                use: [
                  {
                    options: {
                      formatter: require.resolve('react-dev-utils/eslintFormatter'),
                      eslintPath: require.resolve('eslint'),
                    },
                    loader: require.resolve('eslint-loader'),
                  },
                ],
                include: path.resolve('src'),
            },            
            {
                oneOf: [
                    {
                        test: /\.tsx?$/,
                        loader: require.resolve('awesome-typescript-loader'),
                        include: path.resolve('src'),
                    },
                    {
                        test: /\.css$/,
                        loaders: [
                            require.resolve('style-loader'),
                            require.resolve('css-loader'),
                            require.resolve('postcss-loader'),
                        ],
                    },
                    {
                        test: /\.less$/,
                        loaders: [
                            require.resolve('style-loader'),
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 2,
                                },
                            },
                            require.resolve('postcss-loader'),
                            require.resolve('less-loader'),
                        ]
                    },
                    {
                        test: /\.(jpe?g|png|gif|bmp)$/,
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            filename: 'static/images/[name].[hash:8].[ext]',
                        }
                    },
                    {
                        test: /\.(woff|woff2|eot|ttf|otf)$/,
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            filenmae: 'static/font/[name].[hash:8].[ext]',
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'TypeScript Demo',
            filename: 'index.html',
            template: path.resolve('public/index.html'),
            inject: true,
        }),
        new webpack.DefinePlugin(stringified),
        new InterPolateHtmlPlugin(HtmlWebpackPlugin, raw),
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsWebpackPlugin(),
    ],
    devServer: {
        open: true,
        contentBase: path.resolve('dist'),
        port: 3001,
        host: '0.0.0.0',
        public: 'localhost:3001',
        publicPath: PUBLIC_PATH,
        inline: true,
        hot: true,
        overlay: true,
        quiet: false,
        compress: true,
        stats: 'errors-only',
        clientLogLevel: 'none',
    }
}