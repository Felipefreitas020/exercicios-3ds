const { validarPedido } = require('../index');

test('Pedido válido deve retornar true', () => {
    const pedidoValido = {
        cliente: "Carlos",
        total: 150,
        itens: ["Produto A", "Produto B"]
    };

    expect(validarPedido(pedidoValido)).toBe(true);
});

test('Pedido com total 0 deve retornar false', () => {
    const pedidoInvalido = {
        cliente: "Carlos",
        total: 0,
        itens: ["Produto A", "Produto B"]
    };

    expect(validarPedido(pedidoInvalido)).toBe(false);
});

test('Pedido sem cliente deve retornar false', () => {
    const pedidoInvalido = {
        total: 150,
        itens: ["Produto A"]
    };

    expect(validarPedido(pedidoInvalido)).toBe(false);
});

test('Pedido sem itens deve retornar false', () => {
    const pedidoInvalido = {
        cliente: "Carlos",
        total: 150,
        itens: []
    };

    expect(validarPedido(pedidoInvalido)).toBe(false);
});

