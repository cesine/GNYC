$(document).ready(function(){
$("#landscape").hide();
$("#symbols").hide();
 var grid ="http://www.vectorstash.com/vectors/vectorstash-grid.svg"
 var city="https://lauracavin.files.wordpress.com/2010/01/nyc-rooftops.jpg"
 function hideButtons(){
     $("#closedspace").hide();
     $("#openspace").hide();
     }
     function showsymbols(){
         $("#symbols").show();
     }
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
