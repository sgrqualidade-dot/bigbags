res.forEach(i => {
    o += `
    <div class="card">

    <b>Fornecedor:</b> ${i['Fornecedor'] ?? ''}<br>

    <b>Oferta:</b> ${i['Oferta'] ?? ''}<br>

    <b>Identificação:</b> ${i['Identificação'] ?? ''}<br>

    <b>Material:</b> ${i['Nome Material'] ?? ''}<br>

    <b>Peso:</b> ${i['Peso'] ?? ''}<br>

    <b>Rua:</b> ${i['Rua'] ?? ''}<br>

    <b>Organização:</b> ${i['Organização'] ?? ''}<br>

    <b>Classificação Cu:</b> ${i['Classificação Cu'] ?? ''}<br>

    <b>Classificação Zn:</b> ${i['Classificação Zn'] ?? ''}<br>

    <b>Status:</b>
    <span style="color:${cor(i['Status'])};font-weight:bold">
        ${i['Status'] ?? ''}
    </span>

    </div>
    `;
});
