var lengthOfArray;
var rem;
var newArray = [];
var bigArray = [];
var slicer;
var pushBig;

function chunkArrayInGroups(arr, size) {
  lengthOfArray = arr.length;
  rem = lengthOfArray % size;

    if (rem === 0){
      //slicer = arr.slice(0,size)
      for (i = 0; i <= arr.length; i++){
        slicer = arr.slice(arr[i],size);
        
      }
    }
    console.log(slicer);
  
}

//Equal groupings:
  chunkArrayInGroups(["a", "b", "c", "d"], 2);//[["a", "b"], ["c", "d"]]
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);//[[0, 1, 2], [3, 4, 5]]
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);//[[0, 1], [2, 3], [4, 5]]

//Unequal groupings
  //chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);//[[0, 1, 2, 3], [4, 5]]
  //chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);//[[0, 1, 2], [3, 4, 5], [6]]
  //chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);//[[0, 1, 2, 3], [4, 5, 6, 7], [8]]
  //chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);//[[0, 1], [2, 3], [4, 5], [6, 7], [8]]