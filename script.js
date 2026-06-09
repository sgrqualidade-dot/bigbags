let dados = [];

fetch("dados.json")
.then(response => response.json())
.then(json => {
    dados = json;
});

document.getElementById("busca").addEventListener("input", pesquisar);

function pesquisar() {

    let texto = document.getElementById("busca").value
        .toLowerCase()
        .trim();

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (texto === "") {
        return;
    }

    let encontrados = dados.filter(item =>
        Object.values(item).some(valor =>
            String(valor ?? "")
                .toLowerCase()
                .includes(texto)
        )
    );

    if (encontrados.length === 0) {
        resultado.innerHTML = "<p>Nenhum registro encontrado.</p>";
        return;
    }

    encontrados.forEach(item => {

        resultado.innerHTML += `
            <div class="card">

                <b>Fornecedor:</b> ${item["Fornecedor"] ?? ""}<br>

                <b>Oferta:</b> ${item["Oferta"] ?? ""}<br>

                <b>Identificação:</b> ${item["Identificação"] ?? ""}<br>

                <b>Material:</b> ${item["Nome Material"] ?? ""}<br>

                <b>Peso:</b> ${item["Peso"] ?? ""}<br>

                <b>Rua:</b> ${item["Rua"] ?? ""}<br>

                <b>ORGANIZAÇÃO:</b> ${item["ORGANIZAÇÃO"] ?? ""}<br>

                <b>Classificação Cu:</b> ${item["Classificação Cu"] ?? ""}<br>

                <b>Classificação Zn:</b> ${item["Classificação Zn"] ?? ""}<br>

            </div>
        `;
    });

}
