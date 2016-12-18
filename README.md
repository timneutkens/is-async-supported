# is-async-supported

Check if --harmony-async-await is set

## Background

In Node.js v7.0.0 a new flag was added to enable native async/await. Currently there is no good way to check for async/await since it's a Javascript language feature which will cause the runtime to crash before execution if not supported. This package gives you the ability to load for example [async-to-gen](https://github.com/leebyron/async-to-gen) only when your Node.js environment doesn't support async/await.
 
