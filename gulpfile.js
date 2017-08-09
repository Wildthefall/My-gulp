'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    template: require('./gulp/paths/template.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    animateCss: require('./gulp/paths/animate.css.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  svgSprite: require('gulp-svg-sprites'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'js.foundation',
    'js.process',
    'copy.fonts',
    'copy.image',
    'css.foundation',
    'animate.css',
    'svg.sprite'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
