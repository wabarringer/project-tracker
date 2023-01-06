// testing if Day.js was linked properly
console.log(dayjs())

// The format I want is lll	(MMM D, YYYY h:mm A)
var dateAndTime = dayjs();
$('#welcomeEl').text('Welcome! It is ' + dateAndTime.format('MMM D, YYYY [at] h:mm A'));

