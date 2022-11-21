//changing the fpage images 
let firstPage = document.querySelector(".fpage");

let changImage = ["burger-and-vegetables-placed-on-brown-wood-surface-1565982.jpg","five-white-plates-with-different-kinds-of-dishes-54455.jpg"] ;

//firstPage.style.background-image= 'url ("five-white-plates-with-different-kinds-of-dishes-54455.jpg")';


setInterval(() => {
    let random = Math.floor(Math.random()* changImage.length )
    firstPage.body.style.backgroundImage= "url('burger-and-vegetables-placed-on-brown-wood-surface-1565982.jpg')";


    
}, 10000);
