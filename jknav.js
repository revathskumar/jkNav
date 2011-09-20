jQuery(function($){
	
	current_focused = stream = $("#home_stream li");
	if(current_focused.length == 0){
		current_focused = stream = $("ul[id=group_mall_*] li")
		if(current_focused.length == 0){
			return
		}
	}
	$(document).keypress(function(event){
		if(event.which != 106 && event.which != 107){
			return
		}
		if(document.activeElement.tagName != "BODY"){
			return
		}
		while($("body").scrollTop() > current_focused.offset().top){
			current_focused = current_focused.next("li.uiStreamStory")	
		}
		if(event.which == 106){
			current_focused = current_focused.next("li.uiStreamStory")
		}
		if(event.which == 107){
			current_focused = current_focused.prev("li.uiStreamStory")
		}
		$("body").animate({
		    scrollTop: current_focused.offset().top
		}, 500);
	})
})