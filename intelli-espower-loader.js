"use strict";
var fs = require("fs");
var assert = require("assert");
var pather = require("path");
var normalizeDir = require("./lib/normalize-dir");
var getTestDir = require("./lib/get-test-dir");
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
var pkg = getPackageJSON();
var testDirectory = getTestDir(pkg);
require('espower-loader')({
    cwd: process.cwd(),
    pattern: normalizeDir(testDirectory) + "**" + pather.sep + "*.js"
});
