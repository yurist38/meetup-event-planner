var gulp       = require('gulp'),
    config     = require('../config'),
    del        = require('del'),
    vulcanize  = require('gulp-vulcanize'),
    babel      = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber    = require('gulp-plumber'),
    uglify     = require('gulp-uglify'),
    extname    = require('gulp-extname'),
    minifyHTML = require('gulp-minify-html');

gulp.task('polymer', function () {
    console.log('Serve Polymer elements...');

    del(config.paths.elements + 'js');

    gulp.src(config.paths.elements + 'es6/*.es6')
        .pipe(plumber())
        .pipe(babel({presets: ['es2015']}))
        .pipe(uglify())
        .pipe(extname('.js'))
        .pipe(gulp.dest(config.paths.elements + 'js'));

    gulp.src('./assets/polymer-elements/elements.html')
        .pipe(vulcanize({
            stripComments: true,
            inlineScripts: true,
            inlineCss: true
        }))
        .pipe(minifyHTML())
        .pipe(gulp.dest('./public/dist/polymer-elements/'));
});
