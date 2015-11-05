var gulp = require('gulp');
var eslint = require('gulp-eslint');
var utils = require('./_utils');

gulp.task('lint', function() {
    return gulp.src([utils.srcPath + '/scripts/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());
});
