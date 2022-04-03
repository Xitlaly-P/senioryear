var image_tracker = 'one';
 
 function change(){
    var image = document.getElementById('circle');
    if(image_tracker=='one'){
        image.src='month/sep/oth2.jpg';
        image_tracker='two';
    }
    else if(image_tracker=='two'){
        image.src='month/sep/oth3.jpg';
        image_tracker='three';
    } else{
        image.src='month/sep/oth1.jpg';
        image_tracker='one';
    }
 }