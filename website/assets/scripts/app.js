function ledados (){

    let strdados = localStorage.getItem('db');
    let objdados = {};

    if (strdados){

        objdados= JSON.parse (strdados);
    }

}

function imprimedados () {

    let tela = document.getElementById('tela');
    let strhtml = '';
    let objdados = ledados ();
}

for (i=0; i < objdados.animal.length; i++){
    strhtml = strhtml + `<p> ${objdados.animal[i].nome} - ${objdados.animal[i].raca} - ${objdados.animal[i].peso} - ${objdados.animal[i].personalidade}  </p>`
    
    tela.innerHTML = strhtml;

}

document.getElementById ('btncarregadados').addEventListener ('click', imprimedados);