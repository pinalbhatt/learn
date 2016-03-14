"use strict";

var gulp = require("gulp");
var gUtils = require("./gulp/gulp.utils.js");

gulp.task("help", gUtils.GP.taskListing);
gulp.task("default", ["help"]);

