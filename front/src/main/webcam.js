

const video = document.getElementById('sourcevid');
const takePicture = document.getElementById('takepicture');
const stockPicture = document.getElementById('stockpicture');
const  activeWebcam = document.getElementById('activate-webcam');
const webcam = document.getElementsByClassName('webcam');

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


function activate_webcam()
{
    navigator.mediaDevices.getUserMedia({audio: false, video: {width: 350, height: 350}})
        .then(function(mediaStream) {
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
            //document.getElementById("message").innerHTML="message: connection refusé" 
        });    
}

function close_webcam()
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

function start_webcam() {
    if (!boolWebcam)
    {
        activate_webcam()
    }
    else
        close_webcam()
}

var test = document.getElementById('video-box');
var canvas;

function photo(){
    enableButton(takePicture, 500)
    if (boolWebcam)
    {
        takePicture.style.display = "none";
    canvas = document.createElement("canvas");
    canvas.classList.add("pictures");
    // canvas.id = "canvaShow";
    var ctx = canvas.getContext('2d');
    canvas.height=video.videoHeight
    canvas.width=video.videoWidth
    ctx.drawImage(video, 0,0, video.videoWidth, video.videoHeight);
    //close_webcam();
    //stockPicture.appendChild(canvas);
    //canvas.id = 'canvaShow';
    //close_webcam()
    video.style.display = 'none';
    //test.removeChild(video);
    test.appendChild(canvas);
   // test.replaceChild(canvas,video);
    }
}

takePicture.addEventListener("click", photo);
activeWebcam.addEventListener("click", function()  
{
    enableButton(activeWebcam, 1500)
    start_webcam()
});


