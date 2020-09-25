/**
 * GetTypeFunction 定义一个判断数据类型的函数
 * IsType 确定数据是什么类型
 */
type IsType = (data: any) => boolean;

type GetTypeFunction = (type: string) => IsType;

let getTypeFunction: GetTypeFunction = function(type) {
  return (data) => Object.prototype.toString.call(data) === `[object ${type}]`;
};

let isArray: IsType = getTypeFunction('Array');

let isMap: IsType = getTypeFunction('Map');

let isSet: IsType = getTypeFunction('Set');

let isObject: IsType = getTypeFunction('Object');

let isNodeList: IsType = getTypeFunction('NodeList');

let isHTMLCollection: IsType = getTypeFunction('HTMLCollection');

/**
 * isEmpty 判断数据是不是为 空 | undefined | null
*/
type IsEmpty = (data: any) => boolean;

let isEmpty: IsEmpty;
isEmpty = function(data) {
  if (!data) return true;
  if (isArray(data) || isNodeList(data) || isHTMLCollection(data)) {
    return data.length > 0;
  } else if (isMap(data) || isSet(data)) {
    return data.size > 0;
  } else if (isObject(data)) {
    return Object.keys(data).length > 0;
  } else {
    return false;
  }
};

/**
 * getSingle 为单列模式
*/
type SingleResult = (...args: any[]) => boolean;
type GetSingle = (fn: Function) => SingleResult;

let getSingle: GetSingle = function(fn) {
  let result = false;
  return function(this: any) {
    // eslint-disable-next-line
    return result || (result = fn.apply(this, arguments));
  };
};

export {
  getTypeFunction,
  isObject,
  isArray,
  isSet,
  isMap,
  isNodeList,
  isHTMLCollection,
  isEmpty,
  getSingle
};