document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var peso = document.getElementById("peso").value;
    var endereco = document.getElementById("endereco").value;
    var raca = document.getElementById("raca").value;
    var whatsapp = document.getElementById("whatsapp").value;
    var personalidade = document.querySelector('input[name="personalidade"]:checked').value;
    var descricao = document.getElementById("descricao").value;

    //Objeto
    var animal = {
        nome: nome,
        idade: idade,
        peso: peso,
        endereco: endereco,
        raca: raca,
        whatsapp: whatsapp,
        personalidade: personalidade,
        descricao: descricao
    };

    var animalJSON = JSON.stringify(animal);

    localStorage.setItem("animal", animalJSON);

    alert("Cadastro do animal realizado com sucesso!");

// Limpa o formulário
    document.getElementById("form").reset();
});
