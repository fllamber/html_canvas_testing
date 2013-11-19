//http://www.quirksmode.org/js/events_mouse.html
//*****************************************************
document.addEventListener('mousedown', function(event) {
	console.log("MOUSE DOWN")
	console.log(event);
});

document.addEventListener('mouseup', function(event) {
	console.log("MOUSE UP");
	console.log(event);
});

document.addEventListener('click', function(event) {
	console.log("MOUSE CLIKING");
	console.log(event);
}); 

document.addEventListener('dblclick', function(event) {
	console.log("MOUSE DOUBLE CLIKING");
	console.log(event);
});
//*****************************************************

//*****************************************************
document.addEventListener('onmouseover', function(event) {
	console.log("MOUSE OVER");
	console.log(event);
}); 
 
document.addEventListener('mouseout', function(event) {
	console.log("MOUSE OUT");
	console.log(event);
});
//*****************************************************

//*****************************************************
document.addEventListener('mousemove', function(event) {
	console.log("MOUSE MOVE");
	console.log(event);
});

 
document.addEventListener('onmousemove', function(event) {
	console.log("ON MOUSE MOVE");
	console.log(event);
});
//*****************************************************