const {
  src,
  dest,
  parallel
} = require('gulp');

const fileinclude = require('gulp-file-include');

const csso = require('gulp-csso');

const concat = require('gulp-concat');

const uglify = require('gulp-uglify');

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
  path.src + '/css/state.css',
  path.src + '/css/fonts.css',
  path.src + '/css/spacing.css',
  path.src + '/css/utilities.css',
  path.src + '/css/base.css',
  path.src + '/css/card.css',
  path.src + '/css/animation.css',
  path.src + '/css/background.css',
  path.src + '/css/button.css',
  path.src + '/css/edge.css',
  path.src + '/css/form.css',
  path.src + '/css/group.css',
  path.src + '/css/header.css',
  path.src + '/css/icons.css',
  path.src + '/css/layout.css',
  path.src + '/css/menu.css',
  path.src + '/css/modal.css',
  path.src + '/css/search.css',
  path.src + '/css/shade.css',
  path.src + '/css/theme.css',
  path.src + '/css/typography.css'
]

const jsFiles = [
  path.src + '/js/helper.js',
  path.src + '/js/data.js',
  path.src + '/js/state.js',
  path.src + '/js/generator.js',
  path.src + '/js/events.js',
  path.src + '/js/sequence.js',
  path.src + '/js/operator.js',
  path.src + '/js/cost.js',
  path.src + '/js/tick.js',
  path.src + '/js/suffix.js',
  path.src + '/js/toast.js',
  path.src + '/js/processor.js',
  path.src + '/js/control.js',
  path.src + '/js/readout.js',
  path.src + '/js/theme.js',
  path.src + '/js/init.js'
]

const build = {
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
  // fonts: function() {
  //   return src(path.src + '/fonts/**/*.*')
  //     .pipe(dest(path.build + '/fonts'))
  // },
  // icons: function() {
  //   return src(path.src + '/icons/**/*.*')
  //     .pipe(dest(path.build + '/icons'))
  // },
  css: function() {
    return src(cssFiles)
      .pipe(concat(filename.css))
      .pipe(csso())
      .pipe(uglifycss({
        "uglyComments": true
      }))
      .pipe(dest(path.build + '/css'))
  },
  js: function() {
    return src(jsFiles)
      .pipe(uglify())
      .pipe(concat(filename.js))
      .pipe(dest(path.build + '/js', {
        sourcemaps: '.'
      }))
  }
}

const dev = {
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
  // fonts: function() {
  //   watch(path.src + '/fonts/**/*.*', {
  //     ignoreInitial: false
  //   }, function() {
  //     return src(path.src + '/fonts/**/*.*')
  //       .pipe(dest(path.dev + '/fonts'))
  //   })
  // },
  // icons: function() {
  //   watch(path.src + '/icons/**/*.*', {
  //     ignoreInitial: false
  //   }, function() {
  //     return src(path.src + '/icons/**/*.*')
  //       .pipe(dest(path.dev + '/icons'))
  //   })
  // },
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

exports.dev = parallel(dev.html, dev.css, dev.js)
exports.build = parallel(build.html, build.css, build.js)
