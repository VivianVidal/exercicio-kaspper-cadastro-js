let alunos = [];
let turmas = [];

function mostraFormAluno() {
    document.getElementById("formulario-aluno").style.display = 'block'
    document.getElementById("formulario-turma").style.display = 'none'
    document.getElementById('listagem').innerHTML = ''
}
function mostraFormTurma() {
    document.getElementById("formulario-turma").style.display = 'block'
    document.getElementById("formulario-aluno").style.display = 'none'
    document.getElementById('listagem').innerHTML = ''
}

function cadastrarAluno(){
    let nomeAluno = document.getElementById('nome-aluno').value;
    let idadeAluno = document.getElementById('idade-aluno').value;

    if (nomeAluno && idadeAluno) {
        if (nomeAluno.length > 3) {
            alunos.push({ nomeAluno, idadeAluno });
            alert(`O aluno ${nomeAluno} foi cadastrado!`);
            document.getElementById("nome-aluno").value = '';
            document.getElementById("idade-aluno").value = '';
            document.getElementById('mensagem').innerHTML = '';
        } else {
            alert( 'Insira um nome com mais de 3 caracteres');
        }
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}

function cadastrarTurma() {
    let nomeTurma = document.getElementById('nome-turma').value;
    let salaTurma = document.getElementById('sala-turma').value;
    if (nomeTurma && salaTurma) {
        turmas.push({ nomeTurma, salaTurma })
        alert(`Turma: ${nomeTurma} foi cadastrada !`)
        document.getElementById("nome-turma").value = ''
        document.getElementById("sala-turma").value = ''

    } else {
        alert('Coloque os valores!!')
    }
}

function listarAlunos() {
    let listagemHTML = '<h3>Lista de Alunos</h3><ul>';

    if (alunos.length > 0) {
        alunos.forEach((aluno) => {
            listagemHTML += `<li>Nome: ${aluno.nomeAluno} ----- Idade: ${aluno.idadeAluno}</li>`;
            listagemHTML += '</ul>'
            document.getElementById('listagem').innerHTML = listagemHTML
        })
    } else {
        document.getElementById('listagem').innerHTML = 'Não existem alunos cadastrados'
    }
    document.getElementById("formulario-aluno").style.display = 'none'
    document.getElementById("formulario-turma").style.display = 'none'
}

function listarTurmas() {
    let listagemHTML = '<h3>Lista de Turmas</h3><ul>';
    
    if (turmas.length > 0) {
        turmas.forEach((turma) => {
            listagemHTML += `<li>Nome: ${turma.nomeTurma} ---------- Sala: ${turma.salaTurma}</li>`;
            listagemHTML += '</ul>'
            document.getElementById('listagem').innerHTML = listagemHTML
        })
    } else {
        document.getElementById('listagem').innerHTML = 'Não existem turmas cadastradas'
    }
    document.getElementById("formulario-aluno").style.display = 'none'
    document.getElementById("formulario-turma").style.display = 'none'
}

