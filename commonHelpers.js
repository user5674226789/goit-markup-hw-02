import{i as a,S as f}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(s){const o="https://pixabay.com/api/",t=new URLSearchParams({key:"43096972-1afb589163252f275da428b1d",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),i=`${o}?${t}`;return fetch(i).then(e=>e.json()).catch(e=>{throw console.error("Error occurred while fetching images:",e),e})}function u(s){return s.map(({webformatURL:o,largeImageURL:t,tags:i,likes:e,views:r,comments:n,downloads:c})=>`<li class="list-item">
     <a class="gallery-link" href ="${t}">
     <img src="${o}" alt="${i}" class="gallery-image"
     </a>
     
      <ul class="information-list">
        <li class="item-information-container">
          <h2 class="main-info">Likes </h2>
            <p class="info">${e}</p>
          
        </li>
        <li class="item-information-container">
          <h2 class="main-info"> Views</h2>
            <p class="info">${r}</p>
          
        </li>
        <li class="item-information-container">
          <h2 class="main-info">Comments </h2>
            <p class="info">${n}</p>
          
        </li>
        <li class="item-information-container">
          <h2 class="main-info">Downloads </h2>
            <p class="info">${c}</p>
        </li>
      </ul>
   
    </li>`).join("")}const h=document.querySelector(".search-form"),d=document.querySelector(".list"),l=document.querySelector(".loading");h.addEventListener("submit",g);function g(s){s.preventDefault(),l.classList.add("loader");const o=s.target.elements.search.value.trim();if(o===""){a.error({backgroundColor:"lightred",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Please, fill the field!"});return}m(o).then(t=>{t.hits&&t.hits.length===0&&a.error({backgroundColor:"red",progressBar:!1,close:!1,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const i=u(t.hits);d.innerHTML=i,new f(".gallery-link",{captionsData:"alt"}).refresh()}).catch(t=>{console.error("Error occurred while fetching images:",t),a.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Sorry, an error occurred while fetching images. Please try again!"})}).finally(()=>l.classList.remove("loader")),s.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
