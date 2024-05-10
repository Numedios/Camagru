

const customButton = document.getElementById("custom-button");
const deleteButton = document.getElementById("delete-button");
const stockButton = document.getElementById("stock-button");


console.log(stockButton);
console.log(customButton);
console.log(deleteButton);

stockButton.addEventListener("click", function()  
{
    enableButton(stockPicture, 1500)
    console.log(canvas);
    video.style.display = 'block';
    stockPicture.appendChild(canvas);
    takePicture.style.display = "block";
});

deleteButton.addEventListener("click", function()  
{
    enableButton(activeWebcam, 1500)
    
});