"use strict";
var assert = require("assert");

var defaultTestDir = {
    test: "test/"
};

module.exports = function(pkg) {
    var directories = pkg.directories;
    if (!directories || !directories.test) {
        directories = defaultTestDir;
    }
    assert.equal(typeof directories, "object", 'You should setting `directories : { test : "test/" }`');
    assert.equal(typeof directories.test, "string", 'You should setting `directories : { test : "test/" }`');
    return directories.test;
};
