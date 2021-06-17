window.addEventListener("DOMContentLoaded", function(){
    console.log('carrgou');
    //let mask = document.getElementById("mask");
    let botao_plataforma_ativa = document.getElementById("botao-plataforma-ativa");
    let plataforma1 = document.getElementById("plataforma1");
    botao_plataforma_ativa.addEventListener("click", function(){
        console.log("clicou no botão");
        //mask.style.opacity = 1;
        mask.classList.add("mostra-mask");
        plataforma1.classList.add("amplia");
    });
    mask.style.opacity = 0;
});