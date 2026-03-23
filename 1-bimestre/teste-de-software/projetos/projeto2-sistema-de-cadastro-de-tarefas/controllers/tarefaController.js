const tarefaService = require("../services/tarefaService")

function criar(req, res) {
    const { descricao } = req.body

    const sucesso = tarefaService.cadastrarTarefa(descricao)

    if (!sucesso) {
        return res.status(400).json({ erro: "Descrição obrigatória" })
    }

    return res.status(201).json({ mensagem: "Tarefa cadastrada" })
}

function total(req, res) {
    const total = tarefaService.totalTarefas()
    return res.json({ total })
}

module.exports = {
    criar,
    total
}