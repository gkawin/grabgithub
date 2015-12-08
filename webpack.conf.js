const path = require('path')
const webpack = require('webpack')

module.exports = {
	cache: true,
	entry: {
		react: './src/js/react'
	},
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
	},
  module: {
   loaders: [
      {
       test: /\.jsx?$/,
       loader: 'babel',
      }
    ]
  },
  plugins: [
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery'
		})
	]
}
