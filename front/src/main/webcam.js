

const video = document.getElementById('sourcevid');
const takePicture = document.getElementById('takepicture');
const stockPicture = document.getElementById('stockpicture');
const  activeWebcam = document.getElementById('activate-webcam');

var boolWebcam = false;
var tracks = null;


/**
 * Temporarily disables a button for a duration
 *  @param {HTMLButtonElement} button - the button element to be disabled
 *  @param {number} duration - duration in miliseconds
*/

function enableButton(button, duration)
{
    button.disabled = true;
    setTimeout(function() {
        button.disabled = false;
    }, duration);
}

function start_webcam() {
    enableButton(activeWebcam, 1500)
    if (!boolWebcam)
    {
        navigator.mediaDevices.getUserMedia({audio: false, video: {width: 350, height: 350}})
            .then(function(mediaStream) {
                var video = document.getElementById('sourcevid');
                video.srcObject = mediaStream;

                tracks = mediaStream.getTracks();
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
        if (tracks)
        {
        tracks.forEach(function(track){
            track.stop();
        });
        }
        tracks = null;
        boolWebcam = false;
        activeWebcam.textContent = 'Activate Webcam';
        console.log("cam desactivate");
    }
}

function photo(){
    enableButton(takePicture, 500)
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
activeWebcam.addEventListener("click", start_webcam);
