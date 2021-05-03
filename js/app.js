const abrirForm = document.querySelector('#addtask');
const fecharForm = document.querySelector('.form__body--close');
const formulario = document.querySelector('.form');
const addTask = document.querySelector('#addtask');
const form = document.querySelector('.formulario__itens');
const formMeio = document.querySelector('.formulario-meio');
const listaFormulario = document.querySelector('#quantidade');
const submitQuantidade = document.querySelector('#submit-quantidade');

let localCartao = [];
localCartao.push(document.querySelector('#localcartao'))

abrirForm.addEventListener('click', abrirFormulario);
fecharForm.addEventListener('click', fecharFomulario);
submitQuantidade.addEventListener('click', quantidadeItem);


let itemFormulario
for(let i = 1; i <= 10; i++){
    itemFormulario = document.createElement('option');
    itemFormulario.value = i;
    itemFormulario.textContent = i;
    itemFormulario.className = `item-formulario item-formulario-${i}`;
    listaFormulario.appendChild(itemFormulario);
};
itemFormulario = [];
for(let i=1; i <= 10; i++){
    let item = document.querySelector(`.item-formulario-${i}`);
    itemFormulario.push(item);
};



// Load from storage
document.addEventListener('DOMContentLoaded', pegarTarefasLocalStorage);