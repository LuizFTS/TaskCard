
const abrirFormulario = document.querySelector('#addtask');
const formulario = document.querySelector('.form');
const addTask = document.querySelector('#addtask');
const form = document.querySelector('.formulario__itens');
const formMeio = document.querySelector('.formulario-meio');
const listaFormulario = document.querySelector('#quantidade');
const submitQuantidade = document.querySelector('#submit-quantidade');
const localCartao = document.querySelector('#localcartao');


abrirFormulario.addEventListener('click', (e) => {
    formulario.style.visibility = 'visible';
    formulario.style.opacity = 1;
    formulario.style.zIndex = 100;

    e.preventDefault();
})


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

submitQuantidade.addEventListener('click', quantidadeItem);

function quantidadeItem(e){
    e.preventDefault();
    let formItem, formSubmit, formTitle, labelTitle;

    if(form.childNodes.length > 1){

    } else{
        labelTitle = document.createElement('label');
        labelTitle.textContent = "Digite o título da tarefa: ";
        labelTitle.className = "formulario__itens--title";
        formTitle = document.createElement('input');
        formTitle.type = "text";
        formTitle.className = "formulario__itens--input";
        formTitle.placeholder = `Digite o título`;
        formTitle.required;
        form.appendChild(labelTitle);
        form.appendChild(formTitle);

        for(let i = 1; i <= listaFormulario.value; i++){
            formItem = document.createElement('input');
            formItem.id = `tarefa${i}`;
            formItem.required;
            formItem.className = "formulario__itens--tarefas-input";
            formItem.type = "text";
            formItem.placeholder = `Tarefa ${i}`;
            form.appendChild(formItem);
        }

        if(listaFormulario.value > 1){
            formSubmit = document.createElement('input');
            formSubmit.type = "submit";
            formSubmit.value = "Adicionar tarefas"
            formSubmit.classList.add("btn", "formulario__itens--tarefas-submit");
            formSubmit.id = "submittarefa";
            form.appendChild(formSubmit);
        } else {
            formSubmit = document.createElement('input');
            formSubmit.type = "submit";
            formSubmit.value = "Adicionar tarefa"
            formSubmit.classList.add("btn", "formulario__itens--tarefas-submit");
            formSubmit.id = "submittarefa";
            form.appendChild(formSubmit);
        }
    }
    
    const submitTarefa = document.querySelector('#submittarefa')
    submitTarefa.addEventListener('click', cartaoTarefa = (e)=> {
        e.preventDefault();
        let cartaoPlacer, cartao, tituloCartao, listaCartao, listaCartaoItem;
        listaCartaoItem = [];
        formItem = [];

        cartaoPlacer = document.createElement('div');
        cartaoPlacer.className = "col-1-of-4";

        cartao = document.createElement('div');
        cartao.className = "card";
        
        tituloCartao = document.createElement('h2');
        tituloCartao.textContent = document.querySelector('.formulario__itens--input').value;
        tituloCartao.className = "heading-secondary card-title";
        
        listaCartao = document.createElement('ul');
        listaCartao.className = "card__list";
        
        cartao.appendChild(tituloCartao);
        cartao.appendChild(listaCartao);
        cartaoPlacer.appendChild(cartao);
        
        for(let i = 1; i <= form.childNodes.length-3; i++){
            listaCartaoItem[i] = document.createElement('li');
            listaCartaoItem[i].className = "card__list--item";
            listaCartaoItem[i].id = `tarefa${i}`;
            listaCartao.appendChild(listaCartaoItem[i]);
            formItem[i] = document.querySelector(`#tarefa${[i]}`);
            listaCartaoItem[i].textContent = formItem[i].value;
        }
        
        if(document.querySelector('.formulario__itens--input').value === ''){

        } else {
            localCartao.appendChild(cartaoPlacer);

            formulario.style.zIndex = -1;
            formulario.style.visibility = 'hidden';
            formulario.style.opacity = '0';
        }
    
    })
}
