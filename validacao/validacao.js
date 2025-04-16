const f_nome = document.querySelector("#f_nome");
const f_nota = document.querySelector("#f_nota");
const f_msg = document.querySelector("#f_msg");
const form = document.querySelector("#form");

form.addEventListener("submit", (evt) => {
    let msg = null;

    // Validação personalizada para o campo "nota"
    if (f_nota.validity.valueMissing) {
        msg = "Por favor, preencha o campo nota.";
    } else if (f_nota.validity.rangeOverflow) {
        msg = "A nota é muito alta. Digite um valor entre 0 e 10.";
    } else if (f_nota.validity.rangeUnderflow) {
        msg = "A nota é muito baixa. Digite um valor entre 0 e 10.";
    }

    if (msg) {
        f_msg.textContent = msg;
        evt.preventDefault(); // Impede o envio do formulário se houver erros
    } else {
        f_msg.textContent = "Formulário validado com sucesso!";
    }
});
