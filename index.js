var resolve = require('path').resolve
var bin = require('./package').bin

module.exports = map_obj(bin, resolve)

function map_obj(obj, fn){
  return Object.keys(obj).reduce(function(m, k){
    m[k] = fn(obj[k])
    return m
  }, {})
}
