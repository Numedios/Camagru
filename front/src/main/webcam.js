

const video = document.getElementById('sourcevid');
const takePicture = document.getElementById('takepicture');
const stockPicture = document.getElementById('stockpicture');
const  activeWebcam = document.getElementById('activate-webcam');
const webcam = document.getElementsByClassName('webcam');
const filterSlide = document.getElementById('filter-slide');

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
        takePicture.style.display = "block";
        filterSlide.style.display = "flex";
        activate_webcam()
    }
    else
    {
        takePicture.style.display= "none";
        filterSlide.style.display = "none";
        close_webcam()
    }    
}

var test = document.getElementById('video-box');
var canvas;

var buttonsPictures = document.getElementById("picture-buttons");


activeWebcam.addEventListener("click", function()  
{
    enableButton(activeWebcam, 1500)
    start_webcam()
});


