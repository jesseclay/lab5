'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$('.name').click(nameToAnagram);
	$('#addFriendForm').submit(addFriend);
}

function addFriend(e) {
	e.preventDefault();
	$.ajax({
    url: this.action,
    method: this.method,
    data: $(this).serialize()
  }).done(function(msg) {
  	
  	var friend_template = $('.col-xs-4').last().clone();
  	var url = msg["imageURL"];
  	var name = msg['name'];
  	var description = msg['description'];

  	var img = $(friend_template).find("img");
  	img.attr('alt', name);
  	img.attr('src', url);

		$(friend_template).find(".name").text(name);
  	$(friend_template).find("p").text(description);

  	$(".friendList").append(friend_template);
  });
}


function nameToAnagram(e) {
		e.preventDefault();
		var name = $(this).text();
		var anagram = anagrammedName(name);
		$(this).text(anagram);
}

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}