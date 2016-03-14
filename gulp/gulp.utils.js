"use strict";

var gulp = require("gulp");
var args = require("yargs").argv;
var del = require("del");
var gulpUtil = require('gulp-util');
var GP = require("gulp-load-plugins")({lazy:true});
var configs = require("./gulp.config");

module.exports = {
    GP: GP,
    configs: configs,
    args: args,
	util: gulpUtil,
    log: _log,
    logV: _logV,
    copyFiles: _copyFiles,
    clean: _clean
};

    function _log(msg){
        if(typeof (msg) === "object"){
            for(var item in msg){
                if(msg.hasOwnProperty(item)) {
                    GP.util.log(GP.util.colors.blue(msg[item]));
                }
            }
        }
        else {
            GP.util.log(GP.util.colors.yellow(msg));
        }
    }

    function _logV(msg){
        if(args.verbose) {
            _log(msg);
        }
    }

    function _copyFiles(source, dest){
        _logV("Copying " + source  + " to " + dest);
        return gulp
            .src(source)
            .pipe(gulp.dest(dest));
    }

    function _clean(dest){
        del(dest, function(err, deletedFiles){
            if(err){
                _log("Error cleaning : in _clean call");
                _log(err);
            }
            else {
                _logV(deletedFiles.length +  " Files deleted:");
                _logV(deletedFiles.join(", "));
            }
        });
    }

