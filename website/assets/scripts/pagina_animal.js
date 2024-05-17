const animal = {
    nome: "Rex",
    raca: "Labrador",
    idade: "3 anos",
    peso: "25 kg",
    endereco: "Rua dos Cachorros, 123",
    descricao: "Cachorro amigável e brincalhão.",
    whatsapp: "99564-5735"
};

function imprimeNome() {
    let nome = document.getElementById("nome");
    if (nome) {
        let strHtml = animal.nome ? `<p>${animal.nome}</p>` : `<p><em>Sem nome</em></p>`;
        nome.innerHTML = strHtml;
    }
}

function imprimeRaca() {
    let raca = document.getElementById("raca");
    if (raca) {
        let strHtml = animal.raca ? `<p>${animal.raca}</p>` : `<p><em>Raça não informada</em></p>`;
        raca.innerHTML = strHtml;
    }
}

function imprimeIdade() {
    let idade = document.getElementById("idade");
    if (idade) {
        let strHtml = animal.idade ? `<p>${animal.idade}</p>` : `<p><em>Idade indefinida</em></p>`;
        idade.innerHTML = strHtml;
    }
}

function imprimePeso() {
    let peso = document.getElementById("peso");
    if (peso) {
        let strHtml = animal.peso ? `<p>${animal.peso}</p>` : `<p><em>Peso não informado</em></p>`;
        peso.innerHTML = strHtml;
    }
}

function imprimeEndereco() {
    let endereco = document.getElementById("endereco");
    let strHtml = `<p>${animal.endereco}</p>`;
    endereco.innerHTML = strHtml;
}

function imprimeDescricao() {
    let descricao = document.getElementById("descricao");
    if (descricao) {
        let strHtml = animal.descricao ? `<p>${animal.descricao}</p>` : `<p><em>Descrição não informada</em></p>`;
        descricao.innerHTML = strHtml;
    }
}
//botão personalizavel para cada número de whatsapp
function geraBotao() {
    let btnContato = document.getElementById("btnContato");
    let strHtml = `<a target="_blank" href="https://api.whatsapp.com/send?phone=${animal.whatsapp}&text=Olá estou interessado na adoção do cachorro" class="text-decoration-none"><button type="button" class="d-grid gap-2 d-md-flex border-3 btn btn-outline-success btn-lg mx-auto mt-5">Entre em contato com o doador</button></a>`;
    btnContato.innerHTML = strHtml;
}

window.onload = function () {
    imprimeNome();
    imprimeRaca();
    imprimeIdade();
    imprimePeso();
    imprimeEndereco();
    imprimeDescricao();
    geraBotao();
}
