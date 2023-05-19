function tela() {
    let nome = document.getElementById('IDnome').value;
    let sobrenome = document.getElementById('IDsobrenome').value;
    let nomeCompl = nome + ' ' + sobrenome;

    alert(' Ola ' + nomeCompl);
}

function calculo() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let operacao = document.getElementById('operacao').value;
    let resultado;
    if (num1 == "" || num2 == "") {
        alert('Preencha todos os campos!')
        } else if (operacao == "+") {
            resultado = parseInt(num1) + parseInt(num2);
            alert(' Resultado= ' + resultado);
        } else if (operacao == "-") {
            resultado = parseInt(num1) - parseInt(num2);
            alert(' Resultado= ' + resultado);
        } else if (operacao == "*") {
            resultado = parseInt(num1) * parseInt(num2);
            alert(' Resultado= ' + resultado);
        } else if (operacao == "/") {
            if (num2 == 0) {
                alert('Não é possível realizar uma divisão por 0');
            } else {
                resultado = parseInt(num1) / parseInt(num2);
                alert(' Resultado= ' + resultado);
            }
        }

}

