import{a as f,i as n,S as m}from"./assets/vendor-09d7c26e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function u(s,o){const t="https://pixabay.com/api/",i={key:"43180958-6b06a0884e2ebb29e4f1cb8bf",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:o};try{return(await f.get(t,{params:i})).data}catch(e){throw console.error("Error occurred while fetching images:",e),e}}function g(s){return s.map(({webformatURL:o,largeImageURL:t,tags:i,likes:e,views:r,comments:a,downloads:c})=>`<li class="list-item">
       <a class="gallery-link" href ="${t}">
       <img src="${o}" alt="${i}" class="gallery-image"
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
              <p class="info">${c}</p>
          </li>
        </ul>
     
      </li>`).join("")}const h=document.querySelector(".search-form"),p=document.querySelector(".list"),l=document.querySelector(".loading");h.addEventListener("submit",d);function d(s){s.preventDefault(),l.classList.add("loader");const o=s.target.elements.search.value.trim();if(o===""){n.error({backgroundColor:"lightred",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Please, fill the field!"});return}u(o).then(t=>{t.hits&&t.hits.length===0&&n.error({backgroundColor:"red",progressBar:!1,close:!1,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const i=g(t.hits);p.innerHTML=i,new m(".gallery-link",{captionsData:"alt"}).refresh()}).catch(t=>{console.error("Error occurred while fetching images:",t),n.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Sorry, an error occurred while fetching images. Please try again!"})}).finally(()=>l.classList.remove("loader")),s.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
