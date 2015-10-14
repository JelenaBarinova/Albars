var gulp = require('gulp');
var plug = require('gulp-load-plugins')();
var browserify = require('browserify');
var source = require('vinyl-source-stream'); 
var babelify = require('babelify');

var output_dir = '../gh-pages/';
var src_dir = './src/';

/* 
gulp.task('clean', function () {
    return gulp.src(output_dir, {read: false})
        .pipe(plug.clean());
});
*/

/* ------------ CODE & TESTS ------------ */
 
gulp.task('build', function() {
    return browserify({
        extensions: ['.js', '.jsx'],
        entries: src_dir + 'main.jsx',
    })
    .transform(babelify.configure({
        ignore: /(node_modules)/
    }))
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('main.js'))
    .pipe(gulp.dest(output_dir));
});

/*
gulp.task('test', function () {
  return gulp.src('test', {read: false})
        .pipe(plug.shell(['mocha test/*test.js   --compilers js:babel/register']));
});
*/
/* ------------ IMAGES & STYLES ------------ */

gulp.task('copy-index', function() {
  return gulp.src([src_dir + 'index.html'])
    .pipe(gulp.dest(output_dir));
});

gulp.task('copy-favicon', function() {
  return gulp.src([src_dir + 'favicon.ico'])
    .pipe(gulp.dest(output_dir));
});

gulp.task('copy-img', function() {
  return gulp.src([src_dir + 'images/**/*'])
    .pipe(gulp.dest(output_dir + 'images/'));
});

gulp.task('copy-fonts', function() {
  return gulp.src([src_dir + 'fonts/**'])
    .pipe(gulp.dest(output_dir + 'fonts/'));
});

gulp.task('copy-styles', function() {
  return gulp.src([src_dir + 'css/**/*'])
    .pipe(gulp.dest(output_dir + 'css/'));
});

gulp.task('copy-jstheme', function() {
  return gulp.src([src_dir + 'js/**/*'])
    .pipe(gulp.dest(output_dir + 'js/'));
});

gulp.task('copy-data', function() {
  return gulp.src(['./data/*'])
    .pipe(gulp.dest(output_dir + 'data/'));
});

gulp.task('copy-files', ['copy-favicon', 'copy-data','copy-jstheme','copy-index', 'copy-img', 'copy-fonts', 'copy-styles'], function() {});

/* ------------ DEV ENV ------------ */

gulp.task('run_server', plug.shell.task([
  'http-server ../gh-pages --cors -a localhost -p 8000'
  ]));
  
gulp.task('open', ['run_server'], function(){
  return gulp.src('')
        .pipe(plug.open('', {url: 'http://localhost:8000/'}));
});

/* ------------ TASKS ------------ */

gulp.task('clean-build', function(cb){
  plug.runSequence('copy-files', 'build', 'open', cb);
});
