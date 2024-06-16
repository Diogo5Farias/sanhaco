const lingBr = document.getElementById("ling1");
const lingEn = document.getElementById("ling2");
const lingEs = document.getElementById("ling3");
const textoBr = document.querySelector(".por");
const textoEn = document.querySelector(".eng");
const textoEs = document.querySelector(".esp");

/*function alterarLinguagem(linguagem) {
    document.setAttribute("lang").change(linguagem);
}*/

lingBr.addEventListener("click", () => {
    textoBr.classList.remove("hide");
    textoEn.classList.remove("hide");
    textoEs.classList.remove("hide");
    textoEn.classList.add("hide");
    textoEs.classList.add("hide");
    document.querySelector(".apor").classList.remove("hide");
    document.querySelector(".aeng").classList.remove("hide");
    document.querySelector(".aesp").classList.remove("hide");
    document.querySelector(".aeng").classList.add("hide");
    document.querySelector(".aesp").classList.add("hide");
    document.querySelector(".lpor").classList.remove("hide");
    document.querySelector(".leng").classList.remove("hide");
    document.querySelector(".lesp").classList.remove("hide");
    document.querySelector(".leng").classList.add("hide");
    document.querySelector(".lesp").classList.add("hide");
    lingBr.classList.remove("selected");
    lingEn.classList.remove("selected");
    lingEs.classList.remove("selected");
    lingBr.classList.add("selected");
    //alterarLinguagem("pt-br");
});
lingEn.addEventListener("click", () => {
    textoBr.classList.remove("hide");
    textoEn.classList.remove("hide");
    textoEs.classList.remove("hide");
    textoBr.classList.add("hide");
    textoEs.classList.add("hide");
    document.querySelector(".apor").classList.remove("hide");
    document.querySelector(".aeng").classList.remove("hide");
    document.querySelector(".aesp").classList.remove("hide");
    document.querySelector(".apor").classList.add("hide");
    document.querySelector(".aesp").classList.add("hide");
    document.querySelector(".lpor").classList.remove("hide");
    document.querySelector(".leng").classList.remove("hide");
    document.querySelector(".lesp").classList.remove("hide");
    document.querySelector(".lpor").classList.add("hide");
    document.querySelector(".lesp").classList.add("hide");
    lingBr.classList.remove("selected");
    lingEn.classList.remove("selected");
    lingEs.classList.remove("selected");
    lingEn.classList.add("selected");
    //alterarLinguagem("en");
});
lingEs.addEventListener("click", () => {
    textoBr.classList.remove("hide");
    textoEn.classList.remove("hide");
    textoEs.classList.remove("hide");
    textoBr.classList.add("hide");
    textoEn.classList.add("hide");
    document.querySelector(".apor").classList.remove("hide");
    document.querySelector(".aeng").classList.remove("hide");
    document.querySelector(".aesp").classList.remove("hide");
    document.querySelector(".apor").classList.add("hide");
    document.querySelector(".aeng").classList.add("hide");
    document.querySelector(".lpor").classList.remove("hide");
    document.querySelector(".leng").classList.remove("hide");
    document.querySelector(".lesp").classList.remove("hide");
    document.querySelector(".lpor").classList.add("hide");
    document.querySelector(".leng").classList.add("hide");
    lingBr.classList.remove("selected");
    lingEn.classList.remove("selected");
    lingEs.classList.remove("selected");
    lingEs.classList.add("selected");
    //alterarLinguagem("es");
});

