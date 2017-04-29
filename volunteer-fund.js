$("#volunteer").submit(function(e) {
    e.preventDefault();
    
    // get all the inputs into an array.
    var $inputs  = $('#volunteer :input');

    // not sure if you wanted this, but I thought I'd add it.
    // get an associative array of just the values.
    var values = {};
    $inputs.each(function()  {
        values[this.name] = $(this).val();
        
    });
    
    console.log ("here are the values",values);
    alert ("Thank you " + values.name + " for signing up to GNYC !");    


});


$("#fund").submit(function(e) {
    e.preventDefault();
    
    // get all the inputs into an array.
    var $inputs = $('#fund :input');

    // not sure if you wanted this, but I thought I'd add it.
    // get an associative array of just the values.
    var values = {};
    $inputs.each(function()  {
        values[this.name] = $(this).val();
    });
    
    console.log ("here are the values",values);
    alert (" Thank You for your donation of " + values.amount + "!");    

});