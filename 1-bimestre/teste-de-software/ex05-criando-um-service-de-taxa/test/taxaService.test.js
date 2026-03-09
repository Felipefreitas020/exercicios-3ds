const taxaService = require('../taxaService')

describe('taxaService', () => {
  let service

  beforeEach(() => {
    service = taxaService
  })

  test('deve retornar 0 quando o valor for igual ou menor que 500', () => {
    expect(service.calcularTaxa(500)).toBe(0)
    expect(service.calcularTaxa(100)).toBe(0)
  })

  test('deve retornar 5% quando o valor for maior que 500', () => {
    expect(service.calcularTaxa(600)).toBe(30)
    expect(service.calcularTaxa(1000)).toBe(50)
  })
})
