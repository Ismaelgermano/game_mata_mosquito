var altura = 0
var largura = 0
var vidas = 1
var tempo = 5

var tempoPorNivel = 1500

var nivel = window.location.search
nivel = nivel.replace("?", "")

if(nivel === 'normal'){
    tempoPorNivel = 1500
}else if (nivel === 'dificil') {
    tempoPorNivel = 1000
}else if (nivel === 'godofwar') {
    tempoPorNivel = 750
}

function ajusteTamanhoPalco () {
    altura = window.innerHeight
    largura = window.innerWidth
}

ajusteTamanhoPalco()

document.getElementById("cronometro").innerHTML = tempo

var cronometro = setInterval(function () {
    tempo -= 1

    if (tempo < 0){
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = "vitoria.html"
    }else{
    document.getElementById("cronometro").innerHTML = tempo
    }
} , 1000) 


function posicaoAleatoria () {

    if (document.getElementById("mosquito")){
        document.getElementById("mosquito").remove()

        if (vidas > 3){
            window.location.href = "fim_de_jogo.html"
        }else{
        document.getElementById("v" + vidas).src = "img/coracao_vazio.png"
        vidas++
        }
    }

    var eixoX = Math.floor(Math.random() * largura) - 90
    var eixoY = Math.floor(Math.random() * altura) - 90

    eixoX = eixoX < 0 ? 0 : eixoX 
    eixoY = eixoY < 0 ? 0 : eixoY

    // CRIAÇÃO DO ELEMENTO MOSQUITO
    var mosquito = document.createElement("img")
    mosquito.src = "img/mosquito.png"
    mosquito.className = tamanhosMosquitos() + " " + posicaoMosquitos()
    mosquito.style.left = eixoX + "px"
    mosquito.style.top = eixoY + "px"
    mosquito.style.position = "absolute"
    mosquito.id = "mosquito"
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)  
}

var criarMosquito = setInterval(function(){
    posicaoAleatoria()
}, tempoPorNivel)

function tamanhosMosquitos () {
    var classes = Math.floor(Math.random() * 3)

    switch (classes) {
        case 0:
            return "mosquito1"
        case 1:
            return "mosquito2"
        case 2:
            return "mosquito3"
    }
}

function posicaoMosquitos () {
    var classes = Math.floor(Math.random() * 2)

    switch (classes) {
        case 0:
            return "posicaoA"
        case 1:
            return "posicaoB"
    }
}