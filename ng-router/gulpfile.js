var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    md5 = require("gulp-md5-plus"),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    less = require('gulp-less');

// jshint
gulp.task('Lint', function () {
  gulp.src('client/static/js/*.js')
 .pipe(jshint())                                 //检验js
 .pipe(jshint.reporter()); // 输出检查结果
 });

gulp.task('less-css',function(){
    gulp.src('client/static/css/*.less')
        .pipe(less())                            //先将less转换成css
        .pipe(gulp.dest('client/static/css/'));
});
gulp.task('all-html',function(){
    gulp.src('client/page/*.html')
        .pipe(md5(10))                          //给html添加md5戳
        .pipe(gulp.dest('dist/page'))
});
gulp.task('all-css',function(){
    gulp.src('client/static/css/*.css')         //引入文件夹
        .pipe(concat('main.css'))               //将所有引入的css打包到main.css,因为引入md5戳，所以这里打包名一定要是html中引入过的，否则的话找不到，修改不了html内引入
        .pipe(minifyCss())                      //压缩CSS
        .pipe(md5(10,'client/page/*.html'))     //MD5的长度为10，并且自动修改引入增加md5文件的引入地址！！
        .pipe(gulp.dest('dist/css'))            //输入文件夹
});
gulp.task('all-js',function(){
    gulp.src('client/static/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())                         //压缩js
        .pipe(md5(10,'client/page/*.html'))
        .pipe(gulp.dest('dist/js'))
});
//default
gulp.task('default', ['Lint','all-html','less-css','all-css','all-js'], function() {
  gulp.start();                                 //这个里边也可以放入task任务名，但是这里边是没有顺序的
});
gulp.watch('client/static/css/*.less',['default']);
                                                //监听这个目录下的less文件，当变化时，执行default任务！
