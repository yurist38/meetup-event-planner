var gulp       = require('gulp'),
    config     = require('../config'),
    del        = require('del'),
    vulcanize  = require('gulp-vulcanize'),
    babel      = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber    = require('gulp-plumber'),
    uglify     = require('gulp-uglify'),
    extname    = require('gulp-extname'),
    sequence   = require('gulp-sequence'),
    concat     = require('gulp-concat'),
    minifyHTML = require('gulp-minify-html');

gulp.task('polymer', function(callback) {
    sequence('remove-js-compiled', 'compile-js', 'serve-elements')(callback);
});

gulp.task('remove-js-compiled', function() {
    console.log('Removing compiled polymer elements JS');

    return del(config.paths.elements + 'js');
});

gulp.task('compile-js', function() {
    console.log('Compiling polymer elements ES6 to JS...');

    return gulp.src(config.paths.elements + 'es6/*.es6')
        .pipe(plumber())
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(uglify())
        .pipe(extname('.js'))
        .pipe(gulp.dest(config.paths.elements + 'js'));
});

gulp.task('serve-elements', function() {
    console.log('Serving polymer elements...');

    return gulp.src(config.paths.elements + 'polymer-elements.html')
        .pipe(vulcanize({
            stripComments: true,
            inlineScripts: true,
            inlineCss: true
        }))
        .pipe(concat('elements.html'))
        .pipe(minifyHTML())
        .pipe(gulp.dest('./public/dist/polymer-elements/'));
});
