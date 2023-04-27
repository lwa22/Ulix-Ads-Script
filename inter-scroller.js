document.addEventListener("DOMContentLoaded", function () {
  const parallax = document.getElementById("#_InterScollerAds");
  let parallaxContainer;
  let parallaxAd;
  let iframe;
  const interval = function () {
    if (document.querySelector("#_InterScollerAds > div")) {
      parallaxContainer = document.querySelector("#_InterScollerAds > div");
      if (document.querySelector("#_InterScollerAds > div > div")) {
        parallaxAd = document.querySelector("#_InterScollerAds > div > div");
        if (parallaxAd.querySelector("iframe")) {
          iframe = parallaxAd.querySelector("iframe");
          parallaxContainer.classList.add("_InterScollerAds-ad-container");
          parallaxAd.classList.add("_InterScollerAds-ad");
          function setIframeSize() {
            iframe.style.marginLeft = parallaxAd.offsetWidth / 2 + "px";
          }
          setIframeSize();
          window.addEventListener("resize", setIframeSize);
          clearInterval(interval);
        }
      }
    }
  };
  setInterval(interval, 100);
});
