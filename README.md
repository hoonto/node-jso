# node-jso  [![Build Status](https://travis-ci.org/hoonto/node-jso.png)](https://travis-ci.org/hoonto/node-jso)

> node-jso wraps up the [JSO OAuth Library](https://github.com/andreassolberg/jso) and provides it to Node.js.

Note: Currently this is not a tested wrapper (it may break) and provided is only provided as an example for this [StackOverflow question](http://stackoverflow.com/questions/17360830/is-there-any-oauth2-module-for-node-js-that-offer-access-token-validation-withou)

I'll be filling out the details later.

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


