var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
	entry: "./src/app.jsx",
	output: {
		path: './dist',
		filename: "app.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel?stage=0'
			},
			{
				test: /\.less$/,
				loader: "style!css!less"
			}
		]
	},
	plugins: [
		new TransferWebpackPlugin([
			{ from: 'public' }
		])
	]
};
