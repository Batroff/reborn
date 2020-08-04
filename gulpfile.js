const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass');
const gulpif = require('gulp-if');
const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');
const terser = require('gulp-terser');
const smartgrid = require('smart-grid');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const browserSync = require('browser-sync').create();

// Args ===========================

const isDev = process.argv.includes('--dev');
const isSync = process.argv.includes('--sync');

// functions ======================

function buildCSS() {
  return gulp.src('./src/css/*.scss')
              .pipe(gulpif(isDev, sourcemaps.init()))
              .pipe(sass( {includePaths: require('node-normalize-scss').includePaths} )
              .on('error', sass.logError))
              .pipe(gcmq())
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
  return gulp.src('./src/js/**/*.*')
              .pipe(gulpif(isDev, sourcemaps.init()))
              // .pipe(concat('all.js'))
              // .pipe(gulpif(!isDev, uglify(
              //   {
              //     toplevel: true
              //   })))
              .pipe(gulpif(!isDev, terser()))
              .on('error', console.error.bind(console))
              .pipe(sourcemaps.write())
              .pipe(gulp.dest('./build/js'))
              .pipe(gulpif(isSync, browserSync.stream()));
}

function buildHTML() {
  return gulp.src('./src/**/*.html')
              .on('error', console.error.bind(console))
              .pipe(gulp.dest('./build'))
              .pipe(gulpif(isSync, browserSync.stream()));
}

function buildIMG() {
  return gulp.src('./src/images/**/*.*')
              .pipe(imagemin([
                imagemin.gifsicle({interlaced: true}),
                imagemin.mozjpeg({quality: 75, progressive: true}),
                imagemin.optipng({optimizationLevel: 5}),
                imagemin.svgo({ plugins: [
                  { removeViewBox: true },
                  { cleanupIDs: false }
                ]})
              ]))
              .on('error', console.error.bind(console))
              .pipe(gulp.dest('./build/images'))
              .pipe(gulpif(isSync, browserSync.stream()));
}


function clearBuild() {
  return del(['build/css/*', 'build/*.html', 'build/js/*', 'build/images/*']);
}

function watch() {
  if(isSync) {
    browserSync.init({
      server: {
        baseDir: "./build"
      }
    });
  }

  gulp.watch('./src/css/**/*.*', buildCSS);
  gulp.watch('./src/js/**/*.*', buildJS);
  gulp.watch('./src/**/*.html', buildHTML);
  gulp.watch('./src/images/**/*.*', buildIMG);
}


function grid(done) {
  var settings = {
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
      maxWidth: '1280px', /* max-width оn very large screen */
      fields: '30px' /* side fields */
    },
    breakPoints: {
      lg: {
        width: '1100px', /* -> @media (max-width: 1100px) */
      },
      md: {
        width: '992px'
      },
      sm: {
        width: '768px',
      },
      xs: {
        width: '576px'
      },
      xxs: {
        width: '320px'
      }
    }
  };

  smartgrid('./src/local_modules/smart-grid', settings);
  done();
}

function clearModules() {
  return del('./build/local_modules/*');
}

function buildModules() {
  return gulp.src('./src/local_modules/**/*')
              .pipe(gulp.dest('./build/local_modules'));
}

function clearFonts() {
  return del('./build/fonts/*');
}

function buildFonts() {
  return gulp.src('./src/fonts/**/*')
              .pipe(gulp.dest('./build/fonts'));
}

// tasks ==========================

let modules = gulp.series(clearModules, buildModules);
let fonts = gulp.series(clearFonts, buildFonts);
let build = gulp.series(clearBuild,
  gulp.parallel(buildCSS, buildJS, buildIMG, buildHTML, buildFonts));

gulp.task('clear', clearBuild);
gulp.task('build', build);
gulp.task('grid', grid);
gulp.task('modules', modules);
gulp.task('fonts', fonts);

gulp.task('watch', gulp.series('build', watch));
