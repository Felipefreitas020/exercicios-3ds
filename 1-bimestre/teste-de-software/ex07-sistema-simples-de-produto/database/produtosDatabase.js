let produtos = []

function adicionarProduto(produto) {
    produtos.push(produto)
}

function listarProdutos() {
    return produtos
}

function limparBanco() {
    produtos = []
}

module.exports = {
    adicionarProduto,
    listarProdutos,
    limparBanco
}