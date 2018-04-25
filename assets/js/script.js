//6 
$(document).ready(function() {
	$(".picture").click(function() {
		$("#overlay").show()
		$(this).addClass("pic-click");
	})

	$("#overlay").click(function() {
		$(".picture").removeClass("pic-click");
		$(this).hide();
	})

	var elems = $(".picture");
	var i = 1;
	fade(elems[0])

	function fade(elem) {
    if (i > elems.length - 1) {
    i = 0;
 	}
 	$(elem).fadeIn(300).delay(800).fadeOut(300, function() {
     fade(elems[i++])
 	 });
 }
});
