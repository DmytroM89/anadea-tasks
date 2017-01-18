var gulp         = require('gulp'),
    spritesmith  = require('gulp.spritesmith');

gulp.task('sprite', function() {
  var spriteData =
    gulp.src('./img/png/*.*')
      .pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.css',
        cssFormat: 'css',
        algorithm: 'binary-tree',
        imgPath: '../img/sprite.png'
      }));
  spriteData.img.pipe(gulp.dest('./img'));
  spriteData.css.pipe(gulp.dest('./css'));
});
