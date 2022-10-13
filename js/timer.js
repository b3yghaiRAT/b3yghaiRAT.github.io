let day = document.querySelector('.days')
let hour = document.querySelector('.hours')
let minute = document.querySelector('.minutes')
let second = document.querySelector('.seconds')
let mainBox = document.querySelector('.main_box')

setInterval(function(){

let UpcomingDate = new Date('09 october 2023 11:00:00 PM');
let NowDate = new Date();
let differanceTime  = Math.floor((UpcomingDate-NowDate)/1000)


let differanceDay = Math.floor(differanceTime/60/60/24)
let differanceHour = Math.floor((differanceTime/60/60)%24)
let differanceMinute = Math.floor((differanceTime/60)%60)
let differanceSecound = Math.floor(differanceTime%60)



if(differanceDay >= 0){
    mainBox.style.display = "block";
    day.innerHTML =  differanceDay;
    hour.innerHTML =  differanceHour;
    minute.innerHTML =differanceMinute;
    second.innerHTML = differanceSecound;   
}


},1000)

var labels = ['weeks', 'days', 'hours', 'minutes', 'seconds'],
	TimerCount = (new Date().getFullYear() + 1) + '/01/01',
	template = _.template( jQuery('#main-example-template').html()),
	currDate = '00:00:00:00:00',
	nextDate = '00:00:00:00:00',
	parser = /([0-9]{2})/gi,
	$example = jQuery('#main-example');

	if( $example.data("timer").length ){
		TimerCount = $example.data("timer");	
	} 