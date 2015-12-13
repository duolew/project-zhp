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
 .pipe(jshint())                                 //����js
 .pipe(jshint.reporter()); // ��������
 });

gulp.task('less-css',function(){
    gulp.src('client/static/css/*.less')
        .pipe(less())                            //�Ƚ�lessת����css
        .pipe(gulp.dest('client/static/css/'));
});
gulp.task('all-html',function(){
    gulp.src('client/page/*.html')
        .pipe(md5(10))                          //��html���md5��
        .pipe(gulp.dest('dist/page'))
});
gulp.task('all-css',function(){
    gulp.src('client/static/css/*.css')         //�����ļ���
        .pipe(concat('main.css'))               //�����������css�����main.css,��Ϊ����md5����������������һ��Ҫ��html��������ģ�����Ļ��Ҳ������޸Ĳ���html������
        .pipe(minifyCss())                      //ѹ��CSS
        .pipe(md5(10,'client/page/*.html'))     //MD5�ĳ���Ϊ10�������Զ��޸���������md5�ļ��������ַ����
        .pipe(gulp.dest('dist/css'))            //�����ļ���
});
gulp.task('all-js',function(){
    gulp.src('client/static/js/*.js')
        .pipe(concat('index.js'))
        .pipe(uglify())                         //ѹ��js
        .pipe(md5(10,'client/page/*.html'))
        .pipe(gulp.dest('dist/js'))
});
//default
gulp.task('default', ['Lint','all-html','less-css','all-css','all-js'], function() {
  gulp.start();                                 //������Ҳ���Է���task�������������������û��˳���
});
gulp.watch('client/static/css/*.less',['default']);
                                                //�������Ŀ¼�µ�less�ļ������仯ʱ��ִ��default����
