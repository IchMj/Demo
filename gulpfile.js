'use strict'
var gulp = require('gulp');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var browsersync = require('browser-sync').create();

//注册第一个任务
//复制文件
gulp.task('copy',function(){
   gulp.src('src/index.html')
       .pipe(gulp.dest('dist/'))
});
//编译less文件 复制压缩
gulp.task('style',function(){
    gulp.src('src/css/*.less')
        .pipe(less())
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css/'));
});
//当文件发生变化的时候自动执行
gulp.task('dist',function(){
    gulp.watch('src/index.html',['copy']);
    gulp.watch('src/css/*.less',['style']);

});
gulp.task('serve',function(){
    browsersync.init({
        server:{
            baseDir:'./'
        }
    });
})

