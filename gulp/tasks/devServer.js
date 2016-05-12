var gulp   = require('gulp'),
    server = require('gulp-develop-server'),
    sequence = require('gulp-sequence');

gulp.task('server:start', function() {
    server.listen({ path: './app.js' });
});
