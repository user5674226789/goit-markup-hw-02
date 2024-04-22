import{a as S,i as c,S as M}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function g(r,t){const s="https://pixabay.com/api/",i={key:"43180958-6b06a0884e2ebb29e4f1cb8bf",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t};try{return(await S.get(s,{params:i})).data}catch(e){throw console.error("Error occurred while fetching images:",e),e}}function d(r){return r.map(({webformatURL:t,largeImageURL:s,tags:i,likes:e,views:o,comments:n,downloads:w})=>`<li class="list-item">
       <a class="gallery-link" href ="${s}">
       <img src="${t}" alt="${i}" class="gallery-image"
       </a>
       
        <ul class="information-list">
          <li class="item-information-container">
            <h2 class="main-info"> Likes </h2>
              <p class="info">${e}</p>
            
          </li>
          <li class="item-information-container">
            <h2 class="main-info"> Views </h2>
              <p class="info">${o}</p>
            
          </li>
          <li class="item-information-container">
            <h2 class="main-info"> Comments </h2>
              <p class="info">${n}</p>
            
          </li>
          <li class="item-information-container">
            <h2 class="main-info"> Downloads </h2>
              <p class="info">${w}</p>
          </li>
        </ul>
     
      </li>`).join("")}let l,a=1,u=0;const P=15,q=document.querySelector(".search-form"),f=document.querySelector(".list"),p=document.querySelector(".loader"),m=document.querySelector(".btn-load-more");q.addEventListener("submit",v);async function v(r){if(r.preventDefault(),l=r.target.elements.search.value.trim(),f.innerHTML="",a=1,h(),l===""){c.error({backgroundColor:"lightred",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Please, fill the field!"});return}try{const t=await g(l,a);u=Math.ceil(t.totalHits/P),d(t.hits),h(),t.hits&&t.hits.length===0&&c.error({backgroundColor:"red",progressBar:!1,close:!1,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const s=d(t.hits);f.innerHTML=s,new M(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}catch(t){console.error("Error occurred while fetching images:",t),c.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Sorry, an error occurred while fetching images. Please try again!"})}L(),r.target.reset(),b()}m.addEventListener("click",C);async function C(){a+=1,h();try{const r=await g(l,a);f.insertAdjacentHTML("beforeend",d(r.hits)),a>=u&&c.show({color:"green",message:"We're sorry, but you've reached the end of search results.",position:"topCenter",timeout:3e3})}catch(r){console.log(r)}y(),$(),L(),b()}function B(){m.classList.remove("hidden")}function y(){m.classList.add("hidden")}function h(){p.classList.remove("hidden")}function L(){p.classList.add("hidden")}function b(){a>=u?y():B()}function $(){const r=f.firstChild.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
