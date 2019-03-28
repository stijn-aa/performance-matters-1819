const gulp = require('gulp');
// const uglify = require('gulp-uglify');
// const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');


// gulp.task("minifyJS", function(){
// return gulp.src(["./src/app.js"])

//     .pipe(babel({
//         presets: ["@babel/env"]
//     }))
//     .pipe(uglify())
//     .pipe(gulp.dest("./public/js/"))

// });

gulp.task("minifyCSS", function(){
    return gulp.src(["./src/styles.css"])

    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest("./public/css/"))

});


