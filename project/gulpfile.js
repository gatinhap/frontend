var gulp = require('gulp');
var sass = require("gulp-sass");

gulp.task('hello', async function () {
    console.log("Hello Zell");
});

function style() {
    return (
        gulp
            .src("app/scss/*.scss")
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(gulp.dest("app/css"))
    );
}

exports.style = style;