
//Sticky Ads Container
let UlixAdsWidget_ = document.getElementById("_ulixAds");
let UlixAdsCloseBtn_ = document.createElement("span");
UlixAdsWidget_.appendChild(UlixAdsCloseBtn_);
UlixAdsCloseBtn_.id = "_closeAdsWdgt";
UlixAdsCloseBtn_.innerHTML=" × ";

let sticky_ads_Bottom = sticky_Style[0];
UlixAdsWidget_.style.bottom =sticky_ads_Bottom;

document.getElementById("_closeAdsWdgt").onclick = function () {
    document.getElementById("_ulixAds").style.display = "none";
    document.getElementById("_ulixAds").innerHTML = ""
}