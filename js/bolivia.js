
$(document).ready(function(){
	$("#main_menu nav ul.nav li:first").addClass("home")
	// $("#main_menu nav ul.nav li:first").append("<i class='icon-home'></i>");
   	
   	$(".idioma ul li:last-child").css("border-right","none")
	
	// Scroll to top
	$('#top').click(function(){ //Id del elemento cliqueable
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});

	

		
});