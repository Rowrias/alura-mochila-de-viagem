const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade) {

    
    const novoItem = document.createElement('li')
    novoItem.classList.add("item") // <li class="item"></li>

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade // <strong> quantidade </strong>

    novoItem.appendChild(numeroItem) // <li class="item"> <strong> quantidade </strong> </li>

    novoItem.innerHTML += nome // <li class="item"><strong> quantidade </strong> nome </li>

    lista.appendChild(novoItem) // adiciona o "novoItem" no ultimo lugar da fila da ul id="lista"

}