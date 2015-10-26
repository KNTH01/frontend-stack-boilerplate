var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var utils = require('./_utils');

// PostCSS plug-ins
var autoprefixer = require('autoprefixer');
var reporter = require("postcss-reporter")
var postcssPlugins = [
  autoprefixer({
    browsers: ['last 2 versions'],
  }),
  require('cssgrace'),
  reporter({
    clearMessages: true,
  })
];

gulp.task('sass', function(done) {
  return gulp.src(utils.srcPath + '/styles/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    // PostCSS
    .pipe(postcss(postcssPlugins))
    .on('error', done)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(utils.destPath + '/styles/'));
});

gulp.task('sass-bootstrap', function(done) {
  return gulp.src(utils.srcPath + '/styles/bootstrap/bootstrap.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    // PostCSS
    .pipe(postcss(postcssPlugins))
    .on('error', done)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(utils.destPath + '/styles/'));
});
