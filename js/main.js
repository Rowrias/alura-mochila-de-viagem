const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = localStorage.getItem("itens") || [] //pega os itens do localstorage ou cria uma lista itens vazia se já não houver itens

itens.forEach((elemento) => {
    console.log(elemento.nome, elemento.quantidade)
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    // cria um array {"nome":"nome","quantidade":"quantidade"}
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual)    

    // joga o array para a lista [{"nome":"nome","quantidade":"quantidade"}]
    itens.push(itemAtual)

    // transforma o objeto em uma string
    localStorage.setItem("itens", JSON.stringify(itens))

    // limpa o input depois que adiciona o item
    nome.value =""
    quantidade.value =""
})

function criaElemento(item) {
    
    const novoItem = document.createElement('li') // <li> </li>
    novoItem.classList.add("item") // <li class="item"></li>

    const numeroItem = document.createElement('strong') // <strong> </strong>
    numeroItem.innerHTML = item.quantidade // <strong> quantidade </strong>

    novoItem.appendChild(numeroItem) // <li class="item"> <strong> quantidade </strong> </li>
    
    novoItem.innerHTML += item.nome // <li class="item"><strong> quantidade </strong> nome </li>

    lista.appendChild(novoItem) // adiciona o "novoItem" no ultimo lugar da fila da ul id="lista"

}