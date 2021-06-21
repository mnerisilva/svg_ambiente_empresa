window.addEventListener("DOMContentLoaded", function(){
    console.log('carregou');
    //let mask = document.getElementById("mask");
    let grupo_botao_1 = document.getElementById("grupo-botao-1");
    let plataforma1 = document.getElementById("plataforma1");
    let popup_reg_6 = document.getElementById('popup-reg-6');
    let area_popup = document.querySelector('.area-popup');
    let wrapper_popup = document.querySelector('.wrapper-popup');
    //botao_plataforma_ativa.addEventListener("click", function(){
    plataforma1.addEventListener("click", function(){
        console.log("clicou no botão");
        //mask.style.opacity = 1;
        mask.classList.toggle("mostra-mask");
        plataforma1.classList.toggle("amplia");
        popup_reg_6.classList.toggle("mostrar-popup");
        area_popup.classList.toggle("mostra-area-popup");
        wrapper_popup.classList.toggle("mostra-wrapper");

    });
    //mask.style.opacity = 0;
});