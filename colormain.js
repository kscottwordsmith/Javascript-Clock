$(document).ready(function(){
		setInterval(function(){
		var time = new Date()
		var clockPut = document.getElementById('currentcolor')
		clockPut.innerHTML = `#${time.getHours().toString(16)}${time.getMinutes().toString(16)}${time.getSeconds().toString(16)}`
		$('body').css('background', `#${time.getHours().toString(16)}${time.getMinutes().toString(16)}${time.getSeconds().toString(16)}`)
	}, 500)
})

//`#${colorThous.toString(16)}${colorHunds.toString(16)}${colorTens.toString(16)}`