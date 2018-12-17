$(document).ready(function(){
	setInterval(function(){
		var time = new Date()
		var clockPut = document.getElementById('clocktime')
		clockPut.innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
	}, 1000)
})