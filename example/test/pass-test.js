// LICENSE : MIT
"use strict";
var assert = require("assert");
describe("PassTest", function () {
    it("is passed", function () {
        var object = {
            name: "Tom object"
        };
        assert.deepEqual(object, {
            name: "Tom object"
        });
    });
});
