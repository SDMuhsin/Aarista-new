var options = {};
  $(document).ready(function(){
    $('.sidenav').sidenav();
	$('.carousel').carousel();
	$('.modal').modal();
	 $('.parallax').parallax();
	setTimeout(function(){$('#loading_parent').remove();console.log("work already")},6000);

  });
$(".logo-btn").click(function(){
	$("#about_text").addClass("scale-out");
});
$("#about_text").click(function(){
	$("#about_text").removeClass("scale-out");
});
var videos = ["video1","video2","video3","video4","video5","video6"];
var current = 0;
$(".f-btn").click(function(){
	
	current = $(this).data("goto")[5] - 1;
	console.log(current)
	video_gallery();
});

function video_gallery(){
	
	for(let i in videos){
		if (i == current){
			
			$("#"+videos[i]).removeClass("vanish");
		}else{
			
			$("#"+videos[i]).addClass("vanish");
		}
	}
}

video_gallery();

var qlist = ["q1","q2","q3"];
var currentQuote = 0;
setInterval(function(){
	for(let i in qlist){
		
		if (i==currentQuote){
			console.log("spared",i);
			$("#"+qlist[i]).removeClass("vanish");
		}else{
			console.log("unspared");
			$("#"+qlist[i]).addClass("vanish");
		}

		
	}
			if (currentQuote==2){
			currentQuote = 0;
		}else{
			currentQuote+=1;
		}
	},4000);

