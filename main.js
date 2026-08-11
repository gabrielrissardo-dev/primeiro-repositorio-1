const botoes = document.querySelectorAll("button");

botoes.forEach( fuction (botão) {
    let curtiu = false;
    botao.addEventListener("click", botao, botaoClicado);
    fuction botaoClicado ( ) {
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        if (curtiu === false) {
            texto.textContext++;
            curtiu = true;
        } else {
            texto.textConect--;
            curtiu = false;

        }
    }
})