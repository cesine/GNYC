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
    console.log("is thumbs up running?");
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
    $("#"+ imageName +" p").html(imageScore[imageName]);
    $("#"+ imageName + " p").append(" %" + Math.floor((imageScore[imageName]/imageTotals[imageName])*100));
 }
 
 $("#A .thumbs-up").click(function(){thumbsUp("A")});
 $("#A .thumbs-down").click(function(){thumbsDown("A")});
 
 $("#A .thumbs-up").click(function(){thumbsUp("")});
 $("#A .thumbs-down").click(function(){thumbsDown("A")});
 


})