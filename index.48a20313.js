!function(){var e=document.querySelector(".js-menu"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=document.querySelector("body"),c=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("open"),t.classList.toggle("open"),o.classList.toggle("scroll-disable")};t.addEventListener("click",c),n.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.48a20313.js.map