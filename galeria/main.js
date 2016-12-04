

var $images = document.querySelectorAll("div img");
var $zoom = document.querySelector("div#zoom");

function printImages (){
     console.log($images);
     console.log("happy");
     console.log(2+2);
}
printImages(); 



function hello () {
     console.log ("hello");
}
var names=["dom","morze","lawka"]
  console.log(names);


 $images.forEach(function printImage(image) {
     console.log (image);
     image.addEventListener("click", function clickHandler(e){
        
        var $image=document.createElement("img");

          $image.src=image.parentNode.href;
                   
             $zoom.innerHTML="";

            $zoom.appendChild($image);
    
         e.preventDefault();
         console.log("witamy",$image);
     })
 })


 