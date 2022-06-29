/*function enviar(){
    let nome = local
    var = variavel de escopo global
    const = 
    por Tag: getElementByTagName()
    por Id: getElementById()
    por Nome: getElementsByName()
    por Classe: getElementsByClassName()
    por Seletor: querySelector()
*/

let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')


nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'

    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
    }
}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Máximo 100 caracteres"
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
    }
}

function enviar() {
    if(nome.value == "" || email.value == "" || assunto.value== ""){
        alert("Todos os campos são obrigatórios")
    }else{
        alert(nome.value + ", seu formulário foi enviado!")
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = "600px"
}
function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = "250px"
}