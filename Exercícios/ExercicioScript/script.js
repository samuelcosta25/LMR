function tela() {
    let nome = document.getElementById('IDnome').value;
    let sobrenome = document.getElementById('IDsobrenome').value;
    let nomeCompl = nome + ' ' + sobrenome;

    alert(' Ola ' + nomeCompl);
}