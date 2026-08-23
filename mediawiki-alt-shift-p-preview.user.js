// ==UserScript==
// @name         MediaWiki Alt+Shift+P Preview
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Restores the Alt+Shift+P preview shortcut on MediaWiki sites, bypassing Chrome's native tab group shortcut.
// @author       Qwen3.7-Plus
// @match        *://*.wikipedia.org/*
// @match        *://*.wikimedia.org/*
// @match        *://*.fandom.com/*
// @match        *://*.wiki/*
// @match        *://rationalwiki.org/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    document.addEventListener('keydown', function (e) {
        if (e.altKey && e.shiftKey && e.key.toLowerCase() === 'p') {
            // Find MediaWiki preview button (works for both <input> and <button>)
            var previewBtn = document.querySelector('[name="wpPreview"]');
            if (previewBtn) {
                e.preventDefault();
                e.stopImmediatePropagation();
                previewBtn.click();
                return false;
            }
        }
    }, true); // Capture phase - runs before Chrome
})();
