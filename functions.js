
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
	$(".centerBoxes #box1").mouseover( function () {
		$(".basecampH1").show();
		$(".basecampH3").show();
		$("#box1 .arrows").show();
		$("#defaultHero").hide();
	});
	
	$(".centerBoxes #box2").mouseover( function () {
		$(".highriseH1").show();
		$(".highriseH3").show();
		$("#box2 .arrows").show();
		$("#defaultHero").hide();
	});
	
	$(".centerBoxes #box3").mouseover( function () {
		$(".campfireH1").show();
		$(".campfireH3").show();
		$("#box3 .arrows").show();
		$("#defaultHero").hide();
	});
	
	$(".centerBoxes #box1").mouseout( function () {
		$(".basecampH1").hide();
		$(".basecampH3").hide();
		$(".arrows").hide();
		$("#defaultHero").show();
	});
	
	$(".centerBoxes #box2").mouseout( function () {
		$(".highriseH1").hide();
		$(".highriseH3").hide();
		$(".arrows").hide();
		$("#defaultHero").show();
		
	});
	
	$(".centerBoxes #box3").mouseout( function () {
		$(".campfireH1").hide();
		$(".campfireH3").hide();
		$(".arrows").hide();
		$("#defaultHero").show();
		
	});
});