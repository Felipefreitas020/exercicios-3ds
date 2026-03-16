const { adicionarProduto, listarProdutos, limparBanco } = require("../database/produtosDatabase")

beforeEach(() => {
    limparBanco()
})

test("Banco começa vazio", () => {
    const produtos = listarProdutos()
    expect(produtos.length).toBe(0)
})

test("Produto é adicionado", () => {
    adicionarProduto({ nome: "Caneta", quantidade: 50 })

    const produtos = listarProdutos()

    expect(produtos.length).toBe(1)
    expect(produtos[0].nome).toBe("Caneta")
})