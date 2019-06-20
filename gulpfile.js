const gulp = require('gulp');
const runSequence = require('run-sequence');
const browserify = require('browserify');
const del = require('del');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const eventStream = require('event-stream');

gulp.task('clean', () => {
    return del(['dist/**/*']);
});

gulp.task('js', () => {
    let files = [
        './src/js/pages/main-a.js',
        './src/js/pages/main-b.js',
    ];
    let tasks = files.map(function (entry) {
        return browserify({entries: [entry], debug: true})
            .transform(babelify, {
                "presets": [
                    ["env", {
                        "targets": {
                            "browsers": ["last 2 versions", "ie 11"]
                        }
                    }]
                ]
            })
            .bundle()
            .pipe(source(entry))
            .pipe(gulp.dest('./dist'));
    });

    return eventStream.merge.apply(null, tasks);
});

gulp.task('watch', function () {
    gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('default', function (callback) {
    runSequence('clean', 'js', 'watch', callback);
});

