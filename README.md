# is-async-supported

Check if async/await is available

## Installation

`npm install is-async-supported`

## Usage

```javascript
const isAsyncSupported = require('is-async-supported')

if(!isAsyncSupported()) {
  // Load runtime transform
}
```

## Background

This package gives you the ability to load for example [async-to-gen](https://github.com/leebyron/async-to-gen) only when your environment doesn't support async/await.

Suitable for use in the browser and Node.js.
