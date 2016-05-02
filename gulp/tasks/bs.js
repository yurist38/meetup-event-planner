var gulp = require('gulp'),
    bs   = require('browser-sync').create();

gulp.task('bs', function() {
    bs.init(null, {
        proxy: 'localhost:3000',
        port: 4000,
        notify: false
    });
});

gulp.task('reload', function () {
  bs.reload();
});
