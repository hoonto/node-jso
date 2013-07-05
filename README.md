# node-jso  [![Build Status](https://travis-ci.org/hoonto/node-jso?branch=master)](https://travis-ci.org/hoonto/node-jso)

> node-jso wraps up the [JSO OAuth Library](https://github.com/andreassolberg/jso) and provides it to Node.js.

Currently this is not tested and provided as an example for this [StackOverflowquestion](http://stackoverflow.com/questions/17360830/is-there-any-oauth2-module-for-node-js-that-offer-access-token-validation-withou)

Rgds....Hoonto/Matt

# Usage


``` js
npm install node-jso
```

``` js
var jso = require('node-jso');
jso.jso_configure({
    "facebook": {
        client_id: "xxxxxxxxxx",
        redirect_uri: "http://localhost/~andreas/jso/",
        authorization: "https://www.facebook.com/dialog/oauth",
        presenttoken: "qs"
    }
});
```


