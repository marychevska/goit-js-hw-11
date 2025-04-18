import{a as p,i as l,S as g}from"./assets/vendor-C61sVsxn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="49626853-35a7cc777388834eb6e89d08d";function h(s){const r=new URLSearchParams({key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return p(`https://pixabay.com/api/?${r}`)}const f=document.querySelector(".gallery"),u=document.querySelector(".loader-js");function L(s){f.innerHTML=s.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:a,downloads:d})=>`<li class="gallery-item">
  <a class="item-link" href="${o}">
    <img class="img" src="${r}" alt="${i}" />
    <ul class="statistic-list">
      <li class="statistic-item">
        <p class="statistic-text">Likes</p>
        <p class="statistic-value">${e}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Views</p>
        <p class="statistic-value">${t}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Comments</p>
        <p class="statistic-value">${a}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${d}</p>
      </li>
    </ul></a
  >
</li>`).join("")}function v(){f.innerHTML=""}function S(){u.classList.add("loader")}function c(){u.classList.remove("loader")}document.querySelector(".span.loader").classList.remove("loader");const n=document.querySelector(".form"),x=document.querySelector(".gallery"),m={iconColor:"#ffffff",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#B51B1B",messageColor:"#ffffff",iconUrl:"./img/error.svg"},b={title:"ERROR",titleColor:"#ffffff",message:"Error connecting to server",messageColor:"#ffffff",iconUrl:"./img/error.svg",iconColor:"#ffffff",backgroundColor:"#B51B1B"};n.addEventListener("submit",B);function B(s){s.preventDefault(),x.innerHTML="";const r=s.target.elements.text.value.trim();q(r),S(),h(r).then(o=>{const i=o.data.hits;w(i),c(),L(i),C()}).catch(o=>{console.log(o.message),c(),l.show(b)}),n.reset()}function C(){new g(".gallery li a",{captionsData:"alt",captionDelay:250}).refresh()}function q(s){if(!s){l.show(m),n.reset();return}}function w(s){if(!s.length){l.show(m),v(),c();return}}
//# sourceMappingURL=index.js.map
