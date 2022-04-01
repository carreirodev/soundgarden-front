const abrirModal = document.querySelectorAll(".btnreservar");
const modal = document.getElementById("popupreserva");
const concluirReserva = document.querySelector(".concluirreservar");
const cancelarReserva = document.querySelector("#fechar");
let nomeEvento = document.getElementById("eventoNome");
let idEvento = "";

var estilo = document.getElementsByClassName("load");

let form = document.querySelector("form");
let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let qtde = document.querySelector("#qtdIngressos");

const exibirEventos = async () => {
	var requestOptions = {
		method: "GET",
		redirect: "follow"
	};

	const allEventos = await fetch("https://xp41-soundgarden-api.herokuapp.com/events", requestOptions);

	const contentEventos = await allEventos.json();

	let eventosTable = "";

	for (let index = 0; index < contentEventos.length; index++) {
		eventosTable = `<article class="evento card p-5 m-3">
                    <h2>${contentEventos[index].name}</h2><h4> ${contentEventos[index].scheduled.substring(0, 10)}</h4>
                    <h4>${contentEventos[index].attractions}</h4>
                    <p>${contentEventos[index].description}</p>
					<button onclick ="reservar('${contentEventos[index]._id}', 
					'${contentEventos[index].name}')"
					class="btn btn-primary botao-reservar">reservar ingresso</button>`;
		let listaEventos = document.querySelector("#todososeventos");
		listaEventos.innerHTML += eventosTable;
	}
};
exibirEventos();

let reservar = async (id, nome) => {
	modal.style.display = "block";
	nomeEvento.innerHTML = "Evento: " + nome;
	var idEvento = id;
	console.log(idEvento);
};

let cancelar = async (e) => {
	e.preventdefault();
	modal.style.display = "none";
};
