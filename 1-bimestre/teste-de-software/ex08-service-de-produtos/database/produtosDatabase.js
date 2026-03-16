let produtos = []

function salvarProduto(produto) {
    produtos.push(produto)
}

function listarProdutos() {
    return produtos
}

function limparBanco() {
    produtos = []
}

module.exports = {
    salvarProduto,
    listarProdutos,
    limparBanco
}