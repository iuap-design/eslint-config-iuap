var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function() {
	return gulp.src('./test/*.js')
		.pipe(eslint())
		.pipe(eslint.format());
});