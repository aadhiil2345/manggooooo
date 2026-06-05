const photos = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mango%20Fruit%20on%20the%20Tree.jpg?width=1400",
    alt: "Ripening mango fruits hanging from a mango tree branch",
    caption: "Mango fruits growing on the planted tree"
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mango%20Tree%20Leaves.jpg?width=1400",
    alt: "Close view of healthy green mango tree leaves",
    caption: "Healthy mango leaves after planting care"
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mango%20fruits%20on%20a%20tree%2002.jpg?width=1400",
    alt: "Mango fruits growing together on a tree",
    caption: "Young mango fruit cluster for the exhibit"
  }

];

const galleryImage = document.querySelector("#galleryImage");
const galleryCaption = document.querySelector("#galleryCaption");
const photoCount = document.querySelector("#photoCount");
const photoFrame = document.querySelector(".photo-frame");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentPhoto = 0;


function showPhoto(index) {
  currentPhoto = (index + photos.length) % photos.length;
  const photo = photos[currentPhoto];

  photoFrame.classList.add("switching");
  window.setTimeout(() => {
    galleryImage.src = photo.src;
    galleryImage.alt = photo.alt;
    galleryCaption.textContent = photo.caption;
    photoCount.textContent = `${currentPhoto + 1} / ${photos.length}`;
    photoFrame.classList.remove("switching");
  }, 180);
}

prevButton.addEventListener("click", () => showPhoto(currentPhoto - 1));
nextButton.addEventListener("click", () => showPhoto(currentPhoto + 1));

showPhoto(0);

