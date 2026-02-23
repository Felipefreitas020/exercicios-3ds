const { calcularQuadrado } = require('./index');

test('deve retornar 25 quando o valor for 5', () => {
    const resultado = calcularQuadrado(5);
    expect(resultado).toBe(25);
})


