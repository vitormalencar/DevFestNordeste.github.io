//  Import all Dependencies
import del from 'del';
import gulp from 'gulp';
import { paths } from '../paths';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';

// Constants
const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Styles task
gulp.task('styles', () => {
  return gulp.src([paths.source.sass, '!./app/css/rapid-icons.css'])
    .pipe($.plumber())
    .pipe($.autoprefixer({
      browsers: ['last 2 version']
    }))
    .pipe($.csso())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({
      stream: true
    }));
});
