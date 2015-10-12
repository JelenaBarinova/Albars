var gulp = require('gulp');
var plug = require('gulp-load-plugins')();
var browserify = require('browserify');
var reactify = require('reactify'); 
var source = require('vinyl-source-stream'); 

gulp.task('clean', function () {
    return gulp.src('./output', {read: false})
        .pipe(plug.clean());
});

/* ------------ CODE & TESTS ------------ */

gulp.task('browserify', function(){
  browserify(['./src/main.jsx'])
		.transform(reactify)
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./output/'));   
});
 
gulp.task('es2015', ['browserify'], function () {  
  return gulp.src('./output/*.js')
        .pipe(plug.babel())
        //.pipe(plug.uglify())
        .pipe(gulp.dest('output'))
        .pipe(plug.connect.reload());
});
/*
gulp.task('test', function () {
  return gulp.src('test', {read: false})
        .pipe(plug.shell(['mocha test/*test.js   --compilers js:babel/register']));
});
*/
/* ------------ IMAGES & STYLES ------------ */

gulp.task('copy-index', function() {
  return gulp.src(['./src/index.html'])
    .pipe(gulp.dest('./output'));
});

gulp.task('copy-favicon', function() {
  return gulp.src(['./src/favicon.ico'])
    .pipe(gulp.dest('./output/'));
});

gulp.task('copy-img', function() {
  return gulp.src(['./src/images/**/*'])
    .pipe(gulp.dest('./output/images/'));
});

gulp.task('copy-fonts', function() {
  return gulp.src(['./src/fonts/**'])
    .pipe(gulp.dest('./output/fonts/'));
});

gulp.task('copy-styles', function() {
  return gulp.src(['./src/css/**/*'])
    .pipe(gulp.dest('./output/css/'));
});

gulp.task('copy-jstheme', function() {
  return gulp.src(['./src/js/**/*'])
    .pipe(gulp.dest('./output/js/'));
});

gulp.task('copy-data', function() {
  return gulp.src(['./data/*'])
    .pipe(gulp.dest('./output/data/'));
});

gulp.task('copy-files', ['copy-favicon', 'copy-data','copy-jstheme','copy-index', 'copy-img', 'copy-fonts', 'copy-styles'], function() {});

/* ------------ DEV ENV ------------ */

gulp.task('connect', function() {
	plug.connect.server({
		root: ['output'],
		port: 8008,
		base: 'http://localhost',
		livereload: true
	});
});

gulp.task('open', ['connect'], function(){
  return gulp.src('./output/index.html')
        .pipe(plug.open('', {url: 'http://localhost:8008/'}));
}); 

gulp.task('watch', function() {
    gulp.watch('./src/**/*', ['es2015']);
});

/* ------------ TASKS ------------ */

gulp.task('clean-build', function(cb){
  plug.runSequence('clean', ['copy-files'], 'build', cb);
});

gulp.task('build', function (cb) {
  plug.runSequence('es2015', 'open', 'watch', cb);
});

/* ------------ PRODUCTION ------------ */

gulp.task('publish', ['clean-build'], function() {
  return gulp.src(['./output/**/*'])
    .pipe(plug.ghPages());
});

