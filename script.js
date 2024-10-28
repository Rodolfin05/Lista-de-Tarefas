let novatarefa = document.querySelector('#novatarefa');
let btnaddtarefa = document.querySelector('#btnaddtarefa');
let listatarefas = document.querySelector('#listatarefas');

novatarefa.addEventListener('keypress', (e) => {

    if(e.keyCode == 13) {
        let tarefa = {
            nome: novatarefa.value,
            id: gerarId(),
        }
        adicionarTarefa(tarefa);
    }
});

btnaddtarefa.addEventListener('click', (e) => {

    let tarefa = {
        nome: novatarefa.value,
        id: gerarId(),
    }
    adicionarTarefa(tarefa);
});

function gerarId() {
    return Math.floor(Math.random() * 3000);
}

function adicionarTarefa(tarefa) {
    let li = criarTagLI(tarefa);
    listatarefas.appendChild(li);
    novatarefa.value = '';
}

function criarTagLI(tarefa) {

    let li = document.createElement('li');
    li.id = tarefa.id;

    let span = document.createElement('span');
    span.classList.add('textoTarefa')
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');

    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnacao')
    btnExcluir.innerHTML = '<i class="fi fi-rs-trash-xmark"></i>'
    btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')')

    let btnConcluido = document.createElement('button');
    btnConcluido.classList.add('btnacaoconcluida')
    btnConcluido.innerHTML = '<i class="fi fi-br-check"></i>'
    btnConcluido.setAttribute('onclick', 'concluir(${tarefa.id+})')

    btnConcluido.addEventListener('click', function() {
        btnConcluido.classList.add('verde');
    });

    div.appendChild(btnExcluir);
    div.appendChild(btnConcluido);

    li.appendChild(span);
    li.appendChild(div);
    return li;
}


function excluir(idTarefa) {
    let confirmacao = window.confirm('Tem certeza que deseja excluir?');
    if(confirmacao) {
        let li = document.getElementById('' + idTarefa + '');
        if(li) {
            listatarefas.removeChild(li);
        }
    }
}