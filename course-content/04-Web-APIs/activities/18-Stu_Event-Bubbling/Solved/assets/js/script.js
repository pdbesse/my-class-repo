//  Selects carousel element
// We select the carousel element and set it as the value of the variable carousel, as follows:
var carousel = document.querySelector(".carouselbox");

// Selects buttons using their parent carousel element
// We select the buttons using their parent carousel element as follows:
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// Clicking on image opens a new window containing the image
// We use the addEventListener() method to open a new window when the image is clicked
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// Clicking on next button displays next image in carousel
// The nested buttons also have an event listener attached. To prevent the click event from bubbling up to the parent carousel and causing a new window to open, we use event.stopPropagation()
next.addEventListener("click", function(event) {
  // Stops event from bubbling up and new window opening
  event.stopPropagation();

  navigate(1);
});

// Clicking previous displays previous image in carousel
prev.addEventListener("click", function(event) {
  // Event bubbling would occur and a new window would open if we did not include the following line of code.
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
