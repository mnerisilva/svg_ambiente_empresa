window.addEventListener("DOMContentLoaded", function(){
    console.log('carregou');
    //let mask = document.getElementById("mask");
    let grupo_botao_1 = document.getElementById("grupo-botao-1");
    let plataforma1 = document.getElementById("plataforma1");
    //botao_plataforma_ativa.addEventListener("click", function(){
    plataforma1.addEventListener("click", function(){
        console.log("clicou no botão");
        //mask.style.opacity = 1;
        mask.classList.toggle("mostra-mask");
        plataforma1.classList.toggle("amplia");
    });
    //mask.style.opacity = 0;
});