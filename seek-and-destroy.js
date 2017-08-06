var newArray = [];

function destroyer(arr) {
	var x = 
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);//[1, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);//[1, 5, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5);//[1]
destroyer([2, 3, 2, 3], 2, 3);//[]
destroyer(["tree", "hamburger", 53], "tree", 53);//["hamburger"]
