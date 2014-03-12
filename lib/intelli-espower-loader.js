"use strict";
var assert = require("assert");
function getPackageJSON() {
    var pather = require("path");
    var packpath = require('packpath');
    return require(pather.join(packpath.self(), "package.json"));
}
var directories = getPackageJSON().directories;
assert.equal(typeof directories, "object", 'You should setting `directories : { test : "test/" }`');
assert.equal(typeof directories.test, "string", 'You should setting `directories : { test : "test/" }`');
var testDirectory = directories.test;
require('espower-loader')({
    cwd: process.cwd(),
    pattern: testDirectory + "**/*.js"
});
