
const gulp    = require('gulp')
const concat  = require('gulp-concat')
const stylus  = require('gulp-stylus')
const batch   = require('gulp-batch')
const watch   = require('gulp-watch')

const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const webpackConfig = require('./webpack.conf.js')

gulp.task('default', ['webpack-dev-server'])

gulp.task('build-dev', ['webpack:build-dev'], function () {
	gulp.watch(['src/**/*'], ['webpack:build-dev'])
})

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig)
myDevConfig.devtool = 'sourcemap'
myDevConfig.debug = true

// create a single instance of the compiler to allow caching
var devCompiler = Webpack(myDevConfig)

gulp.task('webpack:build-dev', function (callback) {
	// run webpack
	devCompiler.run(function (err, stats) {
		callback()
	})
})
