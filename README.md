# README #

This is very first project on `Github` which represents my personal front-end stack at this moment. This latter involves:

* [ECMAScript 6](https://github.com/lukehoban/es6features)
* [jspm](http://jspm.io/)
* [Gulp](http://gulpjs.com/)
* [Sass](http://sass-lang.com/)

## Gulp ##

The gulpfile is composed of basic tasks:

* default: run `build` task
* build: run `clean` then all tasks require for building the app.
* clean: delete `dest` directory
* help: list all defined tasks
* sass: `Sass` compilation
* watch: run a [static server](http://browsersync.io) and watch files using `gulp-watch` plugin

These tasks are split into separated files in the `gulp_tasks` directory for a better readability.

`gulp_tasks/_utils.js` is a common module for writing our gulp tasks. You can add functions in it.

## Todos ##

* Replace `Sass` with `cssnext`
* Improve the `README.md`
* Gulp
    * **IMPORTANT: jspm tasks for creating a `bundle.js` for production**
    * image task
    * minify task
