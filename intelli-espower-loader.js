"use strict";
var assert = require("assert");
var fs = require("fs");
var pather = require("path");
var packageName = require("./package.json").name;

function findPackageDir(paths) {
    if (!paths) {
        return null;
    }
    for (var i = 0; i < paths.length; ++i) {
        var dir = pather.dirname(paths[i]);
        var dirName = dir.split(pather.sep).pop();
        if (dirName !== packageName && fs.existsSync(pather.join(dir, 'package.json'))) {
            return dir;
        }
    }
}
function getPackageJSON() {
    var dir = findPackageDir(module.paths);
    assert(dir, "package.json is not found");
    return require(pather.resolve(dir, "package.json"));
}
var directories = getPackageJSON().directories;
assert.equal(typeof directories, "object", 'You should setting `directories : { test : "test/" }`');
assert.equal(typeof directories.test, "string", 'You should setting `directories : { test : "test/" }`');
var testDirectory = directories.test;
require('espower-loader')({
    cwd: process.cwd(),
    pattern: testDirectory + "**" + pather.sep + "*.js"
});
