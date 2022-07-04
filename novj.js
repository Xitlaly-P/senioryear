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

$(document).ready(function () {
	all_notes = $("li a");
  
	all_notes.on("keyup", function () {
	  note_title = $(this).find("h2").text();
	  note_content = $(this).find("p").text();
  
	  item_key = "list_" + $(this).parent().index();
  
	  data = {
		title: note_title,
		content: note_content
	  };
  
	  window.localStorage.setItem(item_key, JSON.stringify(data));
	});
  
	all_notes.each(function (index) {
	  data = JSON.parse(window.localStorage.getItem("list_" + index));
  
	  if (data !== null) {
		note_title = data.title;
		note_content = data.content;
  
		$(this).find("h2").text(note_title);
		$(this).find("p").text(note_content);
	  }
	});
  });

var image_tracker = 'one';
 
 function change(){
    var image = document.getElementById('circle');
    if(image_tracker=='one'){
        image.src='month/nov/rochnov2.jpg';
        image_tracker='two';
    }
    else if(image_tracker=='two'){
        image.src='month/nov/rochnov3.jpg';
        image_tracker='three';
	}
	else if(image_tracker=='three'){
        image.src='month/nov/rochnov4.jpg';
        image_tracker='four';
    }
	else if(image_tracker=='four'){
        image.src='month/nov/rochnov5.jpg';
        image_tracker='five';
    }
	else if(image_tracker=='five'){
        image.src='month/nov/rochnov.jpg';
        image_tracker='si';
    }
	else{
        image.src='month/nov/rochnov1.jpg';
        image_tracker='one';
    }
 }