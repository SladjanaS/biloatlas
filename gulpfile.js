// Less configuration
var gulp = require('gulp')
var less = require('gulp-less')
var cleanCSS = require('gulp-clean-css')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('less', function () {
  gulp.src('css/*.less')
    .pipe(less())
    .pipe(gulp.dest(function (f) {
      return f.base
    }))
})

gulp.task('minify', function () {
  gulp.src('css/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(function (f) {
      return f.base
    }))
})

gulp.task('default', ['less', 'minify'], function () {
  gulp.watch('css/*.less', ['less'])
  gulp.watch('css/*.css', ['minify'])
})
