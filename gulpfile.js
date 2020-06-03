const {
  src,
  dest,
  parallel
} = require('gulp');

const fileinclude = require('gulp-file-include');

const csso = require('gulp-csso');

const concat = require('gulp-concat');

const uglifyjs = require('gulp-uglify-es').default;

const uglifycss = require('gulp-uglifycss');

const replace = require('gulp-replace');

const htmlmin = require('gulp-htmlmin');

const watch = require('gulp-watch');

const filter = require('gulp-filter');

const path = {
  src: 'src',
  dev: 'dev',
  build: 'build',
  nodeModules: 'node_modules',
}

const filename = {
  css: 'style.min.css',
  js: 'script.min.js'
}

const jsDependencies = []

const cssFiles = [
  path.src + '/css/reset.css',
  path.src + '/css/variables.css',
  path.src + '/css/theme.css',
  path.src + '/css/state.css',
  path.src + '/css/spacing.css',
  path.src + '/css/utilities.css',
  path.src + '/css/base.css',
  path.src + '/css/icons.css',
  path.src + '/css/card.css',
  path.src + '/css/animation.css',
  path.src + '/css/button.css',
  path.src + '/css/edge.css',
  path.src + '/css/form.css',
  path.src + '/css/group.css',
  path.src + '/css/layout.css',
  path.src + '/css/main.css',
  path.src + '/css/header.css',
  path.src + '/css/menu.css',
  path.src + '/css/modal.css',
  path.src + '/css/report.css',
  path.src + '/css/typography.css'
]

const jsFiles = [
  path.src + '/js/helper.js',
  path.src + '/js/version.js',
  path.src + '/js/data.js',
  path.src + '/js/string.js',
  path.src + '/js/update.js',
  path.src + '/js/state.js',
  path.src + '/js/system.js',
  path.src + '/js/generator.js',
  path.src + '/js/events.js',
  path.src + '/js/upgrade.js',
  path.src + '/js/cycle.js',
  path.src + '/js/consumer.js',
  path.src + '/js/strategy.js',
  path.src + '/js/sequence.js',
  path.src + '/js/cost.js',
  path.src + '/js/tick.js',
  path.src + '/js/suffix.js',
  path.src + '/js/toast.js',
  path.src + '/js/control.js',
  path.src + '/js/readout.js',
  path.src + '/js/report.js',
  path.src + '/js/motivation.js',
  path.src + '/js/theme.js',
  path.src + '/js/keyboard.js',
  path.src + '/js/menu.js',
  path.src + '/js/modal.js',
  path.src + '/js/boot.js',
  path.src + '/js/favicon.js',
  path.src + '/js/init.js'
]

const assetFiles = [
  path.src + '/assets/**.*'
]

const build = {
  assets: function() {
    return src(assetFiles)
      .pipe(dest(path.build + '/assets'))
  },
  html: function() {
    return src(path.src + '/index.html')
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(replace(/\<\!\-\-\ css\-block\ \-\-\>([\s\S]*)\<\!\-\-\ end\-css\-block\ \-\-\>/mg, '<link rel="stylesheet" href="css/' + filename.css + '">'))
      .pipe(replace(/\<\!\-\-\ js\-block\ \-\-\>([\s\S]*)\<\!\-\-\ end\-js\-block\ \-\-\>/mg, '<script src="js/' + filename.js + '"></script>'))
      .pipe(htmlmin({
        collapseWhitespace: true
      }))
      .pipe(dest(path.build))
  },
  css: function() {
    return src(cssFiles)
      .pipe(concat(filename.css))
      .pipe(csso({
        restructure: false
      }))
      .pipe(uglifycss({
        "uglyComments": true
      }))
      .pipe(dest(path.build + '/css'))
  },
  js: function() {
    return src(jsFiles)
      .pipe(uglifyjs())
      .pipe(concat(filename.js))
      .pipe(dest(path.build + '/js', {
        sourcemaps: '.'
      }))
  }
}

const dev = {
  assets: function() {
    watch(assetFiles, {
      ignoreInitial: false
    }, function() {
      return src(assetFiles)
        .pipe(dest(path.dev + '/assets'))
    })
  },
  html: function() {
    watch(path.src + '/**/*.html', {
      ignoreInitial: false
    }, function() {
      return src(path.src + '/index.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(dest(path.dev))
    })
  },
  css: function() {
    watch(cssFiles, {
      ignoreInitial: false
    }, function() {
      return src(cssFiles)
        .pipe(dest(path.dev + '/css'))
    })
  },
  js: function() {
    watch(jsFiles, {
      ignoreInitial: false
    }, function() {
      return src(jsFiles)
        .pipe(dest(path.dev + '/js'))
    })
  }
}

exports.dev = parallel(dev.assets, dev.html, dev.css, dev.js)
exports.build = parallel(build.assets, build.html, build.css, build.js)
