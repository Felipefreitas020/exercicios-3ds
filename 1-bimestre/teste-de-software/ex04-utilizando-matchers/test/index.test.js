test('validações básicas com matchers', () => {

    expect(5).toBeGreaterThan(3);
    expect("Teste de Software").toContain("Software");
    expect({ aprovado: true }).toEqual({ aprovado: true });
});