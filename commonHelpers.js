import{i as f}from"./assets/vendor-482df00d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function p(o){return o.map(({webformatURL:t,largeImageURL:a,tags:n,likes:e,views:r,comments:s,downloads:h})=>`<li class="list-item">
       <a class="gallery-link" href ="${a}">
       <img src="${t}" alt="${n}" class="gallery-image"
       </a>
       
        <ul class="information-list">
          <li class="item-information-container">
            <h2 class="main-info"> Likes </h2>
              <p class="info">${e}</p>
            
          </li>
          <li class="item-information-container">
            <h2 class="main-info"> Views </h2>
              <p class="info">${r}</p>
            
          </li>
          <li class="item-information-container">
            <h2 class="main-info"> Comments </h2>
              <p class="info">${s}</p>
            
          </li>
          <li class="item-information-container">
            <h2 class="main-info"> Downloads </h2>
              <p class="info">${h}</p>
          </li>
        </ul>
     
      </li>`).join("")}let c,u=1,m=0;const g=15,i={searchForm:document.querySelector(".js-search-form"),btnShowMore:document.querySelector(".btn-load-more"),imagesContainer:document.querySelector(".js-images-container"),loader:document.querySelector(".loader")};i.searchForm.addEventListener("submit",y);async function y(o){o.preventDefault(),c=o.target.elements.search.value.trim(),i.imagesContainer.innerHTML="",u=1,m=0,b();try{const t=await fetchImages(c,u);if(!L(c,t.hits)){l(),d();return}m=Math.ceil(t.totalHits/g),p(t.hits),l(),w(),o.target.reset()}catch(t){console.error(t),l()}}function L(o,t){if(o.trim()){if(t.length===0)return f.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",timeout:3e3}),!1}else return f.show({color:"black",message:"Sorry, the input field must be filled in to start the photo search.",position:"topCenter",timeout:3e3}),!1;return!0}function S(){i.btnShowMore.classList.remove("hidden")}function d(){i.btnShowMore.classList.add("hidden")}function b(){i.loader.classList.remove("hidden")}function l(){i.loader.classList.add("hidden")}function w(){u>=m?d():S()}
//# sourceMappingURL=commonHelpers.js.map
