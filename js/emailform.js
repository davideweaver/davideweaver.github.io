/* global $ */

(function() { 
  $("#emailform").validate();
  $("#emailform").submit(function(event) {
    $("#forminvalid").hide();
    $("#formbadbot").hide();
	  
    if(!$("#name").val().length || !$("#email").val().length) {
      $("#forminvalid").show();
      event.preventDefault();
      return;
    }
	  
    if($("#robot").val() != "7") {
      $("#formbadbot").show();
      event.preventDefault();
      return;
    }        
    
    $("#submit").prop("disabled", true);
    $("#spinner").show();
  });
}());
