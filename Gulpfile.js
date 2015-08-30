var gulp              = require('gulp');
var changed           = require('gulp-changed');
var sass              = require('gulp-sass');
var autoprefixer      = require('gulp-autoprefixer');
var cssmin            = require('gulp-minify-css');
var sourcemaps        = require('gulp-sourcemaps');
var concat            = require('gulp-concat');
var uglify            = require('gulp-uglify');
var notify            = require('gulp-notify');
var plumber           = require('gulp-plumber');
var imagemin          = require('gulp-imagemin');
var watch             = require('gulp-watch');
var rename            = require('gulp-rename');

var opn               = require('opn');
var argv              = require('yargs').argv;
var runsequence       = require('run-sequence');
var browserSync       = require('browser-sync').create();
var reload            = browserSync.reload;


var plumberErrorHandler = {
  errorHandler: notify.onError({
    title: 'Gulp',
    message: "Error: <%= error.message %>"
  })
};

var browserSyncOptions = {
  files: 'deploy/**/*',
  server: {
    baseDir: "deploy/"
  },
  open: false
};

gulp.task('styles', function() {
  return gulp.src(['dev/styles/*.scss'])
    .pipe(plumber(plumberErrorHandler))
    .pipe(sourcemaps.init())
    .pipe(sass({ errLogToConsole: true }))
    .pipe(autoprefixer({ browsers: ['last 2 versions', 'ie >= 10', 'Android >= 4.3'] }))
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('deploy/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', function() {
  return gulp.src(['dev/scripts/drink-data.js', 'dev/scripts/modules/*.js', 'dev/scripts/init.js'])
    .pipe(plumber(plumberErrorHandler))
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('deploy/scripts'))
    .pipe(reload({stream: true}));
});

gulp.task('copy', function() {
  return gulp.src(['dev/markup/*.html'])
    .pipe(plumber(plumberErrorHandler))
    .pipe(changed('deploy/'))
    .pipe(gulp.dest('deploy/'))
    .pipe(reload({stream: true}));
});

gulp.task('imagemin', function() {
  return gulp.src(['dev/images/*'])
    .pipe(plumber(plumberErrorHandler))
    .pipe(changed('deploy/images'))
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('deploy/images'))
    .pipe(reload({stream: true}));
});

gulp.task('clean', function(cb) {
    del(['deploy/**/*'], cb);
});

gulp.task('build', ['clean'], function(cb) {
  runsequence(['copy', 'imagemin', 'styles', 'scripts'], cb);
});

gulp.task('watch', ['build'], function() {
  gulp.watch(['dev/styles/**/*.scss'], ['styles']);
  gulp.watch(['dev/scripts/**/*.js'], ['scripts']);
  gulp.watch(['dev/images/*'], ['imagemin']);
  gulp.watch(['dev/markup/**'], ['copy']);
});

gulp.task('serve', ['watch'], function() {
  browserSync.init(browserSyncOptions);
  var url = 'http://localhost:3000';
  if (argv.sub) {
    url = 'http://'+argv.sub+'.localhost:3000';
  }
  opn(url, {app: 'google chrome'});
});

gulp.task('default', ['clean', 'build', 'watch', 'serve']);
