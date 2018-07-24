$( document ).ready(function() {
  // Selecting home on the page reloads the whole page
  

  // $(".home").click(function(event) { 
  //     location.href = "index.html"
  // }); 

  $('.home').click(function(event){
  	
    parent.history.back();
	return false;
    
  });


});