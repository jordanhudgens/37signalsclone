function getDay() {
	var d=new Date();
	var weekday=new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";
	
	var n = weekday[d.getDay()];
	document.writeln("Happy " + n + ".");
}

$(document).ready ( function () {
	$("#box1").mouseover( function () {
		$("h1").addClass("hoverAction");
		$("h1").html("Basecamp is the project management software you wished you had on your last project.");
		$("h3").addClass("hoverActionH3");
		$("h3").html("Are you still managing projects with email? Are you still using Excel for your to-do lists? It's time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.");
	});
	
	$("#box2").mouseover( function () {
		$("h1").addClass("hoverAction");
		$("h1").html("Highrise remembers the normal things about people you'd normal forget.");
		$("h3").addClass("hoverActionH3");
		$("h3").html("Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20,000,000 contacts are tracked using Highrise.");
	});
	
	$("#box3").mouseover( function () {
		$("h1").addClass("hoverAction");
		$("h1").html("From near or far, Campfire helps teams work together over the web in real-time.");
		$("h3").addClass("hoverActionH3");
		$("h3").html("Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room. It's game changing. We couldn't run our own business without Campfire.");
	});
	
	
	$("#box1").mouseout( function () {
		$("h1").removeClass("hoverAction");
		$("h1").html("Making collaboration productive and <br>enjoyable for people every day.");
		$("h3").removeClass("hoverActionH3");
		$("h3").html("Frustration-free web-based apps for collaboration, sharing information, and making decisions.");
	});
	
	$("#box2").mouseout( function () {
		$("h1").removeClass("hoverAction");
		$("h1").html("Making collaboration productive and <br>enjoyable for people every day.");
		$("h3").removeClass("hoverActionH3");
		$("h3").html("Frustration-free web-based apps for collaboration, sharing information, and making decisions.");
	});
	
	$("#box3").mouseout( function () {
		$("h1").removeClass("hoverAction");
		$("h1").html("Making collaboration productive and <br>enjoyable for people every day.");
		$("h3").removeClass("hoverActionH3");
		$("h3").html("Frustration-free web-based apps for collaboration, sharing information, and making decisions.");
	});
});