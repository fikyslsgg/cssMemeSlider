const sliderLine = document.querySelector('.slider__line')
const controls = document.querySelectorAll('.controls__item')
const sliderItem = document.querySelector('.slider__item')
const textLine = document.querySelector('.text')
const textItem = document.querySelector('.text__item')
const slides = document.querySelectorAll('.slider__item')

let count = 0
const slideWidth = sliderItem.offsetWidth;
const textWidth = textItem.offsetWidth;

function rollSlide(){
  sliderLine.style.transform = `translateX(${-count * slideWidth}px)`
  textLine.style.transform = `translateX(${-count * textWidth}px)`
}

function next(){
  count++
  if(count >= slides.length) return count = 0
  rollSlide()
  thisSlide(count)
}

function prev(){
  count--
  if(count < 0) return count = slides.length
  rollSlide()
  thisSlide(count) 
}

function thisSlide(index){
  controls.forEach(item => item.classList.remove('active'))
  controls[index].classList.add('active')
}

controls.forEach((item, index) => {
  item.addEventListener('click', (event)=>{
    count = index
    thisSlide(count)
    rollSlide()
  })
})