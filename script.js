let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn");
let main = document.getElementById("areaLista");
let cont = 0;

function addTask(){
    
    let valorInput = input.value; 

    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){

        cont += 1;

        let novoItem = `
            <div id="${cont}" class="item">
                <div id="icone_${cont}" onclick="marcarTask(${cont})" class="item-icone">
                 <i class='bx bx-circle' ></i>
                </div>
                <div onclick="marcarTask(${cont})" class="item-nome">
                    ${valorInput}
                </div>
                <div class="item-botao">
                        <button onclick="deleteTask(${cont})" class="delete">
                            DELETAR
                        </button>
                </div>
            </div>`;

            //add new item main
            main.innerHTML += novoItem;

            //limpar o campo
            input.value = "";
            input.focus();
            
    }else{
        alert("Digite alguma tarefa seu primata");
    }
}

input.addEventListener("keyup", function(event){
    //se teclou enter 13
    if(event.keyCode ===13){
        event.preventDefault();
        btnAdd.click();
    }
})

function deleteTask(id){
    var task = document.getElementById(id);
    task.remove();  
}



function marcarTask(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    
    var icone = document.querySelector(`#icone_${id} i`);
    
    if (classe === "item") {
        item.classList.add('clicado');
        icone.classList.remove('bx-circle');
        icone.classList.add('bxs-checkbox-checked');
    } else {
        item.classList.remove('clicado');
        icone.classList.remove('bxs-checkbox-checked');
        icone.classList.add('bx-circle');
    }
}



