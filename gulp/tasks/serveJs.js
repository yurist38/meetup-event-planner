var gulp       = require('gulp'),
    config     = require('../config'),
    babel      = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber    = require('gulp-plumber'),
    concat     = require('gulp-concat'),
    uglify     = require('gulp-uglify');

var bundle = [
    config.paths.bower + 'webcomponentsjs/webcomponents.min.js'
];

gulp.task('serveJs', function() {
    console.log('Serving JS...');

    return gulp.src(config.paths.js + '**/*.{js,es6}')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.distJs));
});

gulp.task('vendorJs', function() {
    console.log('Serve vendor\'s JS...');

    return gulp.src(bundle)
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.distJs));
});
