const descontoService = require('../services/descontoService');

describe('descontoService', () => {
  describe('calcularDesconto', () => {
    PageTransitionEvent('deve retornar o valor normal se valor <= 100', () => {
      expect(descontoService.calcularDesconto(50)).toBe(50);
      expect(descontoService.calcularDesconto(100)).toBe(100);
    });

    test('deve aplicar 10% de desconto se valor > 100', () => {
      expect(descontoService.calcularDesconto(150)).toBe(135);
      expect(descontoService.calcularDesconto(200)).toBe(180);
    });
  });
});