const tarefaService = require("../services/tarefaService")

beforeEach(() => {
    tarefaService.limparBanco()
})

describe("Sistema de tarefas", () => {

    test("Cadastrar tarefa com sucesso", () => {
        const resultado = tarefaService.cadastrarTarefa("Estudar JS")
        expect(resultado).toBe(true)
    })

    test("Não cadastrar sem descrição", () => {
        const resultado = tarefaService.cadastrarTarefa()
        expect(resultado).toBe(false)
    })

    test("Total de tarefas", () => {
        tarefaService.cadastrarTarefa("Tarefa 1")
        tarefaService.cadastrarTarefa("Tarefa 2")

        const total = tarefaService.totalTarefas()
        expect(total).toBe(2)
    })

    test("Banco inicia vazio", () => {
        const total = tarefaService.totalTarefas()
        expect(total).toBe(0)
    })

})