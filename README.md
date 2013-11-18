# ProtoDict

  A reliable dictionary with prototypal inheritance.
  Inspired by and using @domenic's brilliant [dict][http://npm.im/dict]

## API
### ProtoDict(proto)

  Takes an optional prototype that is expected to be a Dict or ProtoDict.
  Returns a fresh, delicious dictionary.

#### protoDict.get(key, defaultValue = undefined)

  Returns the given value for the key, from itself or the prototype.
  If the key is not found on itself or the prototype, the default value is returned.

#### protoDict.set(key, value)

  Set a key on the dictionary to the value.

#### protoDict.has(key)

  Returns true if either the dictionary itself or its prototype has the given key.

#### protoDict.delete(key)

  Delete the given key from the dict itself.

#### protoDict.clear()

  Empty the dict itself.

#### protoDict.forEach(callback, thisArg)

  Iterates through every key of the dictionary and its prototype.

