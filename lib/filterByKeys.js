module.exports = (object, filtered) =>
  Object.keys(object)
    .filter(key => !filtered.includes(key))
    .reduce((obj, key) => {
      obj[key] = object[key]
      return obj
    }, {})
