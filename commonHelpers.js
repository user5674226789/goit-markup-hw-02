import{i as d}from"./assets/vendor-482df00d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function h(t){return t.map(({webformatURL:o,largeImageURL:s,tags:a,likes:e,views:r,comments:c,downloads:S})=>`<li class="list-item">
       <a class="gallery-link" href ="${s}">
       <img src="${o}" alt="${a}" class="gallery-image"
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
              <p class="info">${c}</p>
            
          </li>
          <li class="item-information-container">
            <h2 class="main-info"> Downloads </h2>
              <p class="info">${S}</p>
          </li>
        </ul>
     
      </li>`).join("")}let l,n=1,m=0;const p=15,i={searchForm:document.querySelector(".js-search-form"),btnShowMore:document.querySelector(".btn-load-more"),imagesContainer:document.querySelector(".js-images-container"),loader:document.querySelector(".loader")};i.searchForm.addEventListener("submit",w);async function w(t){t.preventDefault(),l=t.target.elements.search.value.trim(),i.imagesContainer.innerHTML="",n=1,m=0,g();try{const o=await y(l,n);if(!v(l,o.hits)){u(),f();return}m=Math.ceil(o.totalHits/p),h(o.hits),u(),L(),t.target.reset()}catch(o){console.error(o),u()}}async function b(){n+=1,g();try{const t=await y(l,n);h(t.hits),n>=m&&(f(),d.show({color:"green",message:"Sorry, you have reached the end of the collection.",position:"topCenter",timeout:3e3}))}catch(t){console.error(t)}$(),u(),L()}i.btnShowMore.addEventListener("click",b);async function y(t,o){const s=`https://pixabay.com/api/?key=YOUR_API_KEY&q=${t}&page=${o}&per_page=${p}`;return await(await fetch(s)).json()}function v(t,o){if(t.trim()){if(o.length===0)return d.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",timeout:3e3}),!1}else return d.show({color:"black",message:"Sorry, the input field must be filled in to start the photo search.",position:"topCenter",timeout:3e3}),!1;return!0}function M(){i.btnShowMore.classList.remove("hidden")}function f(){i.btnShowMore.classList.add("hidden")}function g(){i.loader.classList.remove("hidden")}function u(){i.loader.classList.add("hidden")}function L(){n>=m?f():M()}function $(){const t=document.querySelector(".js-images-container"),o=t.scrollHeight;t.scrollTo({top:o,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
