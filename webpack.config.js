module.exports = {
	entry: "./src/main.js",
	output: {
		path: __dirname,
		filename: "./dist/linkup.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
};