$(document).ready(function(){
 
  var imageScore = {
    "A" : 0,
    "B" : 0,
    "C" : 0,
    "D" : 0,
    "E" : 0,
    "F" : 0
}

var imageTotals = {
    "A" : 0,
    "B" : 0,
    "C" : 0,
    "D" : 0,
    "E" : 0,
    "F" : 0,
}

function thumbsUp(imageName){
    imageScore[imageName] += 1;
    imageTotals[imageName] += 1;
    displayScore(imageName);
} 
 
 function thumbsDown(imageName){
     imageScore[imageName] -= 1;
     imageTotals[imageName] += 1;
     displayScore(imageName);
 }
 
 function displayScore(imageName) {
     console.log("is this running?");
   $("#"+"imageName"+" p").html(imageScore[imageName])
 }
 
 $("#A .thumbs-up").click(thumbsUp("A"));
 $("#A .thumbs-down").click(thumbsDown("A"));
 

function thumbsUp(imageName){
    imageScore[imageName] += 1;
    imageTotals[imageName] += 1;
} 

 
 function thumbsDown(imageName){
     imageScore[imageName] -= 1;
     imageTotals[imageName] += 1;
 }
 
 $('#thumbsUpA').click(thumbsUp("B"));
 $("#thumbsDownA").click(thumbsDown("B"));



  
  
  
  
  
  
    
})