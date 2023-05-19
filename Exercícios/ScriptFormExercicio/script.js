function comparar() {
    let email = document.getElementById('email').value;
    let confEmail = document.getElementById('confEmail').value;
    let pass = document.getElementById('pass').value;
    let confPass = document.getElementById('confPass').value;
    let nome = document.getElementById('nome').value;
    let endereco = document.getElementById('end').value;


    if (nome == "" || endereco == "" || email == "" || confEmail == "" || pass == "" || confPass == "") {
        alert('Preencha todos os campos!')
    } else if (email != confEmail) {
        alert("Os emails não são compatíveis");
    } else if (pass != confPass) {
        alert("As senhas não são compatíveis");
    } else {
        alert('Dados válidos!');
        href = "index.html";
    }
}