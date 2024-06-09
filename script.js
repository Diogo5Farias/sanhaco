const lingBr = document.getElementById("ling1");
const lingEn = document.getElementById("ling2");
const lingEs = document.getElementById("ling3");
const textoBr = document.querySelector(".por");
const textoEn = document.querySelector(".eng");
const textoEs = document.querySelector(".esp");

function alterarLinguagem(linguagem) {
    html.removeAttribute("lang");
    html.setAttribute("lang", linguagem);
}



lingBr.addEventListener("click", () => {
    textoBr.classList.remove("hide");
    textoEn.classList.remove("hide");
    textoEs.classList.remove("hide");
    textoEn.classList.add("hide");
    textoEs.classList.add("hide");
    lingBr.removeAttribute("class");
    lingEn.removeAttribute("class");
    lingEs.removeAttribute("class");
    lingBr.setAttribute("class", "bandeira selected");
    lingEn.setAttribute("class", "bandeira");
    lingEs.setAttribute("class", "bandeira");
    alterarLinguagem("pt-br");
});
lingEn.addEventListener("click", () => {
    textoBr.classList.remove("hide");
    textoEn.classList.remove("hide");
    textoEs.classList.remove("hide");
    textoBr.classList.add("hide");
    textoEs.classList.add("hide");
    lingBr.removeAttribute("class");
    lingEn.removeAttribute("class");
    lingEs.removeAttribute("class");
    lingBr.setAttribute("class", "bandeira");
    lingEn.setAttribute("class", "bandeira selected");
    lingEs.setAttribute("class", "bandeira");
    alterarLinguagem("en");
});
lingEs.addEventListener("click", () => {
    textoBr.classList.remove("hide");
    textoEn.classList.remove("hide");
    textoEs.classList.remove("hide");
    textoBr.classList.add("hide");
    textoEn.classList.add("hide");
    lingBr.removeAttribute("class");
    lingEn.removeAttribute("class");
    lingEs.removeAttribute("class");
    lingBr.setAttribute("class", "bandeira");
    lingEn.setAttribute("class", "bandeira");
    lingEs.setAttribute("class", "bandeira selected");
    alterarLinguagem("es");
});

