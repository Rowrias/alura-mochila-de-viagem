const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || [] //pega os itens do localstorage ou cria uma lista itens vazia se já não houver itens


// Uso do forEach para que todos os itens já escritos na lista sejam mantidos ao atualizar a página 
itens.forEach((elemento) => { 
    console.log(elemento.nome, elemento.quantidade)
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const existe = itens.find(elemento => elemento.nome === nome.value)
    
    // cria um array {"nome":"nome","quantidade":"quantidade"}
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }
    
     // verifica se já existe o elemento criado
    if (existe) {
        itemAtual.id = existe.id

        atualizaElemento()

    } else {
        itemAtual.id = existe.length

        criaElemento(itemAtual)    

        // joga o array para a lista [{"nome":"nome","quantidade":"quantidade"}]
        itens.push(itemAtual)
    }

    

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
    numeroItem.dataset.id = item.id

    novoItem.appendChild(numeroItem) // <li class="item"> <strong> quantidade </strong> </li>
    
    novoItem.innerHTML += item.nome // <li class="item"><strong> quantidade </strong> nome </li>

    lista.appendChild(novoItem) // adiciona o "novoItem" no ultimo lugar da fila da ul id="lista"

}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']")
}