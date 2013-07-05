"use strict";
/*global jqgram: false, clearImmediate: false, specify: false, window: false */

var assert = require("assert");
var jso = require("../index.js")('http://www.google.com');
// * location: a node.js url object 
jso.onlocation = function(location){
    //Handle location changes
};
// * href: a string
jso.onhash = function(hash){
    //Handle hash changes
};
// * href: a string
jso.onhref = function(href){
    //Handle href changes
};

specify("Facebook", function(done) {
    this.timeout(1000*60*5);

    jso.jso_configure({
        "facebook": {
            client_id: "xxxxxxxxxx",
            redirect_uri: "http://localhost/~andreas/jso/",
            authorization: "https://www.facebook.com/dialog/oauth",
            presenttoken: "qs"
        }
    });

    assert.strictEqual(true, true);
    done();
});

