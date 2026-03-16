const { cadastrarProduto } = require("../services/produtoService")
const { listarProdutos, limparBanco } = require("../database/produtosDatabase")

beforeEach(() => {
    limparBanco()
})

test("Produto cadastrado", () => {
    const resultado = cadastrarProduto({ nome: "PlayStation 5", preco: 4500 })

    const produtos = listarProdutos()

    expect(resultado).toBe(true)
    expect(produtos.length).toBe(1)
})

test("Produto sem nome", () => {
    const resultado = cadastrarProduto({ preco: 3000 })

    const produtos = listarProdutos()

    expect(resultado).toBe(false)
    expect(produtos.length).toBe(0)
})