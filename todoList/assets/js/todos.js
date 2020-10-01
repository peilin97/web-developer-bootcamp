// Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
	// uncheck the todo
	// if (this.css("color") === "rgb(128, 128, 128") {
	// 	$(this).css({
	// 		"color": "black",
	// 		"text-decoration": "none"
	// 	});
	// } else { // check the todo
	// 	$(this).css({
	// 		"color": "gray",
	// 		"text-decoration": "line-through"
	// 	});
	// }
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});  // $(this).parent() is the li item
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {  // enter key
		// grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});