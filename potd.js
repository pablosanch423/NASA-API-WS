var imgbody = document.getElementById('potd');

function img() {
    var potd = 'https://api.nasa.gov/planetary/apod?api_key=7zTrUaejQ50TcSUOvK0PpUtat3y6a9BZW6crDuqL'
    fetch(potd).then((response) => response.json()).then(data => {
        imgbody.style.backgroundImage = "url('" + data.url + "')";
    })
}

img()