const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com/bookings/event";
const id = new URLSearchParams(window.location.search).get("id");

const exibirReservasEventos = async () => {
	var requestOptions = {
		method: "GET",
		redirect: "follow"
	};

	const bookingEventos = await fetch(`${BASE_URL}/${id}`, requestOptions);

	const reservaEventos = await bookingEventos.json();
	console.log(reservaEventos.length);

	let eventosTable = "";
	if (reservaEventos.length != 0) {
		document.querySelector("#eventoNome").innerHTML = reservaEventos[0].event.name;
		reservaEventos.forEach((item, index) => {
			eventosTable = `<tr><th scope="row">${index}</th>
									<td>${item.event.scheduled.substring(0, 10)}</td>
									<td>${item.owner_name}</td>
									<td>${item.owner_email}</td>
									<td>${item.number_tickets}</td>
								</tr>`;
			let listaEventos = document.querySelector("#todososeventos");
			listaEventos.innerHTML += eventosTable;
		});
	} else {
		document.querySelector("#eventoNome").innerHTML = "Evento Sem Reservas";
	}
};
exibirReservasEventos();
