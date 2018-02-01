/** Plugin settings **/

var cssOutputFile = 'dist/styles.css';



/** Webpack configuration **/

var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin(cssOutputFile);

module.exports = {
	// application entry file
	entry: {
		'jquery.es6Boilerplate': './src/adapter/jquery.ts'
	},

	// bundled application output file
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: path.resolve(__dirname, 'dist') + '/',
		chunkFilename: '[name].chunk.js',
		filename: '[name].js'
	},

	// Currently we need to add '.ts' to the resolve.extensions array.
	resolve: {
		extensions: ['.ts']
	},

	// Source maps support ('inline-source-map' also works)
	devtool: 'source-map',

	// Add the loader for .ts files.
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader'
			},
			{
				test: /\.scss$/,
				use: extractCSS.extract([
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				])
			}
		]
	},

	plugins: [
		// new webpack.optimize.UglifyJsPlugin({
		// 	minimize: false,
		// 	sourceMap: true,
		// 	compress: {
		// 		warnings: true
		// 	}
		// }),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'common' // Specify the common bundle's name.
		// }),
		extractCSS
	]
};
