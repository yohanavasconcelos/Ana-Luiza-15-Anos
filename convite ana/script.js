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

function converterParaPDF() {
    // HTML da página atual
    var html = document.documentElement.outerHTML;

    // Envie uma solicitação para a API do Pdfcrowd
    fetch('https://pdfcrowd.com/api/pdf/convert/uri/', {
        method: 'POST',
        body: JSON.stringify({ src: html }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.blob())
    .then(blob => {
        // Crie um link para fazer o download do PDF
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'pagina.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    })
    .catch(error => {
        console.error('Erro ao converter para PDF:', error);
    });
}

// Chamada da função para converter para PDF
converterParaPDF();
