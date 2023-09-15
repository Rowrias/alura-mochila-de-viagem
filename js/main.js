const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = []

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)

    // limpa o input depois que adiciona o item
    nome.value =""
    quantidade.value =""
})

function criaElemento(nome, quantidade) {

    
    const novoItem = document.createElement('li') // <li> </li>
    novoItem.classList.add("item") // <li class="item"></li>

    const numeroItem = document.createElement('strong') // <strong> </strong>
    numeroItem.innerHTML = quantidade // <strong> quantidade </strong>

    novoItem.appendChild(numeroItem) // <li class="item"> <strong> quantidade </strong> </li>

    novoItem.innerHTML += nome // <li class="item"><strong> quantidade </strong> nome </li>

    lista.appendChild(novoItem) // adiciona o "novoItem" no ultimo lugar da fila da ul id="lista"


    // cria um array {"nome":"nome","quantidade":"quantidade"}
    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    // joga o array para a lista [{"nome":"nome","quantidade":"quantidade"}]
    itens.push(itemAtual)

    // transforma o objeto em uma string
    // localStorage.setItem("item", JSON.stringify(itens))
}