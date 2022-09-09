// déclaration + assignation des variables pour récupérer 
// les éléments du DOM
let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
let btnSearch = document.getElementsByClassName("btn-search");
let plsSearch = document.getElementsByClassName("plus-search");
// listener pour l'évènement "click" sur l'élément icone du menu burger
hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
// itération sur les éléments li afin de leur ajouter un listener
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});
// listener pour l'évènement "click" sur l'élément boutton du champ de
// recherche
btnSearch[0].addEventListener("click", () => {
  console.log("clickmeonemoretime");
});
// listener pour l'évènement "click" sur l'élément boutton du champ de
// recherche
plsSearch[0].addEventListener("click", () => {
  console.log("oupsididitagain");
});