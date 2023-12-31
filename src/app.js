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
// document.querySelector(".side-menu").addEventListener("click", function () {
//   var sideMenu = document.querySelector(".side-menu");
//   var iframe = document.getElementById("ytIframe");

//   sideMenu.classList.toggle("open");

//   if (sideMenu.classList.contains("open")) {
//     iframe.style.display = "none";
//   } else {
//     iframe.style.display = "block";
//   }
// });
// window.addEventListener('resize', function() {
//   var iframes = document.getElementsByTagName('iframe');
//   for (var i = 0; i < iframes.length; i++) {
//     var iframe = iframes[i];
//     iframe.src = iframe.src;  // This will force the iframe to reload
//   }
// });
