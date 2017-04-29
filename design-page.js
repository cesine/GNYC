$(document).ready(function(){
$("#landscape").hide();
$("#key").hide();
$("#symbols").hide();
 var grid ="http://www.vectorstash.com/vectors/vectorstash-grid.svg"
 var city="https://lauracavin.files.wordpress.com/2010/01/nyc-rooftops.jpg"
 function hideButtons(){
     $("#closedspace").hide();
     $("#openspace").hide();
     }
     function showsymbols(){
         $("#symbols").show();
         $("#key").show();
     }
     
$("#closedspace").click(function(){
hideButtons();
    $("#landscape").show(); 
    showsymbols();
   $(".background").attr("src",city);
})

$("#openspace").click(function(){
     $("#landscape").show();
     hideButtons();
     showsymbols();
    $(".background").attr("src", grid);
   
    })

})




function allowDrop(ev) {
    ev.preventDefault(); 
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var id = ev.dataTransfer.getData("text");
    
    var shape=$("#"+id).clone();
   shape.addClass("reflection");
    $("#landscape").append(shape);
    shape.css({
        "left": ev.offsetX, "top" :ev.offsetY });
    console.log(id)
    console.log(ev)
    ev.offsetX
    ev.offsetY
}