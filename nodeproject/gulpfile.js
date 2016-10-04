var gulp = require("gulp");
var jshint = require("gulp-jshint");
var nodemon = require("gulp-nodemon");

var paths = {
    jsFiles: ['*.js', 'src/**/*.js']
    
}

gulp.task("default", ["serve"]);

gulp.task('scripts', function() {
   return gulp.src(paths.jsFiles)
          .pipe(jshint());
    
});


gulp.task('serve', ['scripts'],function() {
    var options = {
        script: 'app.js',
        delayTime: 1,
        watch: paths.jsFiles
    };
    return nodemon(options)
        .on('restart', function(env){
            console.log("server has restarted");
        });
});

