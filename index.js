const vm = require('vm')

module.exports = function checkAsyncAwait () {
  try {
    eval('(async () => ({}))()')
    return true
  } catch (e) {
    return false
  }
}
