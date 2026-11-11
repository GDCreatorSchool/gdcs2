// Put your custom JS code here

const DAYS_BEFORE_NEW_TAG_EXPIRE = 28;

// Checks if a guide has been visited before and its creation date,
// in order to whether or not display the "New" badge at the "Latest Guides" homepage section
document.querySelectorAll(".new-badge").forEach(badge => {
  const id = "isVisited_" + badge.dataset.guide;

  const guideDate = new Date(badge.dataset.date);
  const currentDate = new Date();
  const daysSincePublish = (currentDate - guideDate) / (1000 * 60 * 60 * 24);

  if (!localStorage.getItem(id) && (daysSincePublish <= DAYS_BEFORE_NEW_TAG_EXPIRE)) {
    badge.style.display = "block";
  } else {
    badge.remove();
  }
});

// Adds a click listener that looks for images.
// When a click is fired:
//  Check if it is an image (does nothing if not)
//  Build an overlay with that full image
// Attach a listener to remove on another click (of the scrim)
document.addEventListener("click", event => {
  const image = event.target.closest("img[data-full]");
  if (!image) return;

  const imageOverlay = document.createElement("div");
  imageOverlay.className = "image-zoom-scrim";

  imageOverlay.addEventListener("click", event => {
    const scrim = event.target.classList.contains("image-zoom-scrim");
    if (!scrim) return;

    document.body.classList.remove("image-zoom-open");
    imageOverlay.remove()
  });


  const imageFull = document.createElement("img");
  imageFull.className = "image-zoom-img";
  imageFull.src = image.dataset.full;

  document.body.classList.add("image-zoom-open");

  imageOverlay.appendChild(imageFull);

  document.body.appendChild(imageOverlay);
});
