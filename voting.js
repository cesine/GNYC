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
    $("#"+ imageName +" p").html("Score: " + imageScore[imageName]);
    $("#"+ imageName + " p").append(" %" + Math.floor(
      (imageScore[imageName] / imageTotals[imageName]) * 100) ) //floor
      //append
 }
 
 $("#A .thumbs-up").click(function(){thumbsUp("A")});
 $("#A .thumbs-down").click(function(){thumbsDown("A")});
 
 $("#B .thumbs-up").click(function(){thumbsUp("B")});
 $("#B .thumbs-down").click(function(){thumbsDown("B")});
 
 $("#C .thumbs-up").click(function(){thumbsUp("C")});
 $("#C .thumbs-down").click(function(){thumbsDown("C")});
 
 $("#D .thumbs-up").click(function(){thumbsUp("D")});
 $("#D .thumbs-down").click(function(){thumbsDown("D")});
 
 $("#E .thumbs-up").click(function(){thumbsUp("E")});
 $("#E .thumbs-down").click(function(){thumbsDown("E")});
 
 $("#F .thumbs-up").click(function(){thumbsUp("F")});
 $("#F .thumbs-down").click(function(){thumbsDown("F")});
 
 

})