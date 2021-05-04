let formItem, formSubmitPlace, formSubmit,formResetButton, formTitle, labelTitle, submitTarefa, cardBtnEdit, cardBtnClose;

function quantidadeItem(e){
    e.preventDefault();
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

        formItem = [];

        for(let i = 1; i <= listaFormulario.value; i++){
            formItem[i] = document.createElement('input');
            formItem[i].id = `tarefa${i}`;
            formItem[i].required;
            formItem[i].className = "formulario__itens--input";
            formItem[i].type = "text";
            formItem[i].placeholder = `Tarefa ${i}`;
            form.appendChild(formItem[i]);
        }

        if(listaFormulario.value > 1){  
            formSubmitPlace = document.createElement('div');
            formSubmitPlace.className = "formulario__itens--buttons";
            form.appendChild(formSubmitPlace);
            
            formResetButton = document.createElement('input');
            formResetButton.type = "button";
            formResetButton.value = "Reset";
            formResetButton.classList.add("btn", "formulario__itens--buttons-reset");
            formSubmitPlace.appendChild(formResetButton);

            formResetButton.addEventListener('click', formReset);

            formSubmit = document.createElement('input');
            formSubmit.type = "submit";
            formSubmit.value = "Adicionar tarefas"
            formSubmit.classList.add("btn", "formulario__itens--buttons-submit");
            formSubmit.id = "submittarefa";
            formSubmitPlace.appendChild(formSubmit);

        } else {
            formSubmitPlace = document.createElement('div');
            formSubmitPlace.className = "formulario__itens--buttons";
            form.appendChild(formSubmitPlace);
            
            formResetButton = document.createElement('input');
            formResetButton.type = "button";
            formResetButton.value = "Reset";
            formResetButton.classList.add("btn", "formulario__itens--buttons-reset");
            formSubmitPlace.appendChild(formResetButton);

            formResetButton.addEventListener('click', formReset);

            formSubmit = document.createElement('input');
            formSubmit.type = "submit";
            formSubmit.value = "Adicionar tarefa"
            formSubmit.classList.add("btn", "formulario__itens--buttons-submit");
            formSubmit.id = "submittarefa";
            formSubmitPlace.appendChild(formSubmit);
        }

        submitTarefa = document.querySelector('#submittarefa').addEventListener('click', AdicionarCartaoTarefa);
    }
    
}

function formReset(){
    let i = 0;
    while(i < form.childNodes.length){
        form.childNodes[i].remove();
        if(form.childNodes[i]){
        
        } else 
        i++;
    }
}

let cartaoPlacer, cartao, tituloCartao, listaCartao, listaCartaoItem, createNewRow, numberOfRow, idCartao;

idCartao = 1;

function AdicionarCartaoTarefa(e){

    e.preventDefault();
    listaCartaoItem = [];
    formItem = [];
    numberOfRow = localCartao[0].parentElement.children.length - 2;

    

    if(localCartao[numberOfRow].children.length === 0){
        
        createCard(idCartao);
        idCartao += 1;
    }else if(localCartao[numberOfRow].children.length % 4 && localCartao[numberOfRow].children.length < 4){
        
        createCard(idCartao);
        idCartao += 1;
    } else if(localCartao[numberOfRow].children.length === 4){
        numberOfRow += 1;
        createNewRow = document.createElement('div');
        createNewRow.className = `row row${numberOfRow + 1}`;
        createNewRow.id = `localcartao${numberOfRow}`;
        localCartao[0].parentElement.appendChild(createNewRow);
        localCartao.push(document.querySelector(`#localcartao${numberOfRow}`));
        createCard(idCartao);
        idCartao += 1;
    } else if(localCartao[numberOfRow].children.length % 4 && localCartao[numberOfRow].children.length > 5 && localCartao[numberOfRow].children.length <=8) {
        
        createCard(idCartao);
        idCartao += 1;
    } else {
        
    }
    
}

function fecharFomulario(){
    formulario.style.zIndex = -1;
    formulario.style.visibility = 'hidden';
    formulario.style.opacity = '0';
    formReset();
}

function abrirFormulario(){
    formulario.style.visibility = 'visible';
    formulario.style.opacity = 1;
    formulario.style.zIndex = 100;

    
    
    // e.preventDefault();
}

