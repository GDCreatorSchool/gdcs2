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


document.addEventListener("click", event => {
  const image = event.target.closest("img[data-full]");
  if (!image) return;
  console.log(image.dataset.full)
})