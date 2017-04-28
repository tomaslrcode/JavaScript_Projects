//alert("Connected");


// make it gray and line through it clicked
// -> otherwise just black by turning .completed class off

// Check Off Specific Todos By Clicking
// second argument specifies (li) specifies lis that may or not have been on page when ->
// -> when it loaded inside the ul that definetly was on the page when page loaded.
// addding event listeners to the elements that exist when the page loads so that we can ->
// -> account for elements that were not there
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");	
});


// remove to-do if X is clicked

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove(); // refers to li not span
	});
	event.stopPropagation(); // stop event bubbling

});

// * Event Bubbling

$("input[type= 'text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new to-do text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"); // takes code as parameters
		// append take a string of html and it will then append those element to item selected
	}
});

$(".fa-plus").click(function(){
	$("input[type= 'text']").fadeToggle();
});