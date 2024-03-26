function abrirModal() {
    var modal = document.getElementById("modal-traje");
    modal.style.display = "block";
}

function fecharModal() {
    var modal = document.getElementById("modal-traje");
    modal.style.display = "none";
}

// Oculta a modal ao carregar a página
window.onload = function() {
    var modal = document.getElementById("modal-traje");
    modal.style.display = "none";
};
