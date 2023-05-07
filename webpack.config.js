const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env = {}) => ({
    mode: env.prod ? 'production' : 'development',
    devtool: env.prod ? 'source-map' : 'eval-cheap-module-source-map',
    entry: path.resolve(__dirname, './src/assets/js/app.js'),
    output: {
        path: path.resolve(__dirname, './static/js/'),
        publicPath: '/static/js/',
        filename: 'app.js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },

    module: {

        rules: [
         //   { test: /\.json$/, loader: 'json' },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'url-loader',
                    options: { limit: 8192 }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { hmr: !env.prod }
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: 'true',
            __VUE_PROD_DEVTOOLS__: 'false'
        })
    ],
    devServer: {
        inline: true,
        hot: true,
        stats: 'minimal',
        contentBase: __dirname,
        overlay: true
    }
})