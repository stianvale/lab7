'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$(".likeCtr").click(sendAnalytics);
	$(".likeBtn").click(sendAnalytics);
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
}

function sendAnalytics(){
	ga("send", "event", 'like', 'click');
}


