
const imageTrackContainer = document.querySelector(".images-container");
const imagesArray = Array.from(imageTrackContainer.querySelectorAll("img"));
const width = imagesArray[0].width;
const dotsContainer = document.querySelector(".dots-container");
let SliderStartingPoint = 0;

/* METHODS */



 /*  const moveSlidesAuto = () =>
  {
     if(SliderStartingPoint < imagesArray.length - 1)
     {
       moveSlide(SliderStartingPoint)
       SliderStartingPoint++;
     }
     else
     {
        SliderStartingPoint = 0;
     }

     setTimeout(moveSlidesAuto,3000);
  } */
   /* Position each image to the left in the slideshow inside the its dotsContainer
    does not get Parameters
    does not return values */
 const positionImages = () =>
{
    imagesArray.forEach((img,index)=>{
      img.style.left = width * index + "px";
  })
}

 /*  Get the target that user selects using event delegation pattern and find which slide needs to be shown and give control to move slide function
  Get the event target parameter
  return the method moveSlide */
  const getSelectedDot = (e) =>
{
   const dot = e.target;

   if(dot.dataset.slide ==='1') { 
      updatedSelectedDot(dot) 
      return moveSlide(parseInt(dot.dataset.slide - 1));
   }
   if(dot.dataset.slide ==='2')
    { 
       updatedSelectedDot(dot)
       return moveSlide(parseInt(dot.dataset.slide - 1));
    }
   if(dot.dataset.slide ==='3') 
   {
      updatedSelectedDot(dot); 
      return moveSlide(parseInt(dot.dataset.slide - 1));
   }
   if(dot.dataset.slide ==='4') 
   {   updatedSelectedDot(dot)
      return moveSlide(parseInt(dot.dataset.slide - 1));
   }
   if(dot.dataset.slide ==='5') 
   { 
      updatedSelectedDot(dot);
      return moveSlide(parseInt(dot.dataset.slide - 1));
   }   
}

/*  Move the container Image to the slide selected by the user
 Get the slide to move with
 do not return value  */
 const moveSlide = (index) =>
{
   imageTrackContainer.style.transform = `translateX(-${width * index}px)`;

} 

/* Remove the background for current dot and assign it to the one clicked
Get the dot selected
do not return value */
const updatedSelectedDot = (selectedDot) =>
{
  const activeDot = document.querySelector(".selected-dot");
  
  activeDot.classList.remove("selected-dot");
  selectedDot.classList.add("selected-dot");
}




/* EVENTS  */
window.addEventListener("load",positionImages);
dotsContainer.addEventListener("click",getSelectedDot);
