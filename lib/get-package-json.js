// LICENSE : MIT
"use strict";
var fs = require("fs");
var assert = require("assert");
var pather = require("path");
var packageName = require("../package.json").name;

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
/**
 * @param {string[]} paths the paths for look-up
 * @returns {*}
 */
function getPackageJSON(paths) {
    var dir = findPackageDir(paths);
    assert(dir, "package.json is not found");
    return require(pather.resolve(dir, "package.json"));
}
module.exports = getPackageJSON;