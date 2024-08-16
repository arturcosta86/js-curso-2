// Altera o conteúdo da tag h1
document.querySelector('h1').textContent = 'Hora do Desafio';

// Função para exibir mensagem no console
function mostrarMensagemConsole() {
    console.log('O botão foi clicado');
}

// Função para exibir alerta
function mostrarAlerta() {
    alert('Eu amo JS');
}

// Função para perguntar o nome de uma cidade
function perguntarCidade() {
    const cidade = prompt('Qual o nome de uma cidade do Brasil?');
    if (cidade) {
        alert(`Estive em ${cidade} e lembrei de você`);
    }
}

// Função para somar dois números
function somarNumeros() {
    const numero1 = parseInt(prompt('Digite o primeiro número inteiro:'));
    const numero2 = parseInt(prompt('Digite o segundo número inteiro:'));
    const soma = numero1 + numero2;
    alert(`A soma é: ${soma}`);
}
