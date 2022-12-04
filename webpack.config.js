const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

const baseConfig = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            // {
            //     test: /\.[tj]s$/,
            //     use: 'ts-loader',
            //     exclude: /node_modules/,
            // },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            { test: /\.([cm]?ts|tsx)$/, exclude: /node_modules/, loader: 'ts-loader' },
            {
                test: /\.(png|svg|jpeg|jpg|gif|wav)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new EslingPlugin({ extensions: 'ts' }),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
