const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-csso');

function full() {
  return src('./src/smallbear-full.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('./dist'));
}

function nolayout() {
  return src('./src/smallbear-nolayout.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('./dist'));
}

function type() {
  return src('./src/smallbear-type.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('./dist'));
}

exports.full = full;
exports.nolayout = nolayout;
exports.type = type;
exports.default = parallel(full, nolayout, type);
exports.watch = () => {
  watch('./src/**/*.scss', parallel(full, nolayout, type));
};
