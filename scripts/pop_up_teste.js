const criar_conta = document.querySelector(".itens_login .criar_conta")
const modal = document.querySelector("dialog")
const fechar = document.querySelector("dialog .btnOK")

criar_conta.onclick = function () {
    modal.show()
}

fechar.onclick = function () {
    modal.close()
}

