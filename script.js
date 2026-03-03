

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 500, 0);
grd.addColorStop(0,"#dcedc8");
grd.addColorStop(1,"#fffde7");

ctx.fillStyle=grd;
ctx.fillRect(0,0,c.width,c.height);

ctx.font="30pt Times New Roman";
ctx.fillStyle="#388e3c";
ctx.fillText("ĐỘNG VẬT", 150, 60);
ctx.stroke();

function showContent(id){
	var frames = document.querySelectorAll('.Content iframe');
	frames.forEach(function(frame){
		frame.style.display='none';
	});
	document.getElementById(id).style.display='block';
}