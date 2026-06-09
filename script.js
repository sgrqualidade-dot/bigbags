let dados=[];fetch("dados.json").then(r=>r.json()).then(j=>dados=j);
function pesquisar(){const p=document.getElementById("peso").value.trim();const out=document.getElementById("resultado");out.innerHTML="";
const enc=dados.filter(x=>String(x["Peso"])===p);
if(enc.length===0){out.innerHTML="Nenhum registro encontrado.";return;}
enc.forEach(i=>{out.innerHTML+=`<div class="card"><b>Fornecedor:</b> ${i["Fornecedor"]}<br><b>Oferta:</b> ${i["Oferta"]}<br><b>Identificação:</b> ${i["Identificação"]}<br><b>Nome Material:</b> ${i["Nome Material"]}<br><b>Classificação Cu:</b> ${i["Classificação Cu"]}<br><b>Classificação Zn:</b> ${i["Classificação Zn"]}</div>`;});}