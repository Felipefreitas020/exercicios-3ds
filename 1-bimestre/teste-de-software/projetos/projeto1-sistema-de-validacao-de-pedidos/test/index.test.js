const { validarPedido } = require('../index');

test('pedido válido deve retornar true', () => {
    const pedidoValido = {
        cliente: "Carlos",
        total: 150,
        itens: ["Produto A", "Produto B"]
    };

    expect(validarPedido(pedidoValido)).toBe(true);
});

test('pedido com total zero deve retornar false', () => {
    const pedidoInvalido = {
        cliente: "Carlos",
        total: 0,
        itens: ["Produto A", "Produto B"]
    };

    expect(validarPedido(pedidoInvalido)).toBe(false);
});

test('pedido sem cliente deve retornar false', () => {
    const pedidoInvalido = {
        total: 150,
        itens: ["Produto A"]
    };

    expect(validarPedido(pedidoInvalido)).toBe(false);
});

test('pedido com itens vazio deve retornar false', () => {
    const pedidoInvalido = {
        cliente: "Carlos",
        total: 150,
        itens: []
    };

    expect(validarPedido(pedidoInvalido)).toBe(false);
});

