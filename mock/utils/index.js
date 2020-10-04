function isType(type) {
  return function(data) {
    return Object.prototype.toString.call(data) === `[object ${type}]`;
  }
}

const isArray = isType('Array');

const isObject = isType('Object');

const isMap = isType('Map');

const isSet = isType('Set');

const isFormata = isType('Formata');

function isEmpty(data) {
  if (!data) return true;
  if (isArray(data)) {
    return data.length === 0;
  } else if (isObject(data)) {
    return Object.keys(data).length === 0;
  } else if (isSet(data) || isMap(data)) {
    return data.size === 0;
  } else if (data instanceof NodeList) {
    return data.length === 0;
  }
  return false;
}

module.exports = {
  isType,
  isArray,
  isObject,
  isMap,
  isSet,
  isFormata,
  isEmpty,    
}