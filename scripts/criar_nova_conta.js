const botao_criar= document.querySelector("#criar_conta")
const pop= document.querySelector("#popup_criar")
const fechar= document.querySelector("#Fechar_cadastro")

botao_criar.onclick = function(){
    pop.showModal();
    pop.innerHTML += `
    <style>
        #popup_criar{
            background-color: black;
        }
    </style>
    `
}
// pequenos exemplos de como criar um pop-up,
// com isso a gente tá feito tropa


fechar.onclick = function(){
    pop.showModal();
    
}

