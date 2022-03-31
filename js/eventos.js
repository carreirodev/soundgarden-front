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
                    <a   href="#?id=${contentEventos[index]._id}" class="btn btn-primary res">reservar ingresso</a>
                    </article>`;
		let listaEventos = document.querySelector("#todososeventos");
		listaEventos.innerHTML += eventosTable;
	}
};
exibirEventos();
