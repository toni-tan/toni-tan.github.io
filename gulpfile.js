// npm install gulp gulp-sass browser-sync

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("sass/*.sass", ['sass']);
});

gulp.task('sass', function () {
    gulp.src('sass/style.sass')
    //gulp.src('sass/*.sass')
        .pipe(sass({includePaths: ['sass']}))
        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js", "*.html"], {
        // server: {
        //     baseDir: "./"
        // },
        server: "./",
        port: 3000,
        notify: false
    });
});

/*
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on('change', browserSync.reload);
});
*/