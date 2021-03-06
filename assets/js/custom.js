/*========== REGISTER FORM ==========*/

//-- Hide and Show Register Login --//
$(document).ready(function() {

	//On click signup, hide login and show registration form
	$("#signup").click(function() {
		$(".login__wrapper").slideUp("slow", function(){
			$(".register__wrapper").slideDown("slow");
		});
	});

	//On click signin, hide registration and show login form
	$("#signin").click(function() {
		$(".register__wrapper").slideUp("slow", function(){
			$(".login__wrapper").slideDown("slow");
		});
	});


});

/*========== ADMIN NAVBAR TOGGLER ==========*/

$(function() {
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar, #admin_content').toggleClass('active');
  });
});
