

const preBtn = document.querySelector('.slider-pre-btn')
const nextBtn = document.querySelector('.slider-next-btn')

const myslides = document.querySelectorAll('.slider__background-item');

let slidesIndex = 1;
slidesShow(slidesIndex)

let time = setInterval(slideAuto,5000);

preBtn.onclick = function(){
    plusSlides(-1)
}
nextBtn.onclick = function(){
    plusSlides(1)
}
function plusSlides(n){
    slidesIndex += n;
    slidesShow(slidesIndex)
    resetTime()
}
function slideAuto(){
    slidesIndex++;
    slidesShow(slidesIndex)
    resetTime()
}
function resetTime(){
    clearInterval(time);
    time = setInterval(slideAuto,5000);
}
function slidesShow(n){
    let i = 0;
    for(;i< myslides.length;i++){
        myslides[i].style.display = 'none';
    }
    if(n > myslides.length){
        slidesIndex = 1;
    }
    if(n < 1){
        slidesIndex = myslides.length;
    }
    myslides[slidesIndex - 1].style.display = 'block';
}