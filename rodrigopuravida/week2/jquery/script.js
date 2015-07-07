$(document).ready(function() {

  	$('.submit').on('click', function() {
		var input = $('.input').val();
	$('.chores-list').append('<li>' + input + '      ' + '<button class="delete" type="button"><span class="glyphicon glyphicon-floppy-remove" aria-hidden="true"></span></button></li>' + '<br>');

	$('.delete').on('click', function() {
	 	//jquery function to remove - since li is closest it pretty much chops itseld up.  Thanks classmate PaulD for this. I 
	 	//This will change the color of list item A. The .closest() method begins its search with the element itself before progressing up the DOM tree, would be here for generations to come had I not see this
 	 $(this).closest('li').remove()
 	})
	
	//gives focus and resets
	getFocus();
	document.getElementById("chore").value="";
 	})


 	function getFocus() {
    document.getElementById("chore").focus();
	}

})

