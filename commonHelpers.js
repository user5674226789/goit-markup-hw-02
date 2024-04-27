import{a as p,i as f}from"./assets/vendor-4bf2e1a2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function g(o){return o.map(({webformatURL:t,largeImageURL:n,tags:i,likes:e,views:r,comments:a,downloads:h})=>`<li class="list-item">
       <a class="gallery-link" href ="${n}">
       <img src="${t}" alt="${i}" class="gallery-image"
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
              <p class="info">${a}</p>
            
          </li>
          <li class="item-information-container">
            <h2 class="main-info"> Downloads </h2>
              <p class="info">${h}</p>
          </li>
        </ul>
     
      </li>`).join("")}async function y(o,t){const n="https://pixabay.com/api/",i={key:"43180958-6b06a0884e2ebb29e4f1cb8bf",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t};try{return(await p.get(n,{params:i})).data}catch(e){throw console.error("Error occurred while fetching images:",e),e}}let c,u=1,m=0;const b=15,s={searchForm:document.querySelector(".js-search-form"),btnShowMore:document.querySelector(".btn-show-more"),imagesContainer:document.querySelector(".js-images-container"),loader:document.querySelector(".loader")};s.searchForm.addEventListener("submit",L);async function L(o){o.preventDefault(),c=o.target.elements.query.value.trim(),s.imagesContainer.innerHTML="",u=1,m=0,q();try{const t=await y(c,u);if(!w(c,t.hits)){l(),d();return}m=Math.ceil(t.totalHits/b),g(t.hits),l(),M(),o.target.reset()}catch(t){console.error(t),l()}}function w(o,t){if(o.trim()){if(t.length===0)return f.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",timeout:3e3}),!1}else return f.show({color:"black",message:"Sorry, the input field must be filled in to start the photo search.",position:"topCenter",timeout:3e3}),!1;return!0}function S(){s.btnShowMore.classList.remove("hidden")}function d(){s.btnShowMore.classList.add("hidden")}function q(){s.loader.classList.remove("hidden")}function l(){s.loader.classList.add("hidden")}function M(){u>=m?d():S()}
//# sourceMappingURL=commonHelpers.js.map
