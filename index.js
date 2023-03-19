const loadingImage = document.querySelector('.loadingImage');
const loadingText = document.querySelector('.loadingText');

let load = 0;

let int = setInterval(blurringImage, 30);

function blurringImage(){
  load ++;

  if(load>99){
    clearInterval(int);
  }
  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  loadingImage.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;


//Mapping stack overflow function

  function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

}
