
function atualizarGraficoMemoria() {
    obterDadosGraficoMemoria();
    setTimeout(function() {
        atualizarGraficoMemoria()
    }, 2000)
}

function obterDadosGraficoMemoria() {
    var chartData = {
        labels: [],
        datasets: [{
            label: 'Componente Memoria (MB)',
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.3)',
            fill: true,
            lineTension: 0.4,
            borderWidth: 3,
            data: [],
        }]
    };
    
var maxMemory
    

    fetch(`/registro/graficoDashCPU/chart/memoria/${1}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    resposta.reverse();

                    for (i = 0; i < resposta.length; i++) {
                        var registro = resposta[i];

                        console.log(registro)
                        maxMemory = registro.memoriaTotal
                        chartData.labels.push(registro.dataRegistro);
                        chartData.datasets[0].data.push(registro.filter);
                    }

                    console.log(JSON.stringify(chartData));
                    var configuracoes = {
                        responsive: false,
                        animation: false,
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Consumo de acordo com o máximo de memória do sistema'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: false, 
                                    suggestedMin: 0,
                                    suggestedMax: maxMemory
                                },
                            }]
                        }
                    };
                    plotarGraficoMemoria(chartData, configuracoes);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}


function plotarGraficoMemoria(chartData, config) {
    console.log('iniciando plotagem do gráfico...');
    var ctx = document.getElementById('chartTotensMemoria').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: config
    });
}








function atualizarGraficoMemoria2() {
    obterDadosGraficoMemoria2();
    setTimeout(function() {
        atualizarGraficoMemoria2()
    }, 2000)
}

function obterDadosGraficoMemoria2() {
    var chartData2 = {
        labels: [],
        datasets: [{
            label: 'Componente Memoria (MB)',
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.3)',
            fill: true,
            lineTension: 0.4,
            borderWidth: 3,
            data: [],
        }]
    };
var maxMemory2
    

    fetch(`/registro/graficoDashCPU/chart/memoria/${2}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    resposta.reverse();

                    for (i = 0; i < resposta.length; i++) {
                        var registro = resposta[i];

                        console.log(registro)
                        maxMemory2 = registro.memoriaTotal
                        chartData2.labels.push(registro.dataRegistro);
                        chartData2.datasets[0].data.push(registro.filter);
                    }

                    console.log(JSON.stringify(chartData2));
                    var configuracoes2 = {
                        responsive: false,
                        animation: false,
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Consumo de acordo com o máximo de memória do sistema'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: false, 
                                    suggestedMin: 0,
                                    suggestedMax: maxMemory2
                                },
                            }]
                        }
                    };
                    plotarGraficoMemoria2(chartData2, configuracoes2);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}


function plotarGraficoMemoria2(chartData2, config) {
    console.log('iniciando plotagem do gráfico...');
    var ctx = document.getElementById('chartTotensMemoria2').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: chartData2,
        options: config
    });
}

atualizarGraficoMemoria2();
atualizarGraficoMemoria();