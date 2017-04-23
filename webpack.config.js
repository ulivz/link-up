function buildConfig(env) {
	return require('./config/' + env + '.js')({ env: env })
}

module.exports = buildConfig(env);

// module.exports = {
// 	entry: "./src/main.js",
// 	output: {
// 		path: __dirname,
// 		filename: "./dist/linkup.js",
// 		library: 'linkup',
// 		libraryTarget: 'umd'
// 	},
// 	module: {
// 		loaders: [
// 			{
// 				test: /\.js$/,
// 				exclude: /node_modules/,
// 				loader: "babel-loader"
// 			}
// 		]
// 	}
// };

