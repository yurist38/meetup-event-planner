var gulp       = require('gulp'),
    config     = require('../config'),
    babel      = require('gulp-babel'),
    //extname    = require('gulp-extname'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber    = require('gulp-plumber'),
    concat     = require('gulp-concat'),
    uglify     = require('gulp-uglify');

var bundle = [
    config.paths.bower + 'webcomponentsjs/webcomponents.min.js'
];

gulp.task('serveJs', function() {
    console.log('Serving JS...');

    gulp.src(bundle)
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.distJs));

    gulp.src(config.paths.js + '**/*.{js,es6}')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['es2015']}))
        .pipe(sourcemaps.write('.'))
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.distJs));

    return gulp;
});
