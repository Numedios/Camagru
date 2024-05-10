

const customButton = document.getElementById("custom-button");
const deleteButton = document.getElementById("delete-button");
const stockButton = document.getElementById("stock-button");


console.log(stockButton);
console.log(customButton);
console.log(deleteButton);

stockButton.addEventListener("click", function()  
{
    enableButton(stockButton, 1500)
    console.log(canvas);
    video.style.display = 'block';
    stockPicture.appendChild(canvas);
    buttonsPictures.style.display = "none";
    takePicture.style.display = "block";
});

deleteButton.addEventListener("click", function()  
{
    enableButton(deleteButton, 1500);
    takePicture.style.display = "block";
    canvas.remove();
    buttonsPictures.style.display = "none";
    video.style.display = 'block';
});