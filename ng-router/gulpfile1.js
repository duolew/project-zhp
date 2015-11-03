var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    md5 = require("gulp-md5-plus"),
    uglify = require('gulp-uglify'),
    less = require('gulp-less');

// Lint JS
gulp.task('lint', function() {

  gulp.src('./src/main/js/**.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));

});


gulp.task('concat', function(){

  return [gulp.src('./core/src/main/less/*.css')
           .pipe(gulp.dest('./user/src/main/less/')),
          gulp.src('./core/src/main/less/*.less')
            .pipe(gulp.dest('./user/src/main/less/'))];

});

// Concat & Minify JS
gulp.task('minify', function(){

    gulp.src(['./core/src/main/js/YChart/Globals.js',
      './core/src/main/js/YChart/Chart.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./core/output/resources/js/'));
        
    gulp.src('./core/src/main/js/**.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./core/output/resources/js/'));

});

// Default
gulp.task('default', function(){

  gulp.start('lint', 'minify');

  // Watch JS Files
  gulp.watch("./core/src/main/js/*.js", function(event){
    gulp.start('lint', 'minify');
  });

});

gulp.task('vip.copy', ['concat'], function() {

  gulp.src('./user/src/main/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./user/src/main/less'));


  gulp.src('./core/output/resources/*')
    .pipe(gulp.dest('./user/output/resources/'));

  gulp.src('./user/src/main/less/*.css')
    .pipe(gulp.dest('./user/output/resources/css/'));

  gulp.src('./user/src/main/js/*.js')
    .pipe(gulp.dest('./user/output/resources/js/'));

  gulp.src(['./bower_components/jquery/dist/jquery.js',
    './bower_components/fastclick/lib/fastclick.js',
    './bower_components/lily/dist/lily-all.js',
    './bower_components/jquery-pjax/jquery.pjax.js'])
    .pipe(gulp.dest('./user/output/resources/js/'));

  gulp.src('./user/src/main/twirlSrc/**/*.html')
    .pipe(gulp.dest('./user/src/main/twirl/'));

});

gulp.task('vip.compile', function() {

  gulp.src('./core/output/resources/js/**')
    .pipe(gulp.dest('./user/output/resources/js/'));


  var jsSrc = './user/output/resources/**',
    quoteSrc = './user/src/main/twirl/**/*.html',
    htmlDst = './user/src/main/webapp/resources/'

  return gulp.src(jsSrc)
    .pipe(md5(10 ,quoteSrc))
    .pipe(gulp.dest(htmlDst));


});

gulp.task('vip.develop', function() {

  gulp.src('./core/output/resources/js/**')
    .pipe(gulp.dest('./user/output/resources/js/'));


  var jsSrc = './user/output/resources/**',
    quoteSrc = './user/src/main/twirl/**/*.html',
    htmlDst = './user/src/main/webapp/resources/'

  return gulp.src(jsSrc)
    .pipe(gulp.dest(htmlDst));

});

gulp.task('merchant.copy', ['concat'], function() {

  gulp.src('./merchant/src/main/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./merchant/src/main/less'));


  gulp.src('./core/output/resources/*')
    .pipe(gulp.dest('./merchant/output/resources/'));

  gulp.src('./merchant/src/main/less/*.css')
    .pipe(gulp.dest('./merchant/output/resources/css/'));

  gulp.src('./merchant/src/main/js/*.js')
    .pipe(gulp.dest('./merchant/output/resources/js/'));

  gulp.src(['./bower_components/jquery/dist/jquery.js',
    './bower_components/fastclick/lib/fastclick.js',
    './bower_components/lily/dist/lily-all.js',
    './bower_components/jquery-pjax/jquery.pjax.js'])
    .pipe(gulp.dest('./merchant/output/resources/js/'));

  gulp.src('./merchant/src/main/twirlSrc/**/*.html')
    .pipe(gulp.dest('./merchant/src/main/twirl/'));

});

gulp.task('merchant.compile', function() {

  gulp.src('./core/output/resources/js/**')
    .pipe(gulp.dest('./merchant/output/resources/js/'));


  var jsSrc = './merchant/output/resources/**',
    quoteSrc = './merchant/src/main/twirl/**/*.html',
    htmlDst = './merchant/src/main/webapp/resources/'

  return gulp.src(jsSrc)
    .pipe(md5(10 ,quoteSrc))
    .pipe(gulp.dest(htmlDst));


});

gulp.task('merchant.develop', function() {

  gulp.src('./core/output/resources/js/**')
    .pipe(gulp.dest('./merchant/output/resources/js/'));


  var jsSrc = './merchant/output/resources/**',
    quoteSrc = './merchant/src/main/twirl/**/*.html',
    htmlDst = './merchant/src/main/webapp/resources/'

  return gulp.src(jsSrc)
    .pipe(gulp.dest(htmlDst));

});