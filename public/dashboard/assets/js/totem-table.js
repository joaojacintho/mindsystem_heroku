function totemTable() {
    fetch(`/totem/todostotens/fortable/listagem/${sessionStorage.id_usuario}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {

                    var tbody = tableTotens.getElementsByTagName('tbody')[0];

                    tbody.innerHTML = '';

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    resposta.reverse();

                    for (i = 0; i < resposta.length; i++) {
                        var registro = resposta[i];
                        console.log(registro);
                        if(registro.statusMonitoramento != null){
                            tbody.innerHTML += `
                            <tr>
                                <td>${registro.idTotem}</td>
                                <td>${registro.posicaoTotem}</td>
                                <td>${registro.nome_cinema}</td>
                                <td>${registro.statusMonitoramento}</td>
                                <td><a class="btn btn-outline-danger"onClick="deletarTotem(${registro.idTotem})">DELETAR</a></td>
                            </tr>
                        `;
                        }else{
                            tbody.innerHTML += `
                            <tr>
                                <td>${registro.idTotem}</td>
                                <td>${registro.posicaoTotem}</td>
                                <td>${registro.nome_cinema}</td>
                                <td>INATIVO</td>
                                <td><a class="btn btn-outline-danger"onClick="deletarTotem(${registro.idTotem})">DELETAR</a></td>
                            </tr>
                        `;
                        }
                    }
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ tabela de produtos: ${error.message}`);
        });
}





function deletarTotem(id){
    fetch(`/totem/delete/${id}`, {
        method: 'delete'
    }).then(response => response.json())
    
    location.reload()
}

totemTable()