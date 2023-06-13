/// ==UserScript==
// @name        BoredPandaUnlock
// @namespace   https://github.com/FabriceNeyret/BoredPandaUnlock
// @version     1.1
// @description Unlock BoredPanda display
// @author      Fabrice Neyret
// // include     https://www.boredpanda.com/*
// @match       https://www.boredpanda.com/*
// @match       https://www.demilked.com/*
// @run-at      document-start
// @grant       GM_addStyle
// @downloadURL https://github.com/FabriceNeyret/BoredPandaUnlock.user.js
// @updateURL   https://github.com/FabriceNeyret/BoredPandaUnlock.user.js
// ==/UserScript==
//              https://github.com/FabriceNeyret/BoredPandaUnlock.user.js

// changelog:
//   1.1       hey, it directly works as is with demilked.com !

window.addEventListener("DOMContentLoaded", function() {
    console.log("BoredPandaUnlock loaded");
        setInterval(() => {
        document.getElementsByClassName("fEy1Z2XT ")[0].remove();
        document.body.style='';
        document.documentElement.style='';
    }, 1000 );
}, false);
