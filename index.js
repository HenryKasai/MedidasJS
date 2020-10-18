const button = document.querySelector("button");
const buttonclick = (e) => {
    e.preventDefault();
    let metros = prompt("Insira uma medida em metros.");
    if (Number(metros)) {
        let quilometros = Number(metros) / 1000;
        let centimetros = Number(metros) * 100;
        alert(`${metros} m = ${quilometros} km = ${centimetros} cm.`);    
    } else {
        alert("Insira um valor válido");
    }
}

button.addEventListener("click", buttonclick);