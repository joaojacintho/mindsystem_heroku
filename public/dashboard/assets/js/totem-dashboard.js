// Totem Modal 01
fetch(`/totem/todostotens/listagem/card/${1}`, {
    cache: 'no-store'
}).then(function (response) {
    if (response.ok) {
        response.json().then(function (resposta) {
console.log(`Registros 2 ${registro}`)
            

            var card = document.getElementById('cardTotem1');

            card.innerHTML = '';

            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

            resposta.reverse();

            for (let i = 0; i < resposta.length; i++) {
                var registro = resposta[i];
                console.log(registro)
                
                var cards = `
                <h6 class="card-title">${registro.tipo}</h6>
                <div class="progress ">
                <div class="progress-bar " style="width:${(registro.metricas)}%;" role="progressbar" style="width: 75%"
                    aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span>${(registro.metricas).toFixed(2)}</span></div>

                <div class="progress-bar" style="width:${(registro.metricas)}%;" role="progressbar" style="width: 75%"
                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>

                <div class="progress-bar" style="width:${(registro.metricas)}%;" role="progressbar" style="width: 75%"
                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
                   
                        
                `

                card.innerHTML += cards
                totemID.innerHTML = `Totem: ${i}`
            }

        });
    } else {
        console.error('Nenhum dado encontrado ou erro na API');
    }
})
.catch(function (error) {
    console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
});





// Totem Modal 02
fetch(`/totem/todostotens/listagem/card/${2}`, {
    cache: 'no-store'
}).then(function (response) {
    if (response.ok) {
        response.json().then(function (resposta) {
console.log(`Registros 2 ${registro}`)
            

            var card = document.getElementById('cardTotem2');

            card.innerHTML = '';

            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

            resposta.reverse();

            for (let i = 0; i < resposta.length; i++) {
                var registro = resposta[i];
                console.log(registro)
                
                var cards = `
                
                <h6 class="card-title">${registro.tipo}</h6>
                <div class="progress ">
                <div class="progress-bar " style="width:${(registro.metricas)}%;" role="progressbar" style="width: 75%"
                    aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">${(registro.metricas).toFixed(2)}</div>

                <div class="progress-bar" style="width:${(registro.metricas)}%;" role="progressbar" style="width: 75%"
                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>

                <div class="progress-bar" style="width:${(registro.metricas)}%;" role="progressbar" style="width: 75%"
                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
                    
                `

                card.innerHTML += cards
                totemID.innerHTML = `Totem: ${i}`
            }

        });
    } else {
        console.error('Nenhum dado encontrado ou erro na API');
    }
})
.catch(function (error) {
    console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
});



// Totem Modal 03
fetch(`/totem/todostotens/listagem/card/${3}`, {
    cache: 'no-store'
}).then(function (response) {
    if (response.ok) {
        response.json().then(function (resposta) {
console.log(`Registros 2 ${registro}`)
            

            var card = document.getElementById('cardTotem3');

            card.innerHTML = '';

            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

            resposta.reverse();

            for (let i = 0; i < resposta.length; i++) {
                var registro = resposta[i];
                console.log(registro)
                
                var cards = `
                <h6 class="card-title">${registro.tipo}</h6>
                <div class="progress ">
                <div class="progress-bar " style="width:${(registro.metricas)}%;" role="progressbar" style="width: 75%"
                    aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">${(registro.metricas).toFixed(2)}</div>

                <div class="progress-bar" style="width:${(registro.metricas)}%;" role="progressbar" style="width: 75%"
                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>

                <div class="progress-bar" style="width:${(registro.metricas)}%;" role="progressbar" style="width: 75%"
                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
                   
                      
                `

                card.innerHTML += cards
                totemID.innerHTML = `Totem: ${i}`
            }

        });
    } else {
        console.error('Nenhum dado encontrado ou erro na API');
    }
})
.catch(function (error) {
    console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
});



// Totem Modal 04
fetch(`/totem/todostotens/listagem/card/${4}`, {
    cache: 'no-store'
}).then(function (response) {
    if (response.ok) {
        response.json().then(function (resposta) {
console.log(`Registros 2 ${registro}`)
            

            var card = document.getElementById('cardTotem4');

            card.innerHTML = '';

            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

            resposta.reverse();

            for (let i = 0; i < resposta.length; i++) {
                var registro = resposta[i];
                console.log(registro)
                
                var cards = `  
                <h6 class="card-title">${registro.tipo}</h6>
                <div class="progress ">
                <div class="progress-bar " style="width:${(registro.metricas)}%;" role="progressbar" style="width: 75%"
                    aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">${(registro.metricas).toFixed(2)}</div>

                <div class="progress-bar" style="width:${(registro.metricas)}%;" role="progressbar" style="width: 75%"
                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>

                <div class="progress-bar" style="width:${(registro.metricas)}%;" role="progressbar" style="width: 75%"
                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
                   
                        
                `

                card.innerHTML += cards
                totemID.innerHTML = `Totem: ${i}`
            }

        });
    } else {
        console.error('Nenhum dado encontrado ou erro na API');
    }
})
.catch(function (error) {
    console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
});

