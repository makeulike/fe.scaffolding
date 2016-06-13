/** Gulp and Gulp plugin */
var gulp = require('gulp-param')(require('gulp'), process.argv)
  concat = require('gulp-concat'),
  imageDataURI = require('gulp-image-data-uri');


var config = require('../config');

/*
 * ## 160219
 * Labs start
 * @Desc: Image to DataURI
  > /images/uri/** 에서 folder(parent)/filename(class) 형태로 data-uri.scss 파일을 생성 시킴.
 * @Anchor: Jeong MyoungHakl
 */

gulp.task('imageToDataURI', function(product) {

  /**
   * 각 프로젝트 별 개발 경로를 SRC로 변환하는 작업이 필요.
   * @date 151113
   */
  if (product !== null) {
    config.path.base = 'archive/' + product;
    config.setBasePath(config.path.base);
  }

  return gulp.src(config.path.src[1] + '/images/uri/**/*')
    .pipe(imageDataURI({
      template: {
        file: './templates/data-uri.css'
      },
      customClass: function(className, file) {
        var string = className + '.';
        var filePath = file.path.toString().split('\\');

        return 'uri-' + filePath[filePath.length - 2] + '.' + className;
      }
    }))
    .pipe(concat('_data-uri.scss'))
    .pipe(gulp.dest(config.path.src[1] + '/scss/modules'));
});
// ------------- Labs finished -------------- //
