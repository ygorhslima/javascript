const configdgv={
    endpoint:"produtos.json",
}

const dgv=(configdgv)=>{
    const dgvDados = document.getElementById("dgvDados");
    fetch(configdgv.endpoint)
    .then(res=>res.json())
    .then(res=>{
        res.forEach(el => {
           const dgvLinha = document.createElement("tr");
           dgvLinha.setAttribute("id", "dgvLinha");
           dgvLinha.setAttribute("class","dgvLinha");

           const c1 = document.createElement("td");
           c1.setAttribute("class","c1");
           c1.innerHTML = `${el.id}`;

           const c2 = document.createElement("td");
           c2.setAttribute("class","c2");
           c2.innerHTML = `${el.produto}`;
           
           const c3 = document.createElement("td");
           c3.setAttribute("class","c3");
           c3.innerHTML = `${el.marca}`;
           
           const c4 = document.createElement("td");
           c4.setAttribute("class","c4");
           c4.innerHTML = `${el.modelo}`;
           
           const c5 = document.createElement("td");
           c5.setAttribute("class","c5");
           c5.innerHTML = "D E V";

           dgvLinha.appendChild(c1);
           dgvLinha.appendChild(c2);
           dgvLinha.appendChild(c3);
           dgvLinha.appendChild(c4);
           dgvLinha.appendChild(c5);
           dgvDados.appendChild(dgvLinha);
        });
    });
}
dgv(configdgv);
