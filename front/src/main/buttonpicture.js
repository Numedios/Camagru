

const customButton = document.getElementById("custom-button");
const deleteButton = document.getElementById("delete-button");
const stockButton = document.getElementById("stock-button");
const filterButton = document.getElementById("add-filter");


var filterBool = false;

var filter = document.getElementById("filter");

function filterOn()
{
    filter.style.display = "block";
    filterButton.textContent = "Desactivate Filter"
    filterBool = true;
}

function filterOff()
{
    filter.style.display = "none";
    filterButton.textContent = "Activate Filter"
    filterBool = false;
}



function drawFilters(ctx) 
{
    var computedStyle;
    var elements = document.querySelectorAll('.test');
    elements.forEach(function(element) {
        computedStyle = window.getComputedStyle(element);
        var displayValue = computedStyle.getPropertyValue('display');
        
        if (displayValue === 'block') {
            var leftValue = computedStyle.getPropertyValue('left');
            var leftPixels = parseFloat(leftValue);
            var topValue = computedStyle.getPropertyValue('top');
            var topPixels = parseFloat(topValue);
            var height = element.clientHeight;
            var width = element.clientWidth;
            ctx.drawImage(element, leftPixels, topPixels, width, height);

        }
    });
}

var filterr = document.getElementById("filterr");

function photo(){
    enableButton(takePicture, 500)
    if (boolWebcam)
    {
    
        takePicture.style.display = "none";
    
        canvas = document.createElement("canvas");
        canvas.classList.add("pictures");
        var ctx = canvas.getContext('2d');
        canvas.height = video.videoHeight
        canvas.width = video.videoWidth
        ctx.drawImage(video, 0,0, canvas.width, canvas.height);
        drawFilters(ctx);
        buttonsPictures.style.display = "flex";
        video.style.display = 'none';
        test.appendChild(canvas);
        filterOn();
        filterButton.style.display = "none";
    }
}

takePicture.addEventListener("click", photo);

stockButton.addEventListener("click", function()  
{
    enableButton(stockButton, 500)
    // filter.style.display = "block";;
    video.style.display = 'block';
    stockPicture.appendChild(canvas);
    buttonsPictures.style.display = "none";
    takePicture.style.display = "block";
    filterOff();
    filterButton.style.display = "block";
});

deleteButton.addEventListener("click", function()  
{
    enableButton(deleteButton, 500);
    // filter.style.display = "block";
    takePicture.style.display = "block";
    canvas.remove();
    buttonsPictures.style.display = "none";
    video.style.display = 'block';
    filterOff();
    filterButton.style.display = "block";
});

filterButton.addEventListener("click", function() 
{
    enableButton(filterButton, 500);
    if (!filterBool)
        filterOn();
    else
        filterOff();
});


// Sélectionnez toutes les images avec la classe "filter" dans le div "filter-slide"
const filters = document.querySelectorAll('#filter-slide .filter');

// Ajoutez un gestionnaire d'événements click à chaque image
filters.forEach(filter => {
    filter.addEventListener('click', function() {
        // Affichez l'attribut "src" de l'image sur laquelle vous avez cliqué
        console.log('Vous avez cliqué sur l\'image avec la source :', this.src);
    });
});