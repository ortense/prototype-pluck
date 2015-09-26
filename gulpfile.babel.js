import gulp       from 'gulp';
import babel      from 'gulp-babel';
import uglify     from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';

let src = 'src/pluck.js';

gulp.task('uncompressed', () => {
    return gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
});

gulp.task('min', () => {
    return gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./min'));
});

gulp.task('default', ['uncompressed', 'min']);
