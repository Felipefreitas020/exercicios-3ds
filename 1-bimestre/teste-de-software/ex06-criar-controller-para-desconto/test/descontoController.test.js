const descontoController = require('../contoller/descontoController');
const descontoService = require('../services/descontoService');

jest.mock('../services/descontoService');

describe('descontoController', () => {
  describe('aplicarDesconto', () => {
    it('deve retornar valorFinal com desconto aplicado', () => {
      const req = { body: { valor: 150 } };
      const res = { json: jest.fn() };

      descontoService.calcularDesconto.mockReturnValue(135);

      descontoController.aplicarDesconto(req, res);

      expect(descontoService.calcularDesconto).toHaveBeenCalledWith(150);
      expect(res.json).toHaveBeenCalledWith({ valorFinal: 135 });
    });

    test('deve retornar valorFinal sem desconto se valor <= 100', () => {
      const req = { body: { valor: 50 } };
      const res = { json: jest.fn() };

      descontoService.calcularDesconto.mockReturnValue(50);

      descontoController.aplicarDesconto(req, res);

      expect(descontoService.calcularDesconto).toHaveBeenCalledWith(50);
      expect(res.json).toHaveBeenCalledWith({ valorFinal: 50 });
    });
  });
});