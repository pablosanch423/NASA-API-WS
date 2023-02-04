

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');

function pixs() {
    var pics = 'https://api.nasa.gov/planetary/apod?api_key=7zTrUaejQ50TcSUOvK0PpUtat3y6a9BZW6crDuqL&count=16';
    fetch(pics).then((response) => response.json()).then(data => {
        one.style.backgroundImage = "url('" + data[0].url + "')";
        two.style.backgroundImage = "url('" + data[1].url + "')";
        three.style.backgroundImage = "url('" + data[2].url + "')";
        four.style.backgroundImage = "url('" + data[3].url + "')";
        five.style.backgroundImage = "url('" + data[4].url + "')";
        six.style.backgroundImage = "url('" + data[5].url + "')";
        seven.style.backgroundImage = "url('" + data[6].url + "')";
        eight.style.backgroundImage = "url('" + data[7].url + "')";
        nine.style.backgroundImage = "url('" + data[8].url + "')";
        console.log(data)
    })
}



pixs()