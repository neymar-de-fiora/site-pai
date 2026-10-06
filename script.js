const fotos = [
    "fotos pai/og-foto.jpeg",
    "fotos pai/exame-fezes.jpeg",
    "fotos pai/foto-natal.jpeg",
    "fotos pai/menores.jpeg",
    "fotos pai/esbanjando-paternidade.jpeg",
     "fotos pai/tia.jpeg",
     "fotos pai/jean.jpeg"
];

let fotoAtual = 0;

const imagem = document.getElementById("imagemCarrossel");
const indicadores = document.getElementById("indicadores");

function mostrarFoto() {
    imagem.src = fotos[fotoAtual];

    // Atualiza as bolinhas
    indicadores.innerHTML = "";

    fotos.forEach((foto, indice) => {
        const bolinha = document.createElement("span");

        if (indice === fotoAtual) {
            bolinha.classList.add("ativo");
        }

        bolinha.onclick = function () {
            fotoAtual = indice;
            mostrarFoto();
        };

        indicadores.appendChild(bolinha);
    });
}

function proximaFoto() {
    fotoAtual++;

    if (fotoAtual >= fotos.length) {
        fotoAtual = 0;
    }

    mostrarFoto();
}

function fotoAnterior() {
    fotoAtual--;

    if (fotoAtual < 0) {
        fotoAtual = fotos.length - 1;
    }

    mostrarFoto();
}

mostrarFoto();

const fotosPalmeiras = [
    "fotos pai/palmeiras.jpeg",
    "fotos pai/flamengo.jpeg",
     "fotos pai/campeao.jpeg",
    "fotos pai/12x.jpeg"
];

let fotoPalmeirasAtual = 0;

const imagemPalmeiras = document.getElementById("imagemPalmeiras");
const indicadoresPalmeiras = document.getElementById("indicadoresPalmeiras");

function mostrarFotoPalmeiras() {
    imagemPalmeiras.src = fotosPalmeiras[fotoPalmeirasAtual];

    indicadoresPalmeiras.innerHTML = "";

    fotosPalmeiras.forEach((foto, indice) => {
        const bolinha = document.createElement("span");

        if (indice === fotoPalmeirasAtual) {
            bolinha.classList.add("ativo");
        }

        bolinha.onclick = function () {
            fotoPalmeirasAtual = indice;
            mostrarFotoPalmeiras();
        };

        indicadoresPalmeiras.appendChild(bolinha);
    });
}

function fotoPalmeirasProxima() {
    fotoPalmeirasAtual++;

    if (fotoPalmeirasAtual >= fotosPalmeiras.length) {
        fotoPalmeirasAtual = 0;
    }

    mostrarFotoPalmeiras();
}

function fotoPalmeirasAnterior() {
    fotoPalmeirasAtual--;

    if (fotoPalmeirasAtual < 0) {
        fotoPalmeirasAtual = fotosPalmeiras.length - 1;
    }

    mostrarFotoPalmeiras();
}

mostrarFotoPalmeiras();

// ==========================
// PEGADINHA PALMEIRAS
// ==========================

const botaoSim = document.getElementById("botaoSim");
const botaoNao = document.getElementById("botaoNao");
const respostaPalmeiras = document.getElementById("respostaPalmeiras");
const confetes = document.getElementById("confetes");

let cliquesSim = 0;
let cliquesNao = 0;


// BOTÃO NÃO

botaoNao.addEventListener("click", function () {

    cliquesNao++;

    if (cliquesNao === 1) {

        respostaPalmeiras.textContent = "Tem certeza? 🤨";

    } else if (cliquesNao === 2) {

        respostaPalmeiras.textContent =
            "Seu pai não criou você pra isso. 😐";

    } else {

        respostaPalmeiras.textContent =
            "ENTÃO VAI SE FUDER! 🤬💚";

    }

});


// BOTÃO SIM

botaoSim.addEventListener("click", function () {

    cliquesSim++;

    if (cliquesSim < 5) {

        botaoSim.style.position = "fixed";

        const x = Math.random() *
            (window.innerWidth - botaoSim.offsetWidth);

        const y = Math.random() *
            (window.innerHeight - botaoSim.offsetHeight);

        botaoSim.style.left = x + "px";
        botaoSim.style.top = y + "px";

    } else {

        botaoSim.style.position = "static";

        respostaPalmeiras.textContent =
            "AÍ SIM! 💚🐷 Sabia que você não ia decepcionar seu pai!";

        soltarConfetes();

    }

});


// CONFETES

function soltarConfetes() {

    for (let i = 0; i < 100; i++) {

        const confete = document.createElement("div");

        confete.classList.add("confete");

        confete.style.left = Math.random() * 100 + "vw";

        confete.style.background =
            Math.random() > 0.5
                ? "#006437"
                : "#ffffff";

        confete.style.animationDelay =
            Math.random() * 1.5 + "s";

        confetes.appendChild(confete);

        setTimeout(function () {
            confete.remove();
        }, 4500);

    }

}
