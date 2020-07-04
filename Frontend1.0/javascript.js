"use strict";
(function() {

  window.addEventListener("load", init);

  function init() {

    id("add_btn").addEventListener("click",open_add);
  }

  function open_add() {
      console.log("clicked")
      id("popup_add").classList.toggle("disappear");
      id("popup_add").classList.toggle("appear");
      id("close_btn").addEventListener("click",close_add)
      window.addEventListener("click",close_add_window)
  }

  function close_add() {
    id("popup_add").classList.toggle("disappear");
    id("popup_add").classList.toggle("appear");
  }
  function close_add_window(event) {
    if(event.target == id("popup_add")){
        id("popup_add").classList.toggle("disappear");
        id("popup_add").classList.toggle("appear"); 
    }
  }




//   helper functions
  function id(idName) {
    return document.getElementById(idName);
   }
   function qs(selector) {
    return document.querySelector(selector);
   }
   function qsa(selector) {
    return document.querySelectorAll(selector);
   }
   function gen(elType) {
    return document.createElement(elType);
   }
   

})();

