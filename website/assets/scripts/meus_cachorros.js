function ledados() {
    let strdados = localStorage.getItem('db');
    let objdados = { animais: [] }; // Inicializa objdados com um array vazio

    if (strdados) {
        objdados = JSON.parse(strdados);
    }

    return objdados;
}

function salvardados(objdados) {
    localStorage.setItem('db', JSON.stringify(objdados));
}

function excluirAnimal(index) {
    let objdados = ledados();
    objdados.animais.splice(index, 1); // Remove o animal do array
    salvardados(objdados); // Salva o array atualizado no localStorage
    imprimedados(); // Atualiza a interface
}


function imprimedados() {
    let tela = document.getElementById('tela');
    let strhtml = '';
    let objdados = ledados();

    if (objdados.animais && objdados.animais.length > 0) {
        for (let i = 0; i < objdados.animais.length; i++) {
            strhtml += `
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="assets/imgs/dog1.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${objdados.animais[i].nome}</h5>
                        <p class="card-text">Raça: ${objdados.animais[i].raca} <br> Peso: ${objdados.animais[i].peso} <br> Personalidade: ${objdados.animais[i].personalidade}</p>
                    </div>
                    <div class="card-body">
                        <a href="#" class="card-link text-warning" onclick="editarAnimal(${i})"><p><b>Editar Informações</b></p></a>
                        <a href="#" class="card-link text-danger" onclick="excluirAnimal(${i})"><p><b>Excluir (caso foi adotado)</b></p></a>
                    </div>
                </div>
            </div>`;
        }
    } else {
        strhtml = '<p class="m-5"><b>Nenhum animal cadastrado.</b></p>';
    }

    tela.innerHTML = strhtml;
}

document.getElementById('btncarregadados').addEventListener('click', imprimedados);
