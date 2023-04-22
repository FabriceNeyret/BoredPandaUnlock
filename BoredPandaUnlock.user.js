/// ==UserScript==
// @name        BoredPandaUnlock
// @namespace   https://github.com/FabriceNeyret/BoredPandaUnlock
// @version     1.0
// @description Unlock BoredPanda display
// @author      Fabrice Neyret
// @include     https://www.boredpanda.com/*
// @match       https://www.boredpanda.com/*
// @run-at      document-start
// @grant       GM_addStyle
// @downloadURL https://github.com/FabriceNeyret/
// @updateURL   https://github.com/FabriceNeyret/
// ==/UserScript==
//              https://github.com/FabriceNeyret/


window.addEventListener("DOMContentLoaded", function() {
    console.log("BoredPandaUnlock loaded");
        setInterval(() => {
        document.getElementsByClassName("fEy1Z2XT ")[0].remove();
        document.body.style='';
        document.documentElement.style='';
    }, 500 );
}, false);
