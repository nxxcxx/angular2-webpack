var HtmlWebpackPlugin = require( 'html-webpack-plugin' )

module.exports = {
	entry: [
		'./node_modules/angular2/bundles/angular2-polyfills.js',
		'./src/index.js'
	],
	output: {
		path: './dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	},
	plugins: [
		new HtmlWebpackPlugin( {
			template: './src/index.html',
			inject: 'body'
		} )
	],
	devtool: '#inline-source-map'
}
