const Banco = require("../src/banco");

describe("Testes da classe Banco", () => {
  let conta;

beforeEach(() => {
  conta = new Banco('yuri', 10);
  contaDestino = new Banco('mateus', 1000);
});

  test("dpeosito de 20tao", async () => {
    expect(conta.depositar(20)).toBe(30);
  });

  test("saque de 5cao", async () => {
    expect(conta.sacar(5)).toBe(5);
  });
  
  test("tranferir 100zao", async () => {
    conta.transferir(10, contaDestino);
    conta.obterSaldo();
    contaDestino.obterSaldo();
  });
  
  test("ver historico", async () => {
    conta.obterHistorico();
  });
  
  test("Definir limite de saque", async () => {
    conta.definirLimiteDeSaque(100);
  });
  
  test("ver limite de saque", async () => {
    conta.definirLimiteDeSaque(100);
  });
  
  test("Definir juros", async () => {
    conta.aplicarJuros(10);
  });
  
  test("Pagar conta", async () => {
    conta.pagarConta(8000, 'do job');
  });
  
  test("Ver total depositado", async () => {
    conta.obterTotalDepositado();
  });''







});
