let titulo = document.querySelector("#titulo")
titulo.textContent = "ETEC PROFESSOR BASILIDES DE GODOY"

let tabela = document.querySelector("#tabela-aluno")
let aluno = document.querySelectorAll(".aluno")

for(let j = 0; j < tabela.length; j++){
    let contagem = tabela[j]
    let nome = contagem.querySelector(".td-nome").textContent
    let n1 = contagem.querySelectorAll(".td-n1").textContent
    let n2 = contagem.querySelectorAll(".td-n2").textContent
    let n3 = contagem.querySelectorAll(".td-n3").textContent
    console.log(n1)

    let mediaAluno = calcMedia(n1, n2, n3)
    let mediaFinal = document.querySelector(".td-media")
    console.log("N")
    mediaFinal.textContconsole.log("N") = mediaAluno.toFixed(2)

    function calcMedia(n1, n2, n3) {
        let media = (ParseFloat(n1) + ParseFloat(n2) + ParseFloat(n3)) / 3.0
        return media
    }
}
