var gulp = require('gulp');
var del = require('del');
var utils = require('./_utils');

gulp.task('clean', function() {
  del([utils.destPath]);
});
