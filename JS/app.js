const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const datos = new FormData(formulario);
    const aprendiz = {};

    for (const [campo, valor] of datos.entries()) {

        if (valor.trim() === "") {
            alert(`El campo ${campo} está vacío`);
            return;
        }
        aprendiz[campo] = valor;
    }

    aprendiz.acepta = datos.has("acepta") ? "Sí" : "No";


    localStorage.setItem("aprendiz", JSON.stringify(aprendiz));

    mostrarAprendiz(aprendiz);
});

function mostrarAprendiz(aprendiz) {
    resultado.innerHTML = "";

    for (const campo in aprendiz) {
        resultado.innerHTML += `<p>${campo}: ${aprendiz[campo]}</p>`;
    }
}

const aprendizGuardado = localStorage.getItem("aprendiz");

if (aprendizGuardado) {
    mostrarAprendiz(JSON.parse(aprendizGuardado));
}