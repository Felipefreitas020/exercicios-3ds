const descontoService = require('../services/descontoService');

const descontoController = {
  aplicarDesconto(req, res) {
    const { valor } = req.body;
    const valorFinal = descontoService.calcularDesconto(valor);
    res.json({ valorFinal });
  },
};

module.exports = descontoController;