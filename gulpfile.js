var gulp = require('gulp'),
  connect = require('gulp-connect'),
  open = require('gulp-open');
 
gulp.task('connect', function() {
  connect.server({
    root: './',
    port: 8888,
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});
gulp.task('css', function () {
  gulp.src('./css/*.css')
    .pipe(connect.reload());
});
gulp.task('js', function () {
  gulp.src('./js/*.js')
    .pipe(connect.reload());
});

gulp.task('open',['connect'],function(){
  gulp.src('./')
    .pipe(open({uri: 'http://localhost:8888', app: 'Chrome'}));
});
 
gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch(['./css/*.css'], ['css']);
  gulp.watch(['./js/*.js'], ['js']);
});
 
gulp.task('default', ['connect', 'open', 'watch']);