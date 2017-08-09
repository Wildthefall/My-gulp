'use strict';

module.exports = function() {
    $.gulp.task('svg.sprite', function() {
        return $.gulp.src('./source/icons/*.svg')
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.svgSprite({
                    mode: 'symbols',
                    preview: false,
                    selector: 'icon-%f',
                    svg: {
                        symbols: 'icons-sprite.svg'
                    }
                }
            ))
            .pipe($.gulp.dest($.config.root + '/assets/icons'));
    });
};