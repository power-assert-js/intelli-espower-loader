// LICENSE : MIT
"use strict";
var assert = require("assert");
var getTestDir = require("../lib/get-test-dir");
describe("get-test-dir-test", function () {
    context("when `pkg.directories.test` is not found", function () {
        it("should return 'test/'", function () {
            var dir = getTestDir({
                "directories": {}
            });
            assert.equal(dir, "test/");
        });
    });
    context("when `pkg.directories.test` is set", function () {
        it("should return 'user-dir/'", function () {
            var dir = getTestDir({
                "directories": {
                    "test": "user-dir"
                }
            });
            assert.equal(dir, "user-dir/");
        });
    });
});