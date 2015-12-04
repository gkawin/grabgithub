
var gulp = require('gulp')
var streamify = require('gulp-streamify')
var uglify = require('gulp-uglify')
var browserify = require('browserify')
var reactify = require('reactify')
var source = require('vinyl-source-stream')

var stylus = require('gulp-stylus')

gulp.task('js', function () {
  browserify('./src/js/react/App.js')
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./build/js'))
})

gulp.task('css', function () {
  gulp.src('./src/templates/stylus/main.styl')
    .pipe(stylus({ compress: true }))
    .pipe(gulp.dest('./build/css/'))
})

gulp.task('default', ['js','css'], function () {
  gulp.watch(['./src/js/**/*'], ['js'])
  gulp.watch(['./src/templates/stylus/*'], ['css'])
})
