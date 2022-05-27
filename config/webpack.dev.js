const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const { DefinePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devConfig = {
	mode: "development",
	output: {
		publicPath: "http://localhost:8000/",
	},
	devServer: {
		port: 8000,
		publicPath: "/",
		historyApiFallback: true,
	},
	plugins: [
        new DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development"),
				SPACE: JSON.stringify("local"),
			},
		}),
		new ModuleFederationPlugin({
			name: "container",
			remotes: {
				movie1: "movie1@http://localhost:8001/remoteEntry.js",
				movie2: "movie2@http://localhost:8002/remoteEntry.js",
                nav: "nav@http://localhost:8003/remoteEntry.js",
			},
			shared: packageJson.dependencies,
		}),
		new MiniCssExtractPlugin()
	],
    module : {
        rules : [
            {
                test:/\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }, {
                test : /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            }
        ]
    }
};

module.exports = merge(commonConfig, devConfig)
