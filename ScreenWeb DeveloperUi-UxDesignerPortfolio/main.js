
const imageTrackContainer = document.querySelector(".images-container");
const imagesArray = imageTrackContainer.querySelectorAll("img");
const width = imagesArray[0].width;
const dotsContainer = document.querySelector(".dots-container");

/* METHODS */


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

   if(dot.dataset.slide ==='1') { return moveSlide(parseInt(dot.dataset.slide - 1));}
   if(dot.dataset.slide ==='2') { return moveSlide(parseInt(dot.dataset.slide - 1));}
   if(dot.dataset.slide ==='3') { return moveSlide(parseInt(dot.dataset.slide - 1));}
   if(dot.dataset.slide ==='4') { return moveSlide(parseInt(dot.dataset.slide - 1));}
   if(dot.dataset.slide ==='5') { return moveSlide(parseInt(dot.dataset.slide - 1));}   
}

/*  Move the container Image to the slide selected by the user
 Get the slide to move with
 do not return value  */
 const moveSlide = (index) =>
{
   imageTrackContainer.style.transform = `translateX(-${width * index}px)`;  
} 




/* EVENTS  */
window.addEventListener("load",positionImages);
dotsContainer.addEventListener("click",getSelectedDot);
