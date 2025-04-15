let tarefas = new Array()
let datasConclusao = new Array()


function fnSalvarTarefa(){
    
    let novaTarefa = document.getElementById("tarefa").value
    tarefas.push(novaTarefa)
    document.getElementById("tarefa").value=""

    let novaDataConclusao = document.getElementById("conclusao").value
    datasConclusao.push(novaDataConclusao)
    document.getElementById("conclusao").value = ""
}


function fnExibirTarefa(){
let listaDeTarefas = ""
for(let i=0; i < tarefas.lenght ; i++){
    listaDeTarefas += "<li>" + tarefas[i] + " - " + datasConclusao[i] + "</li>"

    }
    document.getElementById("lista-tarefas").innerHTML = listaDeTarefas
}
let frutas = ['🍓', '🍊', '🍌', '🍉', '🍎', '🍒']

for(let i=0; i < frutas.length ; i++){
    console.log(frutas[i])
    console.log(i)
}

