console.log("Master Js Added");

// Get HTML head element
let shrbtnheader = document.getElementsByTagName('HEAD')[0];
// Create new link Element
var link = document.createElement('link');
// set the attributes for link element
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://cdn.jsdelivr.net/gh/lwa22/Ulix-Ads-Script@main/common/master.css';


// Append link element to HTML head
shrbtnheader.appendChild(link);
console.log("Master Css Painted");

//Inter Scroller Ads
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

//Sticky Ads Container
let UlixAdsWidget_ = document.getElementById("_ulixAds");
let UlixAdsCloseBtn_ = document.createElement("span");
UlixAdsWidget_.appendChild(UlixAdsCloseBtn_);
UlixAdsCloseBtn_.id = "_closeAdsWdgt";
UlixAdsCloseBtn_.innerHTML=" × ";

//let sticky_ads_Bottom = sticky_Style[0];
//UlixAdsWidget_.style.bottom =sticky_ads_Bottom;

document.getElementById("_closeAdsWdgt").onclick = function () {
    document.getElementById("_ulixAds").style.display = "none";
    document.getElementById("_ulixAds").innerHTML = ""
}

//Share Button Container

let content_url = window.document.URL;
let content_title = document.title;

let fb_icon_bgcolor = document.querySelector('#_ulxShareBtn').dataset.fbcolor;
let wp_icon_bgcolor = document.querySelector('#_ulxShareBtn').dataset.wpcolor;
let tg_icon_bgcolor = document.querySelector('#_ulxShareBtn').dataset.tgcolor;

let nxt_btn_bgcolor = document.querySelector('#_ulxShareBtn').dataset.nxtcolor;

let fb_icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjEuOTUgNS4wMDVsLTMuMzA2LS4wMDRjLTMuMjA2IDAtNS4yNzcgMi4xMjQtNS4yNzcgNS40MTV2Mi40OTVIMTAuMDV2NC41MTVoMy4zMTdsLS4wMDQgOS41NzVoNC42NDFsLjAwNC05LjU3NWgzLjgwNmwtLjAwMy00LjUxNGgtMy44MDN2LTIuMTE3YzAtMS4wMTguMjQxLTEuNTMzIDEuNTY2LTEuNTMzbDIuMzY2LS4wMDEuMDEtNC4yNTZ6Ii8+PC9zdmc+";

