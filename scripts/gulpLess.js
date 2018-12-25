const gulp = require('gulp');
const postcss = require('gulp-postcss');
const less = require('gulp-less');
const path = require('path');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({ browsers: ['last 10 versions'] });
const cleanCSS = require('gulp-clean-css');
const allComponents = require('./allComponents');

gulp.task('less', function () {
  return gulp.src(path.resolve('../components/styles/index.less'))
    .pipe(less({
      plugins: [autoprefix],
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(path.resolve('../lib')))
    .pipe(gulp.dest(path.resolve('../es6')));
});

gulp.task('common', function () {
  return gulp.src(path.resolve('../components/styles/common/reset.less'))
    .pipe(less({
      plugins: [autoprefix],
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(path.resolve('../lib/common')))
    .pipe(gulp.dest(path.resolve('../es6/common')));
});

gulp.task('font', function () {
  return gulp.src(path.resolve('../components/styles/common/iconfont/fonts/*'))
    .pipe(gulp.dest(path.resolve('../lib/Icon/fonts')))
    .pipe(gulp.dest(path.resolve('../lib/fonts')))
    .pipe(gulp.dest(path.resolve('../es6/Icon/fonts')))
    .pipe(gulp.dest(path.resolve('../es6/fonts')));    
});

// 拷贝styles
gulp.task('styles', function () {
  return gulp.src(path.resolve('../components/styles/*'))
    .pipe(gulp.dest(path.resolve('../lib/styles')))
    .pipe(gulp.dest(path.resolve('../es6/styles')))
});

// 单个组件打包less
allComponents.forEach((component) => {
  gulp.task(component, function () {
    return gulp.src(path.resolve(`../components/${component}/style/index.less`))
      .pipe(less({
        plugins: [autoprefix],
      }))
      .pipe(cleanCSS())
      .pipe(gulp.dest(path.resolve(`../lib/${component}/`)))
      .pipe(gulp.dest(path.resolve(`../es6/${component}/`)))
      .pipe(gulp.dest(path.resolve(`../lib/${component}/style`)))
      .pipe(gulp.dest(path.resolve(`../es6/${component}/style`)));
  });
})

// 单个组件打包less.js
allComponents.forEach((component) => {
  gulp.task(component + 'Less', function () {
    return gulp.src(path.resolve(`../components/${component}/style/*`))
      .pipe(gulp.dest(path.resolve(`../lib/${component}/style`)))
      .pipe(gulp.dest(path.resolve(`../es6/${component}/style`)));
  });
})

const allComponentsLess = allComponents.map((item) => `${item}Less`)

gulp.task('default', ['less', 'common', 'font', 'styles', ...allComponents, ...allComponentsLess]);