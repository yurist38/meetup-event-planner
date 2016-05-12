var gulp         = require('gulp'),
    config       = require('../config');
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    extname      = require('gulp-extname'),
    sourcemaps   = require('gulp-sourcemaps'),
    plumber      = require('gulp-plumber'),
    concat       = require('gulp-concat');

var vendorStyles = [
    config.paths.bower + 'bootstrap/dist/css/bootstrap.min.css'
];

gulp.task('serveCss', function() {
    console.log('Compiling SCSS to CSS, adding autoprefixes and sourcemaps...');

    return gulp.src(config.paths.scss + '**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('bundle.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.distCss));
});

gulp.task('vendorCss', function() {
    console.log('Serve vendor\'s styles...');

    return gulp.src(vendorStyles)
        .pipe(plumber())
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(config.paths.distCss));
});
