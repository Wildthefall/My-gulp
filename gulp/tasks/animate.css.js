'use strict';

module.exports = function() {
    $.gulp.task('animate.css', function() {
        return $.gulp.src($.path.animateCss)
            .pipe($.gp.concatCss('animate.min.css'))
            .pipe($.gp.csso())
            .pipe($.gulp.dest($.config.root + '/assets/css'))
    });
};