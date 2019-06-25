const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
const distDir = 'docs/images';
const srcDir = 'src';

gulp.task('image', () => {
  return gulp.src(srcDir + '/images/*.{png,jpg,gif}')
    .pipe(imagemin([
      pngquant('65-80'),
      mozjpeg({
        quality: 65,
        progressive: true
      }),
      imagemin.svgo(),
      imagemin.optipng(),
      imagemin.gifsicle()
    ]))
    .pipe(gulp.dest(distDir));
});