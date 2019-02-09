var gulp = require('gulp');

// plugins
var less = require('gulp-less');

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

gulp.task('less', function(done) {
  gulp.src('src/assets/stylesheets/pre-compiled/*.less')
    .pipe(less())
    .pipe(gulp.dest('src/assets/stylesheets/compiled'));
  console.log('ran file');
  done();
});

exports.default = defaultTask;
