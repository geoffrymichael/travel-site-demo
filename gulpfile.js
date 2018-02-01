var gulp = require("gulp");
var watch = require("gulp-watch");

gulp.task("default", function() {
   console.log("please work"); 
});

gulp.task("html", function() {
   console.log("do some html stuff"); 
});

gulp.task("styles", function() {
   console.log("imagine sass or post css stuff here"); 
});

gulp.task("watch", function() {
   
   watch("./app/index.html", function() {
       gulp.start("html");
   }); 
   
   watch("./app/assets/styles/**/*.css", function() {
       gulp.start("styles");
   })
   
});