let removeCardBtn, editCartaoBtn;
function createCard(numero) {
    let cardButtons, cardBtnIconEdit, cardBtnIconClose;

    cartaoPlacer = document.createElement('div');
    cartaoPlacer.className = `col-1-of-4`;
    cartaoPlacer.id = `cartao${numero}`;
    

    cartao = document.createElement('div');
    cartao.className = "card";
    
    cardButtons = document.createElement('div');
    cardButtons.className = "card__buttons";

    cardBtnEdit = document.createElement('a');
    cardBtnEdit.href = "#";
    cardBtnEdit.className = "card__buttons--edit";

    cardBtnClose = document.createElement('a');
    cardBtnClose.href = "#";
    cardBtnClose.className = "card__buttons--close";

    cardBtnIconEdit = document.createElement('i');
    cardBtnIconEdit.className = "far fa-edit";

    cardBtnIconClose = document.createElement('i');
    cardBtnIconClose.className = "fas fa-times";

    cardBtnEdit.appendChild(cardBtnIconEdit);
    cardBtnClose.appendChild(cardBtnIconClose);
    cardButtons.appendChild(cardBtnEdit);
    cardButtons.appendChild(cardBtnClose);


    tituloCartao = document.createElement('h2');
    tituloCartao.textContent = document.querySelector('.formulario__itens--input').value;
    tituloCartao.className = "heading-secondary card-title";
    
    listaCartao = document.createElement('ul');
    listaCartao.className = "card__list";
    
    cartao.appendChild(cardButtons);
    cartao.appendChild(tituloCartao);
    cartao.appendChild(listaCartao);
    cartaoPlacer.appendChild(cartao);

    itens = [];
    for(let i = 1; i <= form.childNodes.length-3; i++){
        listaCartaoItem[i] = document.createElement('li');
        listaCartaoItem[i].className = "card__list--item";
        listaCartaoItem[i].id = `tarefa${i}`;
        listaCartao.appendChild(listaCartaoItem[i]);
        formItem[i] = document.querySelector(`#tarefa${[i]}`);
        listaCartaoItem[i].textContent = formItem[i].value;
    }
    

    if(document.querySelector('.formulario__itens--input').value === ''){
        // Se o título das tarefas no formulário não estiver preenchido
    } else {

        localCartao[numberOfRow].appendChild(cartaoPlacer);

        removeCardBtn = document.querySelector(`#cartao${numero}`).childNodes[0].children[0].children[1];
        removeCardBtn.addEventListener('click', removerCartao);
        editCartaoBtn = document.querySelector(`#cartao${numero}`).childNodes[0].children[0].children[0];
        editCartaoBtn.addEventListener('click', editarCartao);

        fecharFomulario();
    }
    
}
function removerCartao(e){
    // Confirmar?

    e.target.parentElement.parentElement.parentElement.parentElement.remove();

}



function editarCartao(e){
    e.preventDefault();
    abrirFormulario();
    let cartaoId = e.target.parentElement.parentElement.parentElement.parentElement.id;
    
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
        formTitle.value = e.target.parentElement.parentElement.parentElement.children[1].textContent;
        form.appendChild(labelTitle);
        form.appendChild(formTitle);
        formItem = [];
        for(let i = 1; i <= e.target.parentElement.parentElement.parentElement.children[2].children.length; i++){
            formItem[i] = document.createElement('input');
            formItem[i].id = `tarefa${i}`;
            formItem[i].required;
            formItem[i].className = "formulario__itens--input";
            formItem[i].type = "text";
            formItem[i].placeholder = `Tarefa ${i}`;
            formItem[i].value = e.target.parentElement.parentElement.parentElement.children[2].children[i - 1].textContent;
            form.appendChild(formItem[i]);
        }


        if(listaFormulario.value > 1){  
            formSubmitPlace = document.createElement('div');
            formSubmitPlace.className = "formulario__itens--buttons";
            form.appendChild(formSubmitPlace);


            formSubmit = document.createElement('input');
            formSubmit.type = "submit";
            formSubmit.value = "Alterar tarefas"
            formSubmit.classList.add("btn", "formulario__itens--buttons-submit");
            formSubmit.id = "submittarefa";
            formSubmitPlace.appendChild(formSubmit);

        } else {
            formSubmitPlace = document.createElement('div');
            formSubmitPlace.className = "formulario__itens--buttons";
            form.appendChild(formSubmitPlace);
            

            formSubmit = document.createElement('input');
            formSubmit.type = "submit";
            formSubmit.value = "Alterar tarefa"
            formSubmit.classList.add("btn", "formulario__itens--buttons-submit");
            formSubmit.id = "submittarefa";
            formSubmitPlace.appendChild(formSubmit);
        }

        submitTarefa = document.querySelector('#submittarefa').addEventListener('click', function(){
            alterarCartaoHtml(e, cartaoId);
        });
    }
}

function alterarCartaoHtml(e, id){
    e.preventDefault();
    let cardChange = document.querySelector(`#${id}`);
    cardChange.children[0].children[1].textContent = formTitle.value;

    for(let i = 0; i < cardChange.children[0].children[2].children.length; i++){
        cardChange.children[0].children[2].children[i].textContent = formItem[i + 1].value;
    }
    formReset();
    fecharFomulario();
}