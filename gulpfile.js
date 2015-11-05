var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var batch = require('gulp-batch');
var watch = require('gulp-watch');
var taskListing = require('gulp-task-listing');
var utils = require('./gulp_tasks/_utils');

// Require all tasks in gulp_tasks directory
requireDir('./gulp_tasks');

// help : task listing
gulp.task('help', taskListing);

// Build task
gulp.task('build', function(callback) {
    runSequence('clean', 'sass', callback);
});

// Static server powered by Browser Sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

// Watch
gulp.task('watch', ['browser-sync'], function() {

    // watch styles
    watch(utils.srcPath + '/styles/scss/**/*.scss', batch(function(events, done) {
        gulp.start('sass', done);
    }));

    // browser-sync-watch dest styles
    var srcDestStyles = utils.destPath + '/styles/*.css';
    watch(srcDestStyles, batch(function() {
        return gulp.src(srcDestStyles).pipe(browserSync.stream());
    }));

    // browser-sync-watch html
    var srcHtml = './*.html';
    watch(srcHtml, batch(function() {
        return gulp.src(srcHtml).pipe(browserSync.stream());
    }));
});

// Default
gulp.task('default', ['build', 'watch']);
