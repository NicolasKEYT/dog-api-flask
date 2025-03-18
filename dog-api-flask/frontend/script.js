function fetchDog() {
    fetch('http://127.0.0.1:5000/dog') // Confirme se a rota no Flask é '/dog'
        .then(response => response.json())
        .then(data => {
            document.getElementById("dogImage").src = data.url; // Verifique se a resposta contém 'url'
        })
        .catch(error => console.error("Erro ao buscar imagem:", error));
}


// Adicionando evento ao botão
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-gerar").addEventListener("click", fetchDog);
});
