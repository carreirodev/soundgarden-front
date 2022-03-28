const inputBanner = document.querySelector('#banner')
const inputAtracoes = document.querySelector('#atracoes')
const inputLotacao = document.querySelector('#lotacao')
const inputDescricao = document.querySelector('#descricao')
const inputNome = document.querySelector('#nome')
const inputData = document.querySelector('#data')
const origem = new URLSearchParams(window.location.search)
const meuId = origem.get('id')
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

window.onload = async () => {
   const resposta = await fetch(`${BASE_URL}/events/${meuId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const respostaFinal = await resposta.json()

    console.log(respostaFinal);

    inputNome.value = respostaFinal.name
    inputBanner.value = respostaFinal.poster
    inputAtracoes.value = respostaFinal.attractions
    inputDescricao.value = respostaFinal.description
    inputLotacao.value = respostaFinal.number_tickets

}
 

