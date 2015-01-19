"use strict";
var assert = require("assert");
var path = require("path");
var getTestDir = require("../lib/get-test-dir");
describe("get-test-dir", function () {
    context("When package.json have directories properties", function () {
        var packageJsonMock = {
          "name": "intelli-espower-loader",
          "directories": {
              "test": "custom_test_dir/"
          }
        };
        var expected = "custom_test_dir/";
        it("should return custom properties", function () {
            assert.equal(getTestDir(packageJsonMock), expected);
        });
    });
    context("When package.json does not have directories.test properties", function () {
        var packageJsonMock = {
          "name": "intelli-espower-loader",
          "directories": {
              "name": "custom_name/"
          }
        };
        var expected = "test/";
        it("should return directories properties", function () {
            assert.equal(getTestDir(packageJsonMock), expected);
        });
    });
    context("When package.json does not have directories properties", function () {
        var packageJsonMock = {
          "name": "intelli-espower-loader",
        };
        var expected = "test/";
        it("should return directories properties", function () {
            assert.equal(getTestDir(packageJsonMock), expected);
        });
    });
});

