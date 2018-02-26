// ==UserScript==
// @name         enacit2-securityscan
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide non critical alerts
// @author       nicrausaz
// @match        https://security-scan2.epfl.ch/scans/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

$(document).ready(function(){
    $("div").each(function () {
       if ($(this).css('box-sizing') == "border-box" && $(this).css('padding') == "5px 10px") {
          $(this).css('cursor', 'pointer');
          $(this).next().hide();

          $(this).click(function() {
              if ($(this).next().is(":visible")) {
                  $(this).next().hide();
              }
              else {
                  $(this).next().show();
              }
          });
       }
    });
});
