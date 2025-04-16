const timer = document.querySelector("p#timer");
const btn_iniciar = document.querySelector('button#btn_iniciar');
const btn_parar = document.querySelector('button#btn_parar');
const btn_zerar = document.querySelector('button#btn_zerar');
const btn_parciais = document.querySelector('button#btn_parciais');

let tmp_ini = null; // Timestamp inicial
let intervalo = null; // Variável do setInterval
let tempo_pausado = 0; // Tempo acumulado quando pausado

// Função de contagem
const contador = () => {
    const tmp_atual = Date.now();
    const cont = tmp_atual - tmp_ini + tempo_pausado; // Tempo acumulado
    const seg = cont / 1000; // Converter para segundos
    timer.innerHTML = converter(seg); // Atualizar o tempo formatado
};

// Formatar segundos para "HH:MM:SS"
const converter = (seg) => {
    const hora = Math.floor(seg / 3600);
    const resto = seg % 3600;
    const minuto = Math.floor(resto / 60);
    const segundo = Math.floor(resto % 60);
    return `${hora < 10 ? "0" + hora : hora}:${minuto < 10 ? "0" + minuto : minuto}:${segundo < 10 ? "0" + segundo : segundo}`;
};

// Botão "Iniciar"
btn_iniciar.addEventListener("click", () => {
    if (!intervalo) {
        tmp_ini = Date.now();
        intervalo = setInterval(contador, 1000);
    }
});

// Botão "Parar"
btn_parar.addEventListener("click", () => {
    if (intervalo) {
        clearInterval(intervalo);
        intervalo = null; // Pausar o cronômetro
        tempo_pausado += Date.now() - tmp_ini; // Armazenar o tempo acumulado
    }
});

// Botão "Zerar"
btn_zerar.addEventListener("click", () => {
    clearInterval(intervalo);
    intervalo = null;
    tmp_ini = null;
    tempo_pausado = 0;
    timer.innerHTML = "00:00:00"; // Resetar o tempo exibido
});

// Botão "Parciais"
btn_parciais.addEventListener("click", () => {
    const container = document.createElement("div"); // Criar uma nova div
    container.style.color = "#fff"; // Estilo da div parcial
    container.style.marginTop = "10px";

    const tempo_atual = timer.innerHTML;
    container.innerText = `Parcial: ${tempo_atual}`;
    document.querySelector("#relogio").appendChild(container); // Adicionar ao DOM
});
