import docsearch from "@docsearch/js";

docsearch({
  container: "#docsearch",
  appId: "H6BNSEKIJ5",
  indexName: "GDCS Crawler",
  apiKey: "cee39cfd7cf40e4646331b2a6a631346",
  insights: true
});

const onClick = function () {
  document.getElementsByClassName("DocSearch-Button")[0].click();
};

document.getElementById("searchToggleMobile").onclick = onClick;
document.getElementById("searchToggleDesktop").onclick = onClick;