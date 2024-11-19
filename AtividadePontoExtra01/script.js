
function verificarMaiorIdade(idade) {
    if (idade >= 18) {
      return "Maior de idade";
    } else {
      return "Menor de idade";
    }
  }
  
  document.getElementById('idadeForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const idade = parseInt(document.getElementById('idade').value);
  
    const resultado = verificarMaiorIdade(idade);
    document.getElementById('resultado').textContent = resultado;
  });
  