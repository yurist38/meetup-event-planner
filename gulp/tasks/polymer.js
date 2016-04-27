var gulp = require('gulp');
var config = require('../config');
var vulcanize = require('gulp-vulcanize');

var polymer = function () {
    gulp.src(config.paths.bower + "webcomponentsjs/webcomponents.min.js")
        .pipe(gulp.dest("../../public/dist/js/polymer/"));

    gulp.src('./assets/polymer-elements/elements.html')
        .pipe(vulcanize({
            stripComments: true,
            inlineScripts: true,
            inlineCss: true
        }))
        .pipe(gulp.dest('./public/dist/polymer-elements/'));

    return gulp;
};

gulp.task('polymer', polymer);
module.exports = gulp;
