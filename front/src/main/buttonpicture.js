

const customButton = document.getElementById("custom-button");
const deleteButton = document.getElementById("delete-button");
const stockButton = document.getElementById("stock-button");
const filterButton = document.getElementById("add-filter");


var filterBool = false;

console.log(stockButton);
console.log(customButton);
console.log(deleteButton);

var filter = document.getElementById("filter");

function photo(){
    enableButton(takePicture, 500)
    if (boolWebcam)
    {
    filterButton.style.display = "none";
    takePicture.style.display = "none";
    filter.style.display = "none";
  
    canvas = document.createElement("canvas");
    canvas.classList.add("pictures");
    var ctx = canvas.getContext('2d');
    canvas.height = video.videoHeight
    canvas.width = video.videoWidth
    ctx.drawImage(video, 0,0, canvas.width, canvas.height);
    // ctx.drawImage(filter, 0,0, canvas.width, canvas.height);
    if (filterBool)
        ctx.drawImage(filter, canvas.width * 0.05, canvas.height * 0.35, canvas.width * 0.9, canvas.height * 0.65);
    buttonsPictures.style.display = "flex";
    video.style.display = 'none';
    test.appendChild(canvas);
    filterBool = false;
    filterButton.textContent = "Activate Filter"
    }
}

takePicture.addEventListener("click", photo);

stockButton.addEventListener("click", function()  
{
    enableButton(stockButton, 500)
    // filter.style.display = "block";
    console.log(canvas);
    video.style.display = 'block';
    stockPicture.appendChild(canvas);
    buttonsPictures.style.display = "none";
    takePicture.style.display = "block";
});

deleteButton.addEventListener("click", function()  
{
    enableButton(deleteButton, 500);
    // filter.style.display = "block";
    takePicture.style.display = "block";
    canvas.remove();
    buttonsPictures.style.display = "none";
    video.style.display = 'block';
});

filterButton.addEventListener("click", function() 
{
    enableButton(filterButton, 500);
    if (!filterBool)
    {
        filter.style.display = "block";
        filterButton.textContent = "Desactivate Filter"
        filterBool = true;

    }
    else
    {
        filter.style.display = "none";
        filterButton.textContent = "Activate Filter"
        filterBool = false;
    }
});