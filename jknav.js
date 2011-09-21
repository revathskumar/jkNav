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
		body = $("body")
		while(body.scrollTop() > current_focused.offset().top){
			previous_element = current_focused
			current_focused = current_focused.next("li.uiStreamStory")
			if(current_focused.length == 0){
				current_focused = previous_element.next("li")
			}	
		}
		if(event.which == 106){
			previous_element = current_focused
			current_focused = current_focused.next("li.uiStreamStory")
			if(current_focused.length == 0){
				current_focused = previous_element.next("li")
			}
		}
		if(event.which == 107){
			previous_element = current_focused
			current_focused = current_focused.prev("li.uiStreamStory")
			if(current_focused.length == 0){
				current_focused = previous_element.prev("li")
			}
		}
		adjust_top = 0;
		if($("#blueBar").offset().top != 0){
			adjust_top = $("#blueBar").height()
		}
		body.animate({
		    scrollTop: current_focused.offset().top - adjust_top
		}, 500);
	})
})