const a = document.querySelector("a");
const aclick = (e) => {
    e.preventDefault();
    let metros = prompt("Insira uma medida em metros.");
    if (Number(metros)) {
        let quilometros = Number(metros) / 1000;
        let centimetros = Number(metros) * 100;
        alert(`${metros} metros = ${quilometros} km e ${centimetros} cm.`);    
    } else {
        alert("Insira um valor válido");
    }
}

a.addEventListener("click", aclick);