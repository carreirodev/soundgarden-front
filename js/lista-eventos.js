const exibirEventos = async () => {
	var requestOptions = {
		method: "GET",
		redirect: "follow"
	};

	const allEventos = await fetch("https://xp41-soundgarden-api.herokuapp.com/events", requestOptions);

	const contentEventos = await allEventos.json();

	let eventosTable = "";

	for (let index = 0; index < contentEventos.length; index++) {
		eventosTable = `<tr><th scope="row">${index}</th>
									<td>${contentEventos[index].scheduled.substring(0, 10)}</td>
									<td>${contentEventos[index].name}</td>
									<td>${contentEventos[index].attractions}</td>
									<td>
										<a href="reservas.html" class="btn btn-dark">ver reservas</a>
										<a href="editar-evento.html" class="btn btn-secondary">editar</a>
										<a href="excluir-evento.html" class="btn btn-danger">excluir</a>
									</td>
								</tr>`;
		let listaEventos = document.querySelector("#todososeventos");
		listaEventos.innerHTML += eventosTable;
	}
};
exibirEventos();
