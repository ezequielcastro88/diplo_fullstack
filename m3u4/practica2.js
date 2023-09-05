const textarea = document.getElementById("miTextarea");
const contador = document.getElementById("contador");

textarea.addEventListener("input", function() {
    const longitudTexto = textarea.value.length;
    contador.textContent = longitudTexto;
});