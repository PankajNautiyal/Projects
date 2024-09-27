
// show fixed images tab when hovered
var elemC = document.querySelector(".elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})

elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})


//display imaged in fixed images div
var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
e.addEventListener("mouseenter",function(){
    var image = e.getAttribute("data-image")
fixed.style.backgroundImage = `url(${image})`    
})    
})


//loader for initial screen
var loader = document.querySelector(".loader")
setTimeout(function(){
    loader.style.top = "-100%"
},4200)

//swiper functionality
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    initialSlide: 1,
  });