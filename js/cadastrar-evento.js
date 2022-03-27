let posterItem = document.createElement("div");
let insertPoster = document.querySelector(".btn-primary");

let addPoster = insertPoster.insertAdjacentElement("beforebegin", posterItem);
addPoster.setAttribute("class", "mb-3 poster");

let labelItem = document.createElement("label");
let insertLabel = document.querySelector(".poster");
let addLabel = insertLabel.insertAdjacentElement("afterbegin", labelItem);
addLabel.setAttribute("class", "form-label");
addLabel.setAttribute("for", "poster");
addLabel.innerHTML = "Link do Poster do Evento";

let labelInput = document.createElement("input");
let addInput = insertLabel.insertAdjacentElement("beforeend", labelInput);
addInput.setAttribute("class", "form-control");
addInput.setAttribute("id", "poster");
addInput.setAttribute("type", "text");
addInput.setAttribute("aria-describedby", "lotacao");

const data = document.querySelector("#data");
data.setAttribute("value", "2018-06-12T19:30");
data.setAttribute("type", "datetime-local");

const inputNome = document.querySelector("#nome");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputTotalPasses = document.querySelector("#lotacao");
const inputPoster = document.querySelector("#poster");

inputNome.setAttribute("required", "");
inputAtracoes.setAttribute("required", "");
inputDescricao.setAttribute("required", "");
inputData.setAttribute("required", "");
inputTotalPasses.setAttribute("required", "");

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

	const options = {
		method: "POST",
		body: JSON.stringify(newEvento1),
		headers: {
			"Content-Type": "application/json"
		},
		redirect: "follow"
	};

	const resposta = await fetch(`${BASE_URL}/events`, options);

	console.log(resposta);
};
