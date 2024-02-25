var container = document.querySelector(".container");

var campoNome = document.querySelector("#nome");
var campoIdade = document.querySelector("#idade");

class Pessoa{

    constructor(){
        this.valor = [];
    }
    create(pessoa){
        this.valor.push(pessoa);
    }

    read(){
        container.innerHTML = ''; 
        function reader(element){
            container.innerHTML += `<div class="box">
                <p class="item">Id: ${element.id}</p> 
                <p class="item">Nome: ${element.nome} </p> 
                <p class="item"> Idade: ${element.idade}</p>
                <button class="deletar" onclick="deletar(${element.id})">Deletar</button>
            </div> `;
        }
        console.log(this.valor);
        this.valor.forEach(reader);
    }

    update(id){

    }

    delete(id){
        this.valor.splice(id, 1);
        pessoa.read();
    }

}

var pessoa = new Pessoa(); 

var id = 0;
function create(){
    pessoa.create({id: id++, nome: campoNome.value, idade: campoIdade.value});
    pessoa.read();
}

function deletar(id){
    pessoa.delete(id);
};

pessoa.read()
