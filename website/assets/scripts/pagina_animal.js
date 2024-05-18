
// retorna o valor cadastrado em forma de objeto que será lido por todas as funções
function carregarAnimal() {
    var animalJSON = localStorage.getItem("animal");
    return animalJSON ? JSON.parse(animalJSON) : {};
}


//funções que irão imprimir nas divs respectivas à suas informações e valores
function imprimeNome(animal) {
    let nome = document.getElementById("nome");
    if (nome) {
        let strHtml = animal.nome ? `<p>${animal.nome}</p>` : `<p><em>Sem nome</em></p>`;
        nome.innerHTML = strHtml;
    }
}
function imprimeRaca(animal) {
    let raca = document.getElementById("raca");
    if (raca) {
        let strHtml = animal.raca ? `<p>${animal.raca}</p>` : `<p><em>Raça não informada</em></p>`;
        raca.innerHTML = strHtml;
    }
}
function imprimeIdade(animal) {
    let idade = document.getElementById("idade");
    if (idade) {
        let strHtml = animal.idade ? `<p>${animal.idade}</p>` : `<p><em>Idade indefinida</em></p>`;
        idade.innerHTML = strHtml;
    }
}
function imprimePeso(animal) {
    let peso = document.getElementById("peso");
    if (peso) {
        let strHtml = animal.peso ? `<p>${animal.peso}</p>` : `<p><em>Peso não informado</em></p>`;
        peso.innerHTML = strHtml;
    }
}
function imprimeEndereco(animal) {
    let endereco = document.getElementById("endereco");
    let strHtml = `<p>${animal.endereco}</p>`;
    endereco.innerHTML = strHtml;
}
function imprimeDescricao(animal) {
    let descricao = document.getElementById("descricao");
    if (descricao) {
        let strHtml = animal.descricao ? `<p>${animal.descricao}</p>` : `<p><em>Descrição não informada</em></p>`;
        descricao.innerHTML = strHtml;
    }
}

// botao personalizado de acordo com o whatsapp informado no cadastro
function geraBotao(animal) {
    let btnContato = document.getElementById("btnContato");
    let strHtml = `<a target="_blank" href="https://api.whatsapp.com/send?phone=${animal.whatsapp}&text=Olá estou interessado na adoção do cachorro" class="text-decoration-none"><button type="button" class="d-grid gap-2 d-md-flex border-3 btn btn-outline-success btn-lg mx-auto mt-5">Entre em contato com o doador</button></a>`;
    btnContato.innerHTML = strHtml;
}


// chamar todas as funções quando a página for carregada
window.onload = function () {
    var animal = carregarAnimal();
    imprimeNome(animal);
    imprimeRaca(animal);
    imprimeIdade(animal);
    imprimePeso(animal);
    imprimeEndereco(animal);
    imprimeDescricao(animal);
    geraBotao(animal);
}