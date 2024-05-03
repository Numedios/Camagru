

var video = document.getElementById('sourcevid');
var takePicture = document.getElementById('takepicture');
var stockPicture = document.getElementById('stockpicture');
var activeWebcam = document.getElementById('activate-webcam');

function open_webcam() {
    navigator.mediaDevices.getUserMedia({audio: false, video: {width: 350, height: 350}})
        .then(function(mediaStream) {
            activeWebcam.textContent = 'Desactivate Webcam'
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
    stockPicture.appendChild(canvas);
}

// takePicture.addEventListener("click", photo);
activeWebcam.addEventListener("click", open_webcam);
