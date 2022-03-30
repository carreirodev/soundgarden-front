const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com/bookings/event";
const id = new URLSearchParams(window.location.search).get("id");

const exibirReservasEventos = async () => {
	var requestOptions = {
		method: "GET",
		redirect: "follow"
	};

	const bookingEventos = await fetch(`${BASE_URL}/${id}`, requestOptions);

	const reservaEventos = await bookingEventos.json();
	document.querySelector("#eventoNome").innerHTML = reservaEventos[0].event.name;
	let eventosTable = "";

	for (let index = 0; index < reservaEventos.length; index++) {
		eventosTable = `<tr><th scope="row">${index}</th>
									<td>${reservaEventos[index].event.scheduled.substring(0, 10)}</td>
									<td>${reservaEventos[index].owner_name}</td>
									<td>${reservaEventos[index].owner_email}</td>
									<td>${reservaEventos[index].number_tickets}</td>
								</tr>`;

		let listaEventos = document.querySelector("#todososeventos");
		listaEventos.innerHTML += eventosTable;
	}
};
exibirReservasEventos();
