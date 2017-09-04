var newArray = [];

function destroyer(arr) {
	for (i=1; i <= 2; i++){
		var argSlicer = arr.slice.call(arguments[i]);
		console.log(argSlicer);
	}
	

	//var splicer = argSlicer.splice();
	//console.log(argSlicer);
	//console.log(arr.length);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);//[1, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);//[1, 5, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5);//[1]
destroyer([2, 3, 2, 3], 2, 3);//[]
destroyer(["tree", "hamburger", 53], "tree", 53);//["hamburger"]
