const gulp = require('gulp');
const postcss = require('gulp-postcss');
// const less = require('postcss-less-engine');
const less = require('gulp-less');
const path = require('path');

gulp.task('less', function () {
  return gulp.src(path.resolve('../components/styles/index.less'))
    .pipe(less())
    .pipe(gulp.dest(path.resolve('../lib')));
});

gulp.task('font', function () {
  return gulp.src(path.resolve('../components/styles/common/iconfont/fonts/*'))
    .pipe(gulp.dest(path.resolve('../lib/fonts')));
});

gulp.task('default', ['less', 'font']);