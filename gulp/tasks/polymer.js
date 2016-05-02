var gulp      = require('gulp'),
    config    = require('../config'),
    vulcanize = require('gulp-vulcanize'),
    minifyHTML = require('gulp-minify-html');

gulp.task('polymer', function () {
    console.log('Serve Polymer elements...');

    gulp.src('./assets/polymer-elements/elements.html')
        .pipe(vulcanize({
            stripComments: true,
            inlineScripts: true,
            inlineCss: true
        }))
        .pipe(minifyHTML())
        .pipe(gulp.dest('./public/dist/polymer-elements/'));
});
