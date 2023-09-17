const botao_1 = document.querySelector("#botao_1")
const popup_1 = document.querySelector("#popup1")
const fechar_1 = document.querySelector("#fechar_1")

const botao_2 = document.querySelector("#botao_2")
const popup_2 = document.querySelector("#popup2")
const fechar_2 = document.querySelector("#fechar_2")

const botao_3 = document.querySelector("#botao_3")
const popup_3 = document.querySelector("#popup3")
const fechar_3 = document.querySelector("#fechar_3")

const botao_4 = document.querySelector("#botao_4")
const popup_4 = document.querySelector("#popup4")
const fechar_4 = document.querySelector("#fechar_4")

botao_1.onclick = function (){ popup_1.show() }
fechar_1.onclick = function (){ popup_1.close() }

botao_2.onclick = function (){ popup_2.show() }
fechar_2.onclick = function () { popup_2.close() }

botao_3.onclick = function (){ popup_3.show() }
fechar_3.onclick = function () { popup_3.close() }

botao_4.onclick = function (){ popup_4.show() }
fechar_4.onclick = function () { popup_4.close() }
