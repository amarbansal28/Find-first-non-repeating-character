function findFirstNonRepeatingCharater(arr){
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    if(arr[i] in obj){
      obj[arr[i]] += 1;
    }else{
      obj[arr[i]] = 1;
    }
  }
  let index = [];
  for(let key in obj){
    if(obj[key] !== 1){
      delete obj[key];
    } else {
      index.push(arr.indexOf(key));
    }
  }
  if(Object.keys(obj).length === 0){
    return -1;
  }
  index = index.sort(function(a,b){return a-b});
  return arr[index[0]];
}
console.log(findFirstNonRepeatingCharater(["w", "a", "e", "f", "a", "f", "b", "w", "c"]));
