// Função para abrir o modal do nome
function abrirModalNome() {
    var modalNome = document.getElementById("modal-nome");
    modalNome.style.display = "block";


}

// Função para fechar o modal do nome
function fecharModalNome() {
    var modalNome = document.getElementById("modal-nome");
    modalNome.style.display = "none";
}

// Função para abrir o modal do traje
function abrirModal() {
    var modalTraje = document.getElementById("modal-traje");
    modalTraje.style.display = "block";
}

// Função para fechar o modal do traje
function fecharModal() {
    var modalTraje = document.getElementById("modal-traje");
    modalTraje.style.display = "none";
}

// Definindo ações dentro do evento window.onload
window.onload = function() {
    // Formulário para o nome
    var formNome = document.getElementById("form-nome");

    // Associar a abertura do modal do nome ao botão de confirmação de presença
    var botaoConfirmarPresenca = document.querySelector('.confirmacao');
    botaoConfirmarPresenca.addEventListener("click", function(event) {
        event.preventDefault();
        abrirModalNome();
    });

    // Fechar o modal do nome quando clicar no botão "X"
    var fecharModalNomeBotao = document.querySelector("#modal-nome .fechar");
    fecharModalNomeBotao.addEventListener("click", function() {
        fecharModalNome();
    });

    // Event listener para o envio do formulário do nome
    formNome.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar comportamento padrão de envio do formulário

        var nome = document.getElementById("nome").value;

        // Validar se o nome foi inserido
        if (nome.trim() === "") {
            alert("Por favor, insira seu nome.");
            return;
        }

        // Estimar o número de convites com base no nome
        var convitesPorPessoa = {
            "Cássia" : 3,
            "Lucênia" : 2,
            "Tarciana" : 1,
            "Maria Eduarda" : 1,
            "Luclécia" : 3,
            "Mara" :1,
            "Aline" : 2,
            "Alyce" :2,
            "Sérgio Filho" :2,
            "Lúcia" : 1,
            "Maria Aparecida" : 1,
            "Érica" : 3,
            "Juliana" : 3,
            "Ianan" : 4,
            "Leonan" : 5,
            "Letícia" : 2,
            "Jociane" : 2,
            "Nayara" : 3,
            "Cynthia" : 4,
            "Tatiana" : 4,
            "Josy" : 2,
            "Janete" : 1,
            "Amanda" : 1,
            "Yara" : 1,
            "Airtes" : 1,
            "Késia" : 1,
            "Thaís" : 1,
            "Marilúcia" : 1,
            "Evandro" : 2,
            "Sílva" : 4,
            "Jocylma" : 2,
            "Lucyanne" : 4,
            "Bruna" : 1,
            "Thayná" : 1,
            "Hannah" : 1,
            "Ana Carolina" : 1,
            "Laura" : 1,
            "Júlia Maria" : 1,
            "Davi" : 1,
            "Lucas" : 1,
            "Enzo" : 1,
            "Giulia" : 1,


            
        };

        
        if(nome.trim() in convitesPorPessoa){
            var numeroDeConvites = convitesPorPessoa[nome];

            var mensagemConvites = document.getElementById("mensagem-convites");
           
            mensagemConvites.innerHTML = "";
            mensagemConvites.textContent = "Olá " + nome + "! Com base no seu nome, estimamos que você tem direito a " + numeroDeConvites + " convite(s).";
        }else{
            var mensagemConvites = document.getElementById("mensagem-convites");
            mensagemConvites.textContent = "Você não está na lista de convidados";
        }

        

        var nomesConfirmados = [];

        // Event listener para o envio do formulário do nome
        formNome.addEventListener("submit", function(event) {
            event.preventDefault(); // Evitar comportamento padrão de envio do formulário

            var nome = document.getElementById("nome").value;

            // Verificar se o nome já foi confirmado anteriormente
            if (nomesConfirmados.includes(nome)) {
               
            var mensagemConvites = document.getElementById("mensagem-convites");
           
            mensagemConvites.innerHTML = "";
            mensagemConvites.textContent = "Você já confirmou sua presença";
            
                return;
            }

            // Adicionar o nome à lista de nomes confirmados
            nomesConfirmados.push(nome);

            // Armazenar os nomes confirmados no localStorage
            localStorage.setItem("nomesConfirmados", JSON.stringify(nomesConfirmados));

            // Restante do seu código...
        });

        // Verificar nomes confirmados ao carregar a página
        window.onload = function() {
            // Verificar se existem nomes confirmados armazenados
            var nomesConfirmadosArmazenados = localStorage.getItem("nomesConfirmados");
            if (nomesConfirmadosArmazenados) {
                nomesConfirmados = JSON.parse(nomesConfirmadosArmazenados);
            }
        };
                
                // Fechar o modal do nome após envio do formulário
                // fecharModalNome();
            });

            // Ocultar os modais ao carregar a página
            var modalTraje = document.getElementById("modal-traje");
            var modalNome = document.getElementById("modal-nome");
            modalTraje.style.display = "none";
            modalNome.style.display = "none";
        }

// Função para estimar o número de convites
function estimarNumeroDeConvites(nome) {
    // Lógica para estimar o número de convites com base no nome
    // Aqui você pode implementar sua própria lógica de estimativa
    // Por exemplo, retornar o comprimento do nome como uma estimativa simples
    return nome.length;
}

