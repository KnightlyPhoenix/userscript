// ==UserScript==
// @name            Force allow full screen on Youtube embed videos
// @description     Force allow full screen on Youtube embed videos
// @version         1.0.1
// @author          KnightlyPhoenix (https://github.com/knightlyphoenix)
// @namespace       https://github.com/KnightlyPhoenix/userscript
// @supportURL      https://github.com/KnightlyPhoenix/userscript/issues
// @updateURL       https://raw.githubusercontent.com/KnightlyPhoenix/userscript/main/youtube-embed.js
// @downloadURL     https://raw.githubusercontent.com/KnightlyPhoenix/userscript/main/youtube-embed.js
// @license         GPL-3.0
// @match           https://jegged.com/*

// ==/UserScript==
const qSA = x => document.querySelectorAll(x);
const replaceIframe = (iframe) => {
    iframe.setAttribute("allowfullscreen", "allowfullscreen");

}

(function () {
    'use strict';
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type == "childList") {
                // check for new youtube embeds and replace as necessary
                qSA("iframe[src*='youtube.com/embed']").forEach(replaceIframe);
            }

        });
    });

    // run this once for each iframe that is already on the page
    qSA("iframe[src*='youtube.com/embed']").forEach(replaceIframe);

    // keep observing for new iframes and run code from above
    observer.observe(document, { childList: true, subtree: true });
})();