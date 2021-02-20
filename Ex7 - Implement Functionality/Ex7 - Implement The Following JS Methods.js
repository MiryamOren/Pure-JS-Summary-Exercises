Array.prototype.myFilter = function (callback) {
  let res = [];
  for(let i = 0; i <  this.length; i++) {
    if (callback(this[i])){
      res.push(this[i])
    }   
  }
  return res;
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.myFilter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


Array.prototype.myForEach = function (callback) {
  for (i = 0; i < this.length; i++){
    callback(this[i]);
  }
}

const array1 = ['a', 'b', 'c'];

array1.myForEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"


Array.prototype.myMap = function (callback) {
  res = [];
  for (i = 0; i < this.length; i++){
    res.push(callback(this[i]));
  }
  return res;
}

const array2 = [1, 4, 9, 16];

// pass a function to map
const map1 = array2.myMap(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]