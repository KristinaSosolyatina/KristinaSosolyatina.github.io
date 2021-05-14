var secondname = " ";

document.getElementById('btn').addEventListener("click", Rename);

function Rename(){
	secondname = document.getElementById('_secondname').value;
	document.getElementById('secondname').innerText = "Фамилия: " + secondname;
}
