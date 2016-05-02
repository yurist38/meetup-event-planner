var gulp   = require('gulp'),
    config = require('../config'),
    del    = require('del');

gulp.task('cleanup', function() {
    console.log('Clean dist folder first...');
    return del(config.paths.dist + '*', '!' + config.paths.dist + 'vendor');
});
