/*jshint node:true */
module.exports = function (grunt) {
    "use strict";

    var params = {
        files: [
            'js/namespace.js',
            'js/utils/Deferred.js',
            'js/utils/Promise.js',
            'js/utils/PromiseCollection.js',
            'js/utils/QPromiseCollection.js',
            'js/utils/PromiseLoop.js',
            'js/utils/Location.js',
            'js/utils/Throttler.js',
            'js/service/serviceEventSpace.js',
            'js/service/Endpoint.js',
            'js/service/Request.js',
            'js/service/ServiceEvent.js',
            'js/service/Service.js',
            'js/image/imageEventSpace.js',
            'js/image/ImageUrl.js',
            'js/image/ImageEvent.js',
            'js/image/Image.js',
            'js/filesystem/fileSystemEventSpace.js',
            'js/filesystem/FilePath.js',
            'js/filesystem/FileEvent.js',
            'js/filesystem/File.js',
            'js/exports.js'
        ],

        test: [
            'js/utils/jsTestDriver.conf',
            'js/service/jsTestDriver.conf',
            'js/image/jsTestDriver.conf',
            'js/filesystem/jsTestDriver.conf'
        ],

        globals: {
            dessert: true,
            troop  : true,
            sntls  : true,
            evan   : true
        }
    };

    // invoking common grunt process
    require('common-gruntfile')(grunt, params);
};
