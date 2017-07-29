var len, rem, newArray;

function chunkArrayInGroups(arr, size) {
  len = arr.length;
  rem = len % size;
  newArray = [];
  /*if (rem === 0){
    split("");
  }
  else if(rem != 0){
    return false;
  }*/
  
  var x = arr.slice(0,size);
  newArray.push(x);
  
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
