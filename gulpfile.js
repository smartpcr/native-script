var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer')

gulp.task('serve', ['stylus'], function() {

    browserSync.init({
        server: './'
    });

    gulp.watch('./stylus/main.styl', ['stylus']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('stylus', function() {
    return gulp.src('./stylus/main.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);