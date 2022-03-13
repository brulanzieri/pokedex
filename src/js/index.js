/* quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão do correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartão pokémon 

precisamos criar 2 variáveis no JS para trabalhar com os elementos da tela

precisamos trabalhar com um evento de clique feito pelo usuário na listagem de pokémon

- remover a classe aberto do cartão atual
- ao clicar em pokémon da listagem, pegamos o id desse pokémon para saber qual cartão mostrar
- remover a classe ativo que marca o pokémon selecionado
- adicionar a classe ativo no item selecionado da lista
- adicionar a classe aberto no cartão novo */

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () =>{
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})