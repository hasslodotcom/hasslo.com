//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

$(function() {
	
	// Auto-selection when clicked
	$(".search").click(function() {
  		$(this).select();
		$(".search").css('color', 'black');
	});
	
	// Text turns gray again when not typing
	$(".search").blur(function() {
		$(".search").css('color', '#7A7A7A');
	});
	
	// Expand search bar
	$(".search").focus(function() {
		$(this).animate({ width: "300px" }, 250);
	});
	
	$(".search").blur(function() {
		$(this).animate({ width: "150px" }, 200);
	});
	
	// Search... dissapears when field is clicked
	$('.search').focus(function() {
	  if ($(this).val() === 'Search...') {
	    return $(this).val('');
	  }
	});
	
	// Search... reappears when field is not in focus anymore
    $('.search').blur(function() {
      if ($(this).val() === '') {
        return $(this).val('Search...');
      }
	});
