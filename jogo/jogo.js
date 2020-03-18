function adicionarNome(tentativas) {

    var nomeJogador = document.getElementById("nomeJogador1").value

    var tabela = document.getElementsByTagName('table')[1]
    var novaLinha = tabela.insertRow(tabela.length)
    celula1 = novaLinha.insertCell(0)
    celula1.innerHTML = nomeJogador
    celula1 = novaLinha.insertCell(1)
    celula1.innerHTML = tentativas
}

function adicionarTentativas(tentativas) {

    var tabela = document.getElementsByTagName('table')[0]
    var novaLinha = tabela.insertRow(tabela.length)
    celula1 = novaLinha.insertCell(0)
    celula1.innerHTML = "Você já tentou "
    celula1 = novaLinha.insertCell(1)
    celula1.innerHTML = tentativas
}

function reset() {

    document.getElementById("nomeJogador1").value = ""
    document.getElementById("numeroDigitado").value = ""
    document.getElementById("tabelarank").value = ""


}

var numeroPensado = Math.round(Math.random() * 100) //gerador de numero
var tentativas = 0

function verificar() {

    var numeroDigitado = document.getElementById("numeroDigitado").value

    if ((numeroPensado == numeroDigitado)) {
        alert("ACERTOOOOOU MIZERÁVIIII !!!");
        alert(numeroPensado)
        var m = adicionarNome(tentativas);
        numeroPensado = Math.round(Math.random() * 100)

    } else if ((numeroDigitado > numeroPensado)) {
        alert("VOCE ERRRRRRRROOOOOOU... TENTE NOVAMENTE!, Seu lançe foi muito alto ");
        tentativas++
        var n = adicionarTentativas(tentativas)


    } else if ((numeroDigitado < numeroPensado)) {
        alert("VOCE ERRRRRRRROOOOOOU... TENTE NOVAMENTE!, Seu lançe foi muito baixo ");
        alert(numeroPensado)
        tentativas++
        var n = adicionarTentativas(tentativas)

    }



}