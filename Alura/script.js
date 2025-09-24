// seleciona o body
const body = document.body;

// seleciona os botões
const btnAumentar = document.getElementById('aumentar-fonte');
const btnDiminuir = document.getElementById('diminuir-fonte');

// pega o tamanho atual da fonte do body
let fontSize = 16; // valor inicial em pixels

// função para aplicar tamanho da fonte
function aplicarFonte() {
    body.style.fontSize = fontSize + 'px';
}

// aumentar fonte
btnAumentar.addEventListener('click', () => {
    fontSize += 2; // aumenta 2px
    if (fontSize > 30) fontSize = 30; // limite máximo
    aplicarFonte();
});

// diminuir fonte
btnDiminuir.addEventListener('click', () => {
    fontSize -= 2; // diminui 2px
    if (fontSize < 10) fontSize = 10; // limite mínimo
    aplicarFonte();
});
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // evita o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const marketing = document.getElementById('sim').checked ? "Sim" : "Não";

    const cadastro = { nome, email, telefone, marketing };

    // Pega os cadastros já salvos
    let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

    // Adiciona o novo cadastro
    cadastros.push(cadastro);

    // Salva de volta no localStorage
    localStorage.setItem('cadastros', JSON.stringify(cadastros));

    alert('Cadastro salvo com sucesso!');
    form.reset();
});
