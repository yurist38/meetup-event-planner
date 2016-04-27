
var config = require('./gulp/config');
var gulp = require('./gulp')(config.tasks);
    // clean        = require('gulp-clean'),
    // sass         = require('gulp-sass'),
    // autoprefixer = require('gulp-autoprefixer'),
    // babel        = require('gulp-babel'),
    // extname      = require('gulp-extname'),
    // sourcemaps   = require('gulp-sourcemaps'),
    // plumber      = require('gulp-plumber'),
    // concat       = require('gulp-concat'),
    // vulcanize    = require('gulp-vulcanize');

/*var paths = {
    js: './assets/js/',
    scss: './assets/scss/',
    distJs: './public/dist/js/',
    distCss: './public/dist/css/',
    bower: './bower_components/'
};*/

// gulp.task('serve-css', function() {
//     console.log('Compiling SCSS to CSS, adding autoprefixes and sourcemaps...');
//
//     return gulp.src(paths.scss + '**/*.scss')
//         .pipe(plumber())
//         .pipe(sourcemaps.init())
//         .pipe(sass({
//             outputStyle: 'compressed'
//         }).on('error', sass.logError))
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest(paths.distCss));
// });

// gulp.task('serve-js', function() {
//     console.log('Compiling ES6 files to JS...');
//
//     return gulp.src(paths.js + '**/*.es6')
//         .pipe(plumber())
//         .pipe(sourcemaps.init())
//         .pipe(babel({presets: ['es2015']}))
//         .pipe(sourcemaps.write())
//         .pipe(extname('.js'))
//         .pipe(gulp.dest(paths.distJs));
// });

// gulp.task('polymer', function () {
//     gulp.src(paths.bower + "webcomponentsjs/webcomponents.min.js")
//         .pipe(gulp.dest("./public/dist/js/polymer/"));
//
//     gulp.src('./assets/polymer-elements/elements.html')
//         .pipe(vulcanize({
//             stripComments: true,
//             inlineScripts: true,
//             inlineCss: true
//         }))
//         .pipe(gulp.dest('./public/dist/polymer-elements/'));
// });

// gulp.task('watch-all', function() {
//     gulp.watch([
//         paths.scss + '**/*.scss',
//         paths.js + '**/*.es6'
//     ], ['default']);
// });

gulp.task('default', ['serveCss', 'serveJs', 'polymer']);
