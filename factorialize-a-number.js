/*Previous Solution

var arr = [""];
var pushy = "";

function factorialize(num){
	arr = [];//array to put factorials in

	for (i = 1; i <= num; i++){
		pushy = arr.push(i);
		return arr;
	}

	for (i = 0; i <= arr.length; i++){

	}


	//console.log(pushy);
}*/

//Solution after studying recursions (Codecademy, eloquent JS):

/*function factorialize(num){
	//Base case - case to stop the recursion once it hits rock bottom
	if (num === 0){
		console.log(1);//since we do not want to include 0 in our recursion (everything will equal to 0 if we did)
		return 1;
	}
	console.log(num * factorialize(num - 1));
	return num * factorialize(num-1);
}

factorialize(5);//120
factorialize(10);//3628800
factorialize(20);//2432902008176640000
factorialize(0);//1
*/

