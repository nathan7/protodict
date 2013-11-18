'use strict';
module.exports = ProtoDict
var Dict = require('dict')


function methods(obj, methodHash) {
  for (var methodName in methodHash)
    Object.defineProperty(obj, methodName
    , { value: methodHash[methodName]
      , configurable: true
      , writable: true
      })
}

function ProtoDict(proto) {
  var dict = new Dict()

  if (typeof proto !== 'object')
    return dict

  var protoDict = {}
  methods(protoDict
  , { get: function(key, defaultValue) {
        return dict.has(key)
          ? dict.get(key)
          : proto.get(key, defaultValue)
      }
    , set: dict.set
    , has: function(key) {
        return dict.has(key) || proto.has(key)
      }
    , delete: dict.delete
    , clear: dict.clear
    , forEach: function forEach(callback, thisArg) {
        var done = new Dict()
        dict.forEach(function(value, key) {
          done.set(key)
          callback.call(thisArg, value, key, protoDict)
        })
        proto.forEach(function(value, key) {
          if (!done.has(key))
            callback.call(thisArg, value, key, protoDict)
        })
      }
    })
  Object.defineProperty(dict, 'size'
  , { get: function() { return dict.size }
    , configurable: true
    })

  return protoDict
}
