//Lesson 1 Objects

//Create a JS Object
var object = {
	name: 'Jopee',
	gf: 'Nicole',
	dog: 'Shiva',
	address: {
		street: 'Aguho'
	}
};

//Access Object Data
var myName = object.name;
console.log(myName);

//Change Object Data
console.log(object.address.street = "St. Bernadette")

//Log the document object - Access by going to debug mode->Inspect Element->type conole.log(document);

//Lesson 2 Dom Functions

//Create a paragraph tag
var paragraph = document.createElement(
'P');
//Add text to paragraph
paragraph.textContent = 'The DOM is the bomb!';
//Add text to body
document.body.appendChild(paragraph);

//Lesson 3 Event Listeners

//Create DIV Element
var div = document.createElement('DIV');
//Set Height of Element
div.style.height = '100vh';
//Append element to DOM
document.body.appendChild(div);
//Add event listener to element
div.addEventListener('mousemove',function (event){
	console.log(event);
	var x = event.clientX;
	var y = event.clientY;
	div.textContent = x + ',' + y;
	div.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
});

//Refactoring your code


