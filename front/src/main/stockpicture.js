

var stockpicture = document.getElementById('stockpicture');
let currentIndex = 0;
let scrolling = false;

stockpicture.addEventListener('wheel', (event) =>{
    if (!scrolling){
        scrolling = true;

        setTimeout(() => {
            scrolling = false;
        }, 100);

        if (event.deltaY > 0) {
            console.log("wheel down")
            currentIndex++;
        } else {
            console.log("wheel up")
            currentIndex--;
        }
    }
})