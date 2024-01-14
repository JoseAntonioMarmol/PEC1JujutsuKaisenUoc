document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  var animatedElements = document.querySelectorAll(".index-title, p, .chars");

  animatedElements.forEach(function (element) {
    observer.observe(element);
  });

  setTimeout(function () {
    var loadingScreen = document.querySelector(".loading-screen");
    var mainContainer = document.querySelector(".main_container");

    if (loadingScreen && mainContainer) {
      loadingScreen.style.opacity = "0";
      loadingScreen.style.visibility = "hidden";
      mainContainer.style.opacity = "1";
      mainContainer.style.visibility = "visible";
    }
  }, 3000);
});
