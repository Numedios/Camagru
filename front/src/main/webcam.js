

var video = document.getElementById('sourcevid');
var button = document.getElementById('takepicture');
var stockpicture = document.getElementById('stockpicture');

function open_webcam() {
    navigator.mediaDevices.getUserMedia({audio: false, video: {width: 350, height: 350}})
        .then(function(mediaStream) {
            var video = document.getElementById('sourcevid');
            video.srcObject = mediaStream;

            var tracks = mediaStream.getTracks();
            console.log(tracks)
            video.onloadedmetadata  = function(e) {
                video.play();
            };
        })
        .catch(function(err) { 
            console.log(err.name + ": " + err.message); 
            ////document.getElementById("message").innerHTML="message: connection refusé" 
        });
}

function photo(){
    var vivi = document.getElementById('sourcevid');
    var canvas = document.createElement("canvas");
    canvas.classList.add("pictures");
    var ctx = canvas.getContext('2d');
    canvas.height=vivi.videoHeight
    canvas.width=vivi.videoWidth
    ctx.drawImage(vivi, 0,0, vivi.videoWidth, vivi.videoHeight);
    stockpicture.appendChild(canvas);
}

button.addEventListener("click", photo);
video.addEventListener("click", open_webcam);
