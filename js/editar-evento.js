const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com/events";
let id = window.location.href.split("=")[1];
let editarnome = document.querySelector("#nome");
let editarbanner = document.querySelector("#banner");
let editaratracoes = document.querySelector("#atracoes");
let editardescricao = document.querySelector("#descricao");
let editardata = document.querySelector("#data");
let editarlotacao = document.querySelector("#lotacao");
let form = document.querySelector("form");

// const data = document.querySelector("#data");
// data.setAttribute("value", "2022-03-27T01:00");
// data.setAttribute("min", "2022-03-27T01:00");
// data.setAttribute("max", "2025-12-30T00:00");
// data.setAttribute("type", "datetime-local");

var Recebendo = async () => {
	const resposta = await fetch(`${BASE_URL}/${id}`, { method: "GET" });
	const respostaJSON = await resposta.json();
	editarnome.value = respostaJSON.name;
	editarbanner.value = respostaJSON.banner;
	editaratracoes.value = respostaJSON.attractions;
	editardescricao.value = respostaJSON.description;
	editardata.value = respostaJSON.scheduled;
	editarlotacao.value = respostaJSON.number_tickets;
};

Recebendo();

form.onsubmit = async (atualizar) => {
	atualizar.preventDefault();
	replaceEvento = {
		name: editarnome.value,
		poster: "link da imagem",
		attractions: editaratracoes.value.split(","),
		description: editardescricao.value,
		// scheduled: respostaJSON.scheduled,
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
