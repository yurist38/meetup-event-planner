'use strict';

var gulp       = require('gulp'),
    config     = require('./gulp/config'),
    sequence   = require('gulp-sequence'),
    requireDir = require('require-dir');

requireDir( './gulp/tasks', { recurse: true } );

var mainTasks = [
    'serveCss',
    //'vendorCss',
    'serveJs',
    'vendorJs',
    'polymer'
];

gulp.task('default', sequence('cleanup', mainTasks));

gulp.task('dev', sequence('server:start', 'default', 'bs', 'watch-all'));
