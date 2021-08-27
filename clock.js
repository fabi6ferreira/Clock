function clock() {
    var time = new Date();

    hours = time.getHours();

    minutes = time.getMinutes();

    seconds = time.getSeconds();

    document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds) + " " + haroldPMAM(hours);

    function harold(standIn) {
        if (standIn < 10) {
            standIn = '0' + standIn
        }
        return standIn;
    }
	
	function haroldPMAM(standIn) {
        if (standIn >=0 && standIn <= 12) {
            standIn = 'AM'
        }else{
			standIn = 'PM'
		}
        return standIn;
    }
}
setInterval(clock, 1000);

