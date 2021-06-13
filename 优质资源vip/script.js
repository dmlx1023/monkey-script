// ==UserScript==
// @name         优质资源
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
//@match
// @match        https://aah8.com/*
// @match        https://vhh8.com/*
// @icon         https://www.google.com/s2/favicons?domain=aah8.com
// @grant        none
//@downloadURL  
//@run-at document-start

// ==/UserScript==

(function() {
    'use strict';
var originalSetItem = localStorage.setItem;
localStorage.setItem = function(key, value) {
   if(this.vip_level!="2"){
   this.vip_level='2'
   }
  originalSetItem.apply(this, arguments);
};
})();