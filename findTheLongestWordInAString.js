var array, check, largest, loc, indNum, ind, newArray;

function findLongestWord(str) {
	array = str.split(/\s/g);
  	check = array.map(function(x){
	  var y = x.length;
	  return y;
  	});

	//largest = Math.max(...check);
	indNum = check.indexOf(largest);
	ind = array[indNum];
	console.log('array is ' + array);
	console.log('check is ' + check);
  	console.log('largest is ' + largest);
  	console.log('indNum is ' + indNum);
  	console.log('ind is ' + ind);
}

	//findLongestWord("The quick brown fox jumped over the lazy dog")
	//findLongestWord("The quick brown fox jumped over the lazy dog")
	findLongestWord("May the force be with you")
	//findLongestWord("Google do a barrel roll")
	//findLongestWord("What is the average airspeed velocity of an unladen swallow")
	//findLongestWord("What if we try a super-long word such as otorhinolaryngology")