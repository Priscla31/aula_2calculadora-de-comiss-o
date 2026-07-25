'use strict'

const botaoCalcular = document.getElementById('botao-calcular')

function mostraComissao() {
    const nome = document.getElementById('caixa-nome')
    const valor = document.getElementById('caxa-valor')
    const resultado = document.getElementById('resultado')

    const salario = valor.value * 0.08

    resultado.textContent = `${nome.value} O valor das venda é:${salario}`
}
botaoCalcular.addEventListener('click', mostraComissao)