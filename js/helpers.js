const BASEURL = "https://xp41-soundgarden-api.herokuapp.com";

const DataConvert = (x) => {
	let data = x.split("T")[0];
	let hora = x.split("T")[1].slice(0, 5);
	let ano = data.split("-")[0].slice(0, 4);
	let mes = data.split("-")[1];
	let dia = data.split("-")[2];
	return ano + "-" + mes + "-" + dia + "T" + hora;
};

function getID() {
	return new URLSearchParams(window.location.search).get("id");
}
