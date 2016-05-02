var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

module.exports = function(tasks) {
    tasks.forEach(function(name) {
        gulp.task(name, require('./tasks/' + name)(gulp, plugins));
    });

    gulp.task('default', plugins.sequence('serveCss', 'serveJs', 'polymer'));

    return gulp;
};
