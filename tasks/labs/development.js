var gulp = require('gulp-param')(require('gulp'), process.argv),
  watch = require('gulp-watch');

/** Middlewares */
var browserSync = require('browser-sync').create();

var config = require('../config');
/*   
 * ### 151130   
 * Add to Laboratory    
 */
gulp.task('labs', function() {
  browserSync.init({
    server: {
      baseDir: ["./", "./src_labs"],
    },
    port: '1000',
    ui: {
      port: '1001'
    }
  });

  gulp.watch('./src_labs' + config.path.depth).on('change', browserSync.reload);
});
