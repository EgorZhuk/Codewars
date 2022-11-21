// https://www.codewars.com/kata/59418db3f5c394eca80000ef

// 6 kyu
// Walk the Object Path

// DESCRIPTION:
// Implement the method find which takes in an two parameters object and path. The path will be a period-delimited string of properties that we will use to traverse through our object to find our target value.

// Check out this Codecast to get started! https://codecast.qualified.io/interaction/594197b92f524d001c1ab790

// Edge Cases And Further Consideration
// Be sure to handle passing array indices. For example, if we have an object: { people: ['John', 'Dave', 'Lisa'] } and the path is 'people.1', the target value is 'Dave' which is the string at position 1 inside of the people array.

// Also this method should handle invalid paths. If we have an object { user: { name: 'Dan' } } and the path is 'user.wallet.money', we should return undefined. Valid paths are exclusive to properties on the object which are not inherited, in other words it is specific to this object and does not need to look up the prototype chain.

function find(object, path) {
  path = path.split(/[.]/)
  for(i in path){
  if(object.hasOwnProperty(path[i]) === true){
    object = object[path[i]]
  }else{
    return undefined
  }
  }
  return object
}