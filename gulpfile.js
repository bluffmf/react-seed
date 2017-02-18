
var gulp = require('gulp');
var react = require('gulp-react');
var del = require('del');
var runSequence = require('run-sequence');
var run = require('gulp-run');
var server = require('gulp-express');





gulp.task('default', function(callback) {
    runSequence('build', callback);
});

gulp.task('build', function(callback) {
    runSequence('clean', 'copy-build', 'server', callback);
});

gulp.task('clean', function() {
    del.sync(['./dist']);
});

gulp.task('copy-build', ['copy-index-html', 'jsx-to-js']);

gulp.task('copy-index-html', function() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('jsx-to-js', function() {
    return gulp.src('./src/scripts/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('./dist/scripts'));
});


gulp.task('server', function() {
    server.run(['start.js']);

    gulp.watch(['src/**/*.html'], [server.run]);
    gulp.watch(['src/**/*.jsx'], [server.run]);
});














// gulp.task('start', function() {
//    console.log('Hi, Express server listening on port 3333');
//    return run('node start.js').exec();
// });
