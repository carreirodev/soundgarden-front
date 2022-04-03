// BANNER ROTATIVO

let time = 5000;
let currentImageIndex = 0;
let images = document.querySelectorAll("#slider img");
let max = images.length;

function nextImage() {
	images[currentImageIndex].classList.remove("selected");
	currentImageIndex++;
	if (currentImageIndex >= max) currentImageIndex = 0;
	images[currentImageIndex].classList.add("selected");
}

function start() {
	setInterval(() => {
		nextImage();
	}, time);
}

window.addEventListener("load", start);

const exibirEventos = async () => {
	var requestOptions = {
		method: "GET",
		redirect: "follow"
	};

	const proximosEventos = await fetch(`${BASEURL}/events`, requestOptions);

	const contentEventos = await proximosEventos.json();

	let eventosTable = "";

	for (let index = 0; index < 3; index++) {
		eventosTable = `<article class="evento card p-5 m-3">
                    <h2>${contentEventos[index].name}</h2><h4> ${contentEventos[index].scheduled.substring(0, 10)}</h4>
                    <h4>${contentEventos[index].attractions}</h4>
                    <p>${contentEventos[index].description}</p>
					<button onclick ="reservar('${contentEventos[index]._id}', 
					'${contentEventos[index].name}')"
					class="btn btn-primary botao-reservar">reservar ingresso</button>`;
		let listaEventos = document.querySelector("#proximoseventos");
		listaEventos.innerHTML += eventosTable;
	}
};
exibirEventos();
