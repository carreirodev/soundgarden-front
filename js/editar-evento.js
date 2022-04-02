const id = getID();

let editarnome = document.querySelector("#nome");
let editarposter = document.querySelector("#banner");
let editaratracoes = document.querySelector("#atracoes");
let editardescricao = document.querySelector("#descricao");
let editardata = document.querySelector("#data");
let editarhora = document.querySelector("#time");
let editarlotacao = document.querySelector("#lotacao");
let form = document.querySelector("form");

var Preenchendo = async () => {
	const resposta = await fetch(`${BASEURL}/events/${id}`, { method: "GET" });
	const respostaJSON = await resposta.json();

	editarnome.value = respostaJSON.name;
	editarposter.value = respostaJSON.poster;
	editaratracoes.value = respostaJSON.attractions;
	editardescricao.value = respostaJSON.description;
	editardata.value = DataConvert(respostaJSON.scheduled);
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
	console.log(replaceEvento.scheduled);

	const option = {
		method: "PUT",
		body: JSON.stringify(replaceEvento),
		headers: {
			"Content-Type": "application/json"
		}
	};

	const respostaAtualizar = await fetch(`${BASEURL}/events/${id}`, option);

	if (respostaAtualizar.status != "200") {
		return alert("Ocorreu um erro. Verifique se todos os dados estão corretos!");
	}

	alert("Dados alterados!");
	return (window.location.href = "admin.html");
};
