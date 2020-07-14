const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const del = require('del');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
var sass = require('gulp-sass');
/*---------------------------------------------------------------------*/

const isDev = process.argv.includes('--dev');
const isSync = process.argv.includes('--sync');

const CSSFiles = [
  './src/css/styles.scss'
];

const JSFiles = [
  './src/js/test.js',
  './src/js/slider.js',
];
/*---------------------------------------------------------------------*/

function buildCSS()
{
  return gulp.src(CSSFiles)
              .pipe(gulpif(isDev, sourcemaps.init()))
              .pipe(sass({
                includePaths: require('node-normalize-scss').includePaths
              }))
              .pipe(concat('all.css'))
              .pipe(autoprefixer(
                {
                  cascade: false
                }))
              .pipe(gulpif(!isDev, cleanCSS(
                {
                  level: 2
                })))
              .pipe(sourcemaps.write())
              .pipe(gulp.dest('./build/css'))
              .pipe(gulpif(isSync, browserSync.stream()));
}

function buildJS() {
  return gulp.src(JSFiles)
              .pipe(gulpif(isDev, sourcemaps.init()))
              .pipe(concat('all.js'))
              .pipe(gulpif(!isDev, uglify(
                {
                  toplevel: true
                })))
              .pipe(sourcemaps.write())
              .pipe(gulp.dest('./build/js'))
              .pipe(gulpif(isSync, browserSync.stream()));
}

function buildHTML()
{
  return gulp.src('./src/**/*.html')
              .pipe(gulp.dest('./build'))
              .pipe(gulpif(isSync, browserSync.stream()));
}

function buildIMG()
{
  return gulp.src('./src/images/**/*.*')
              .pipe(imagemin([
                  imagemin.gifsicle({interlaced: true}),
                  imagemin.mozjpeg({quality: 75, progressive: true}),
                  imagemin.optipng({optimizationLevel: 5}),
                  imagemin.svgo({
                      plugins:
                      [
                          {removeViewBox: true},
                          {cleanupIDs: false}
                      ]})
                ]))
              .pipe(gulp.dest('./build/images'))
              .pipe(gulpif(isSync, browserSync.stream()));
}
/*---------------------------------------------------------------------*/

function clearBuild()
{
  return del('build/*');
}

function watch()
{
  if(isSync)
  {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
  }

  gulp.watch('./src/css/**/*.scss', buildCSS);
  gulp.watch('./src/js/**/*.js', buildJS);
  gulp.watch('./src/**/*.html', buildHTML);
  gulp.watch('./src/images/**/*.*', buildIMG);
}

let build = gulp.series(clearBuild, gulp.parallel(buildCSS, buildJS , buildIMG, buildHTML));

gulp.task('clear', clearBuild);
gulp.task('build', build);

gulp.task('watch', gulp.series('build', watch));
