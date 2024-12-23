// JS
const Days=document.querySelector("#days");
const Hrs=document.querySelector("#hours");
const Minutes=document.querySelector("#minutes");
const Seconds=document.querySelector("#seconds");
//const Audio=document.querySelector("#audioPlay");

function timeCounter(){
	const currentYear=new Date().getFullYear();
	const newYear=new Date(`January 1 ${currentYear+1} 00:00:00`);
	const currentDate=new Date();
	const diff=newYear-currentDate;
	const dd=Math.floor(diff/1000/60/60/24);
	const hh=Math.floor((diff/1000/60/60)%24);
	const mm=Math.floor((diff/1000/60)%60);
	const ss=Math.floor((diff/1000)%60);
	console.log(dd+" "+hh+" "+mm+" "+ss);
	Days.innerHTML=dd<10?"0"+dd:dd;
	Hrs.innerHTML=hh<10?"0"+hh:hh;
	Minutes.innerHTML=mm<10?"0"+mm:mm;
	Seconds.innerHTML=ss<10?"0"+ss:ss;
	function timePlay(){
		if(dd==117 && hh==10 && mm==03 && ss==50){
			document.querySelector("#audioPlay").play();
		}
	}
	timePlay();
}

setInterval(timeCounter,1000);

/*
1000ms=1s;
60s=1min;
60 mins=1 hr;
24 hrs=1 day;
*/
