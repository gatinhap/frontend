var gulp = require('gulp');
var sass = require('gulp-sass');

function style() {
    return (
        gulp
            .src('*.scss')
            .pipe(sass())
            .on('error', sass.logError)
            .pipe(gulp.dest('css'))
    );
}

exports.style = style;