let wp_icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNy42IDYuMzE5OTlDMTYuODY2OSA1LjU4MTQxIDE1Ljk5NDMgNC45OTU5NiAxNS4wMzMgNC41OTc2N0MxNC4wNzE2IDQuMTk5MzggMTMuMDQwNiAzLjk5NjIyIDEyIDMuOTk5OTlDMTAuNjA4OSA0LjAwMTM1IDkuMjQyNDggNC4zNjgxOSA4LjAzNzcxIDUuMDYzNzdDNi44MzI5NCA1Ljc1OTM1IDUuODMyMDggNi43NTkyNiA1LjEzNTM0IDcuOTYzMzVDNC40Mzg2IDkuMTY3NDUgNC4wNzA0NiAxMC41MzM1IDQuMDY3NzYgMTEuOTI0NkM0LjA2NTA3IDEzLjMxNTggNC40Mjc5MyAxNC42ODMyIDUuMTIgMTUuODlMNCAyMEw4LjIgMTguOUM5LjM1OTc1IDE5LjU0NTIgMTAuNjYyOSAxOS44ODkxIDExLjk5IDE5LjlDMTQuMDk5NyAxOS45MDAxIDE2LjEyNCAxOS4wNjY4IDE3LjYyMjIgMTcuNTgxNkMxOS4xMjA1IDE2LjA5NjUgMTkuOTcxNSAxNC4wNzk2IDE5Ljk5IDExLjk3QzE5Ljk4MyAxMC45MTczIDE5Ljc2ODIgOS44NzYzNCAxOS4zNTgxIDguOTA2OEMxOC45NDggNy45MzcyNSAxOC4zNTA1IDcuMDU4MTkgMTcuNiA2LjMxOTk5Wk0xMiAxOC41M0MxMC44MTc3IDE4LjUzMDggOS42NTcwMSAxOC4yMTMgOC42NCAxNy42MUw4LjQgMTcuNDZMNS45MSAxOC4xMkw2LjU3IDE1LjY5TDYuNDEgMTUuNDRDNS41NTkyNSAxNC4wNjY3IDUuMjQxNzQgMTIuNDI5IDUuNTE3NjIgMTAuODM3MkM1Ljc5MzUgOS4yNDU0NSA2LjY0MzYxIDcuODEwMTUgNy45MDY5IDYuODAzMjJDOS4xNzAyIDUuNzk2MjggMTAuNzU4OSA1LjI4NzY1IDEyLjM3MjEgNS4zNzM2OEMxMy45ODUzIDUuNDU5NyAxNS41MTEgNi4xMzQ0MSAxNi42NiA3LjI2OTk5QzE3LjkxNiA4LjQ5ODE4IDE4LjYzNSAxMC4xNzM1IDE4LjY2IDExLjkzQzE4LjY0NDIgMTMuNjg1OSAxNy45MzU1IDE1LjM2NDUgMTYuNjg4MiAxNi42MDA2QzE1LjQ0MSAxNy44MzY2IDEzLjc1NiAxOC41MzAxIDEyIDE4LjUzWk0xNS42MSAxMy41OUMxNS40MSAxMy40OSAxNC40NCAxMy4wMSAxNC4yNiAxMi45NUMxNC4wOCAxMi44OSAxMy45NCAxMi44NSAxMy44MSAxMy4wNUMxMy42MTQ0IDEzLjMxODEgMTMuNDA0IDEzLjU3NTEgMTMuMTggMTMuODJDMTMuMDcgMTMuOTYgMTIuOTUgMTMuOTcgMTIuNzUgMTMuODJDMTEuNjA5NyAxMy4zNjk0IDEwLjY1OTcgMTIuNTM5NCAxMC4wNiAxMS40N0M5Ljg1IDExLjEyIDEwLjI2IDExLjE0IDEwLjY0IDEwLjM5QzEwLjY2ODEgMTAuMzM1OSAxMC42ODI3IDEwLjI3NTkgMTAuNjgyNyAxMC4yMTVDMTAuNjgyNyAxMC4xNTQxIDEwLjY2ODEgMTAuMDk0MSAxMC42NCAxMC4wNEMxMC42NCA5LjkzOTk5IDEwLjE5IDguOTU5OTkgMTAuMDMgOC41Njk5OUM5Ljg3IDguMTc5OTkgOS43MSA4LjIzOTk5IDkuNTggOC4yMjk5OUg5LjE5QzkuMDg4OTUgOC4yMzE1NCA4Ljk4OTQgOC4yNTQ2NSA4Ljg5OCA4LjI5Nzc2QzguODA2NiA4LjM0MDg3IDguNzI1NDYgOC40MDMgOC42NiA4LjQ3OTk5QzguNDM1NjIgOC42OTgxNyA4LjI2MDYxIDguOTYxOTEgOC4xNDY3NiA5LjI1MzQzQzguMDMyOTEgOS41NDQ5NSA3Ljk4Mjg3IDkuODU3NDkgOCAxMC4xN0M4LjA2MjcgMTAuOTE4MSA4LjM0NDQzIDExLjYzMTEgOC44MSAxMi4yMkM5LjY2MjIgMTMuNDk1OCAxMC44MzAxIDE0LjUyOTMgMTIuMiAxNS4yMkMxMi45MTg1IDE1LjYzOTQgMTMuNzUzNSAxNS44MTQ4IDE0LjU4IDE1LjcyQzE0Ljg1NTIgMTUuNjY1NCAxNS4xMTU5IDE1LjU1MzUgMTUuMzQ1IDE1LjM5MTVDMTUuNTc0MiAxNS4yMjk2IDE1Ljc2NjcgMTUuMDIxMiAxNS45MSAxNC43OEMxNi4wNDI4IDE0LjQ4NTYgMTYuMDg0NiAxNC4xNTgzIDE2LjAzIDEzLjg0QzE1Ljk0IDEzLjc0IDE1LjgxIDEzLjY5IDE1LjYxIDEzLjU5WiIgZmlsbD0iI0ZGRkZGRiIvPg0KPC9zdmc+";

