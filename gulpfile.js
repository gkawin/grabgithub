'use strict';

var gulp = require('gulp');
var streamify = require('gulp-streamify')
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

var stylus = require("gulp-stylus");

gulp.task('js', function() {
    browserify('./src/js/react/client.js') // ระบุ entry point
        .transform(reactify) // แปลง JSX เป็น JS
        .bundle() // แปลง CommonJS เป็น JS ทั่วไป
        .pipe(source('bundle.js')) // เปลี่ยนชื่อเป็น bundle.js
        //.pipe(streamify(uglify())) // บีบอัดไฟล์ให้เล็กลง
        .pipe(gulp.dest('./public/js/')); // เซฟไว้ที่ public/js/
});

gulp.task('css', function(){
    gulp.src('./src/templates/stylus/main.styl')
        .pipe(stylus({ compress: false }))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('default', ['js','css'], function() {
    //gulp.watch(['./src/js/**/*'], ['js']);
});