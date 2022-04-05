var photoStrip = document.getElementsByClassName('c-photoStrip__wrap');
var mouseDown = false;

photoStrip[0].addEventListener("mousedown", scrollStart);
photoStrip[0].addEventListener("mouseup", scrollEnd);

function scrollStart(event){
	mouseDown = true;
	var x = event.clientX;
   var y = event.clientY;
	// console.log('x', x, 'y', y);
	console.log('mouse down', x);
}

function scrollEnd(event){
	var x = event.clientX;
   var y = event.clientY;
	mouseDown = false;
	console.log('mouse end', x);
}