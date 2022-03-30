const exibirEventos = async () => {
	var requestOptions = {
		method: "GET",
		redirect: "follow"
	};

	const allEventos = await fetch("https://xp41-soundgarden-api.herokuapp.com/events", requestOptions);

	const contentEventos = await allEventos.json();

	let eventosTable = "";

	contentEventos.forEach((item, index) => {
		eventosTable = `<tr><th scope="row">${index}</th>
									<td>${item.scheduled.substring(0, 10)}</td>
									<td>${item.name}</td>
									<td>${item.attractions}</td>
									<td>
										<a href="reservas-evento.html?id=${item._id}" class="btn btn-dark">ver reservas</a>
										<a href="editar-evento.html?id=${item._id}" class="btn btn-secondary">editar</a>
										<a href="excluir-evento.html?id=${item._id}" class="btn btn-danger">excluir</a>
									</td>
								</tr>`;
		document.querySelector("#todososeventos").innerHTML += eventosTable;
	});
};
exibirEventos();
