import{a as L,i as u}from"./assets/vendor-c16b30b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function h(t){return t.map(({webformatURL:o,largeImageURL:a,tags:s,likes:e,views:r,comments:c,downloads:b})=>`<li class="list-item">
       <a class="gallery-link" href ="${a}">
       <img src="${o}" alt="${s}" class="gallery-image"
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
              <p class="info">${b}</p>
          </li>
        </ul>
     
      </li>`).join("")}async function p(t,o){const a="https://pixabay.com/api/",s={key:"43180958-6b06a0884e2ebb29e4f1cb8bf",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:o};try{return(await L.get(a,{params:s})).data}catch(e){throw console.error("Error occurred while fetching images:",e),e}}let l,n=1,f=0;const w=15,i={searchForm:document.querySelector(".js-search-form"),btnShowMore:document.querySelector(".btn-show-more"),imagesContainer:document.querySelector(".js-images-container"),loader:document.querySelector(".loader")};i.searchForm.addEventListener("submit",S);async function S(t){t.preventDefault(),l=t.target.elements.query.value.trim(),i.imagesContainer.innerHTML="",n=1,g();const o=await p(l,n);if(!M(l,o.hits)){m(),d();return}f=Math.ceil(o.totalHits/w),h(o.hits),m(),y(),t.target.reset()}i.btnShowMore.addEventListener("click",v);async function v(){n+=1,g();try{const t=await p(l,n);h(t.hits),n>=f&&(d(),u.show({color:"green",message:"Sorry, you have reached the end of collection.",position:"topCenter",timeout:3e3}))}catch(t){console.log(t)}C(),m(),y()}function M(t,o){if(t.trim()){if(o.length===0)return u.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",timeout:3e3}),!1}else return u.show({color:"black",message:"Sorry, the input field must be filled in to start the photo search.",position:"topCenter",timeout:3e3}),!1;return!0}function q(){i.btnShowMore.classList.remove("hidden")}function d(){i.btnShowMore.classList.add("hidden")}function g(){i.loader.classList.remove("hidden")}function m(){i.loader.classList.add("hidden")}function y(){n>=f?d():q()}function C(){scrollBy({top:1e3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
