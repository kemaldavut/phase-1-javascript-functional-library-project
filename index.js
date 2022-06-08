function myEach(collection, callback){
  if (Array.isArray(collection))
  {
    for (let i = 0; i < collection.length; i++)
    {
      callback(collection[i], i, collection);
    }
  }
  else
  {
    for (let key in collection)
    {
      callback(collection[key], key, collection);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  let newArray = [];
  myEach(collection, function(element, index, collection){
    newArray.push(callback(element, index, collection));
  });
  return newArray;
}

function myReduce(collection, callback, initialValue) {
  let accumulator = initialValue;
  myEach(collection, function(element, index, collection){
    if (accumulator === undefined)
    {
      accumulator = element;
    }
    else
    {
      accumulator = callback(accumulator, element, index, collection);
    }
  });
  return accumulator;
}

function myFind (collection, callback) {
  let found = undefined;
  for (let i = 0; i < collection.length; i++)
  {
    if (callback(collection[i], i, collection))
    {
      found = collection[i];
      break;
    }
  }
    return found;
}

function myFilter(collection, predicate)
{
  let newArray = [];
  myEach(collection, function(element, index, collection){
    if (predicate(element, index, collection))
    {
      newArray.push(element);
    }
  });
  return newArray;
}
function mySize(collection)
{
  let size = 0;
  myEach(collection, function(element, index, collection){
    size++;
  });
  return size;
}

const myFirst =  function(array, n) {
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};

let myLast = function(array, n) {
    if (array == null) 
      return void 0;
    if (n == null) 
       return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));  
    };

    function myKeys(object) {
      let keys = [];
      for (let key in object)
      {
        keys.push(key);
      }
      return keys;
    }

    function myValues(object) {
      let values = [];
      for (let key in object)
      {
        values.push(object[key]);
      }
      return values;
    }
