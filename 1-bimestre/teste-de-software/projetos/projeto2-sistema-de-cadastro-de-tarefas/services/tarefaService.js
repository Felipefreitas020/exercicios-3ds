const database = require("../database/tarefaDatabase")

function cadastrarTarefa(descricao) {
    if (!descricao) {
        return false
    }
    database.salvar({descricao})
    return true

}
function totalTarefas() {
    return database.listarTarefas().length
}
function limparBanco() {
    database.limpar()
}

module.exports = {
    cadastrarTarefa,
    totalTarefas,
    limparBanco
}
