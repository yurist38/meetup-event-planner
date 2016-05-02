'use strict';

var gulp       = require('gulp'),
    config     = require('./gulp/config'),
    sequence   = require('gulp-sequence'),
    requireDir = require('require-dir');

requireDir( './gulp/tasks', { recurse: true } );

gulp.task('default', sequence('cleanup', 'serveCss', 'serveJs', 'polymer'));

gulp.task('dev', sequence('default', 'bs', 'watch-all'));
