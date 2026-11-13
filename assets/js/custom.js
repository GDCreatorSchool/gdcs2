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



// Service Worker registration for the backup netlify service
// Registers only on the main site

const GDCS_MAIN_HOSTS = [
  "gdcreatorschool.com",
  "www.gdcreatorschool.com"
];

if (
  "serviceWorker" in navigator &&
  GDCS_MAIN_HOSTS.includes(window.location.hostname)
) {
  navigator.serviceWorker.register("/sw-fallback.js", {
    scope: "/",
    updateViaCache: "none"
  }).catch((error) => {
    console.error("GDCS fallback registration failed: ", error);
  });
}