let tg_icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjxzdmcgZmlsbD0iI0ZGRkZGRiIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgDQoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDpub25lO30NCjwvc3R5bGU+DQo8cGF0aCBkPSJNMTkuMiw0LjRMMi45LDEwLjdjLTEuMSwwLjQtMS4xLDEuMS0wLjIsMS4zbDQuMSwxLjNsMS42LDQuOGMwLjIsMC41LDAuMSwwLjcsMC42LDAuN2MwLjQsMCwwLjYtMC4yLDAuOC0wLjQNCgljMC4xLTAuMSwxLTEsMi0ybDQuMiwzLjFjMC44LDAuNCwxLjMsMC4yLDEuNS0wLjdsMi44LTEzLjFDMjAuNiw0LjYsMTkuOSw0LDE5LjIsNC40eiBNMTcuMSw3LjRsLTcuOCw3LjFMOSwxNy44TDcuNCwxM2w5LjItNS44DQoJQzE3LDYuOSwxNy40LDcuMSwxNy4xLDcuNHoiLz4NCjxyZWN0IHk9IjAiIGNsYXNzPSJzdDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIvPg0KPC9zdmc+";



// Select Share Button Container
let SharebuttonContainer = document.createElement("div");
SharebuttonContainer.id ="_ulxShareBtn";
document.body.appendChild(SharebuttonContainer);
// Create a new element

let UlxShrbtn = document.createElement("div");
let Shrbtn = document.createElement("nav");

// Append the new element to the div element
SharebuttonContainer.appendChild(UlxShrbtn);
UlxShrbtn.appendChild(Shrbtn);

//Adding Class to eliment
UlxShrbtn.classList.add("UlxShrbtn");
Shrbtn.classList.add("nav");


//adding sharebuttons in div
let fbShrbtn = document.createElement("a");
fbShrbtn.classList.add("nav__link");
fbShrbtn.style.backgroundColor= fb_icon_bgcolor;
Shrbtn.appendChild(fbShrbtn);

let wpSharebtn = document.createElement("a");
wpSharebtn.classList.add("nav__link");
wpSharebtn.style.backgroundColor= wp_icon_bgcolor;
Shrbtn.appendChild(wpSharebtn);

let telegrambtn = document.createElement("a");
telegrambtn.classList.add("nav__link");
telegrambtn.style.backgroundColor= tg_icon_bgcolor;
Shrbtn.appendChild(telegrambtn);


//sharebuttonlink
fbShrbtn.href = "https://www.facebook.com/sharer/sharer.php?u="+content_url+"&quote="+content_title;
wpSharebtn.href = "whatsapp://send/?text="+content_title+" - "+content_url;
telegrambtn.href = "https://telegram.me/share/url?url="+content_url+"&text="+content_title;


//imageintobtn
let fb_icon_svg = document.createElement("img");
fb_icon_svg.src = fb_icon;
fb_icon_svg.style.width ="28px";
fbShrbtn.appendChild(fb_icon_svg);

let wp_icon_svg = document.createElement("img");
wp_icon_svg.src = wp_icon;
wp_icon_svg.style.width ="28px";
wpSharebtn.appendChild(wp_icon_svg);

let tg_icon_svg = document.createElement("img");
tg_icon_svg.src = tg_icon;
tg_icon_svg.style.width ="28px";
telegrambtn.appendChild(tg_icon_svg);

//adding next button 
let nxtbtnlink = document.createElement("a");
nxtbtnlink.href ="#";
nxtbtnlink.classList.add("nav__link");
nxtbtnlink.style.fontSize = "18px";
nxtbtnlink.style.textTransform = "uppercase";
nxtbtnlink.style.backgroundColor = nxt_btn_bgcolor;
Shrbtn.appendChild(nxtbtnlink);
//next buton 
let buttonnxt = document.createElement("span");

buttonnxt.classList.add("nav__text");
nxtbtnlink.appendChild(buttonnxt);
buttonnxt.innerHTML="Share »";


  const btn = document.querySelector('.nav__text');
  const shareData = {
    title: content_title,
    text: '',
    url: content_url
  }

  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
		   try {
      await navigator.share(shareData)
    } 
    catch(err) {
		navigator.clipboard.writeText(shareData.url);
      console.log("Share Not Shared");
    }
	
  });
