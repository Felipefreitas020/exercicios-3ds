let tarefas = []

function salvar(tarefa) {
    tarefas.push(tarefa)
}

function listarTarefas() {
    return tarefas
}

function limpar() {
    tarefas = []
}

module.exports = {
    salvar,
    listarTarefas,
    limpar
}
