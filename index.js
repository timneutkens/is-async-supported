module.exports = function checkAsyncAwait () {
  return process.execArgv.indexOf('--harmony-async-await') !== -1
}

