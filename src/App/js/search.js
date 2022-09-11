// déclaration + assignation des variables pour récupérer 
// les éléments du DOM
let btnSearch = document.getElementsByClassName("btn-search");
let plsSearch = document.getElementsByClassName("plus-search");
// listener pour l'évènement "click" sur l'élément boutton du champ de
// recherche
btnSearch[0].addEventListener("click", () => {
    console.log("clickmeonemoretime");
  });
  // listener pour l'évènement "click" sur l'élément boutton plus de
  // critères
  plsSearch[0].addEventListener("click", () => {
    console.log("oupsididitagain");
  });