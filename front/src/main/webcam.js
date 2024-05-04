

const video = document.getElementById('sourcevid');
const takePicture = document.getElementById('takepicture');
const stockPicture = document.getElementById('stockpicture');
const  activeWebcam = document.getElementById('activate-webcam');

var boolWebcam = false;


function open_webcam() {
    if (!boolWebcam)
    {
        navigator.mediaDevices.getUserMedia({audio: false, video: {width: 350, height: 350}})
            .then(function(mediaStream) {
                var video = document.getElementById('sourcevid');
                video.srcObject = mediaStream;

                var tracks = mediaStream.getTracks();
                console.log(tracks)
                video.onloadedmetadata  = function(e) {
                    video.play();
                };
                boolWebcam = true;
                activeWebcam.textContent = 'Desactivate Webcam'

            })
            .catch(function(err) { 
                // chercher les type d'erreur possible
                console.log(err.name + ": " + err.message); 
                ////document.getElementById("message").innerHTML="message: connection refusé" 
            });
    }
    else
    {
        tracks.stop();
        console.log("cam desactivate");
    }
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

takePicture.addEventListener("click", photo);
activeWebcam.addEventListener("click", open_webcam);
