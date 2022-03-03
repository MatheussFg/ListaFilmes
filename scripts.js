// SELECIONANDO A LISTA (UL) DOM MEU HTML
const listaFilme = document.querySelector(".listaFilme")


//DECLARANDO FUNÇÃO LISTAR OS FILMES
function listarFilmes(colecaoFilmes) {

    //LIMPAR VITRINE HTML
    listaFilme.innerHTML = ""

    //ACESSANDO A COLEÇÃO DE FILMES(ARRAY) -> PASSANDO PARA FUNÇÃO TEMPLATE
    colecaoFilmes.forEach(function(filme) {

        // PASSANDO CADA UM DOS FILMES => PARA CRIAR O TEMPLATE PARA CADA FILME
        const template = criarTemplate(filme)

        //ADICIONANDO O FILME DE FORMA VISUAL NO HTML
        listaFilme.appendChild(template)

    })
}

//CHAMANDO PARA EXECUTAR OS PASSOS
listarFilmes(filmes)

//FUNÇÃO QUE CRIA O TEMPLATE (LI)
function criarTemplate(filme) {
    //1 - FILME **
    // NOME  **
    // IMAGEM **
    //2 - CRIAR UM LI ***
    //3 - RETORNAR ESSE TEMPLATE COM O FILME

    //CRIANDO UM TEMPLATE DO TIPO HTML
    const li = document.createElement("li")

    //ADICIONANDO UMA ESTRUTURA HTML PRA DENTRO DO (LI)
    li.innerHTML = `
        <figure>
            <img src="${filme.url}" alt="${filme.nome}" />
        </figure>
        <h2>${filme.nome}</h2>
    `

    return li
}

//Criando agora o filtro das categorias dos filmes

//FILTRAR FILME POR CATEGORIA
function filtrarFilme(filtroCategoria) {
    //LOOP PARA FILTRAR OS FILMES
    const filmesFiltrados = filmes.filter(function(filme) {

        //console.log(filme.categoria)
        //console.log(filtroCategoria)

        //SE A CATEGORIA BUSCADA FOR === A DO FILME ATUAL MOSTRE O FILME/ OU RETORNE
        if (filtroCategoria == filme.categoria) {
            //SE O FILME FOR VERDADEIRO RETORNE O FILME
            return filme
        }

    })


    listarFilmes(filmesFiltrados)

}

//SELECIONANDO MENU
const secaoCategorias = document.querySelector(".secaoCategorias")

//ADICIONANDO UM INTERCEPTADOR DE EVENTO
secaoCategorias.addEventListener("click", function(event) {

    //CANCELAR EVENTO DO LINK => NÃO RECARREGAR A TELA
    event.preventDefault()

    //ONDE FOI CLICADO
    const catecoriaSelecionada = event.target.text
    if (catecoriaSelecionada == "Mostrar todos") {
        console.log("Mostre todas")
        listarFilmes(filmes)
    } else {
        console.log("Filtre por " + catecoriaSelecionada)
        filtrarFilme(catecoriaSelecionada)
    }
})