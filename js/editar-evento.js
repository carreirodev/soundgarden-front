const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com/events";
const id = new URLSearchParams(window.location.search).get("id");

let editarnome = document.querySelector("#nome");
let editarposter = document.querySelector("#banner");
let editaratracoes = document.querySelector("#atracoes");
let editardescricao = document.querySelector("#descricao");
let editardata = document.querySelector("#data");
let editarlotacao = document.querySelector("#lotacao");
let form = document.querySelector("form");

var Preenchendo = async () => {
	const resposta = await fetch(`${BASE_URL}/${id}`, { method: "GET" });
	const respostaJSON = await resposta.json();
	editarnome.value = respostaJSON.name;
	editarposter.value = respostaJSON.poster;
	editaratracoes.value = respostaJSON.attractions;
	editardescricao.value = respostaJSON.description;
	editardata.value = respostaJSON.scheduled;
	editarlotacao.value = respostaJSON.number_tickets;
};

Preenchendo();

form.onsubmit = async (atualizar) => {
	atualizar.preventDefault();
	replaceEvento = {
		name: editarnome.value,
		poster: editarposter.value,
		attractions: editaratracoes.value.split(","),
		description: editardescricao.value,
		scheduled: editardata.value,
		number_tickets: editarlotacao.value
	};

	const option = {
		method: "PUT",
		body: JSON.stringify(replaceEvento),
		headers: {
			"Content-Type": "application/json"
		}
	};

	const resposta2 = await fetch(`${BASE_URL}/${id}`, option);

	if (resposta2.status != "200") {
		return alert("Ocorreu um erro. Verifique se todos os dados estão corretos!");
	}

	alert("Dados alterados!");
	return (window.location.href = "admin.html");
};
