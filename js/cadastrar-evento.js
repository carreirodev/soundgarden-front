let posterItem = document.createElement("div");
let insertPoster = document.querySelector(".btn-primary");

const data = document.querySelector("#data");
data.setAttribute("value", "2022-03-27T01:00");
data.setAttribute("min", "2022-03-27T01:00");
data.setAttribute("max", "2025-12-30T00:00");
data.setAttribute("type", "datetime-local");

const inputNome = document.querySelector("#nome");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputTotalPasses = document.querySelector("#lotacao");
const inputPoster = document.querySelector("#poster");

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const form = document.querySelector(".col-6");

form.onsubmit = async (evento) => {
	evento.preventDefault();

	const newEvento1 = {
		name: inputNome.value,
		poster: inputPoster.value,
		attractions: inputAtracoes.value.split(","),
		description: inputDescricao.value,
		scheduled: inputData.value,
		number_tickets: inputTotalPasses.value
	};
	console.log(inputData.value);
	const options = {
		method: "POST",
		body: JSON.stringify(newEvento1),
		headers: {
			"Content-Type": "application/json"
		},
		redirect: "follow"
	};

	const resposta = await fetch(BASE_URL + "/events", options).then(() => {
		alert("Evento Cadastrado com Sucesso");
		window.location.replace("/admin.html");
	});

	console.log(resposta);
};
