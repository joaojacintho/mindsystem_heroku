function registroTable() {
    fetch(`/registro/totem/table/${1}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {

                    var tbody = tableRegistros.getElementsByTagName('tbody')[0];
                    tbody.innerHTML = '';

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    resposta.reverse();

                    for (i = 0; i < resposta.length; i++) {
                        var registro = resposta[i];
                        console.log(registro);
                        tbody.innerHTML += `
                            <tr>
                                <td>${registro.idTotem}</td>
                                <td>${registro.dataRegistro}</td>
                                <td>${registro.tipo}</td>
                                <td>${(registro.metricas).toFixed(2)} MB</td>
                            </tr>
                        `;
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


function registroTable2() {
    fetch(`/registro/totem/table/${2}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {

                    var tbody = tableRegistros2.getElementsByTagName('tbody')[0];
                    tbody.innerHTML = '';

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    resposta.reverse();

                    for (i = 0; i < resposta.length; i++) {
                        var registro = resposta[i];
                        console.log(registro);
                        tbody.innerHTML += `
                            <tr>
                                <td>${registro.idTotem}</td>
                                <td>${registro.dataRegistro}</td>
                                <td>${registro.tipo}</td>
                                <td>${(registro.metricas).toFixed(2)} MB</td>
                            </tr>
                        `;
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


function registroTable3() {
    fetch(`/registro/totem/table/${3}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {

                    var tbody = tableRegistros3.getElementsByTagName('tbody')[0];
                    tbody.innerHTML = '';

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    resposta.reverse();

                    for (i = 0; i < resposta.length; i++) {
                        var registro = resposta[i];
                        console.log(registro);
                        tbody.innerHTML += `
                            <tr>
                                <td>${registro.idTotem}</td>
                                <td>${registro.dataRegistro}</td>
                                <td>${registro.tipo}</td>
                                <td>${(registro.metricas).toFixed(2)}</td>
                            </tr>
                        `;
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


function registroTable4() {
    fetch(`/registro/totem/table/${4}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {

                    var tbody = tableRegistros4.getElementsByTagName('tbody')[0];
                    tbody.innerHTML = '';

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    resposta.reverse();

                    for (i = 0; i < resposta.length; i++) {
                        var registro = resposta[i];
                        console.log(registro);
                        tbody.innerHTML += `
                            <tr>
                                <td>${registro.idTotem}</td>
                                <td>${registro.dataRegistro}</td>
                                <td>${registro.tipo}</td>
                                <td>${(registro.metricas).toFixed(2)}</td>
                            </tr>
                        `;
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

registroTable()
registroTable2()
