
var gulp = require('gulp');
gulp.task('default',function(){
    console.log("Hey there i am using gulp");
});


// css clean with gulp
const cleanCSS = require('gulp-clean-css');
 
gulp.task('cleanCSS', () => {
  return gulp.src('*.css')
    .pipe(cleanCSS({compatibility: 'ie11'}))
    .pipe(gulp.dest('dist'));
});