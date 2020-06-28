function atualizarGraficoDisco() {
    obterDadosGraficoDisco();
    setTimeout(function() {
        atualizarGraficoDisco()
    }, 2000)
}


function obterDadosGraficoDisco() {
    var chartData = {
        labels: [],
        datasets: [{
            label: 'Componentes DISCO',
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.3)',
            fill: true,
            lineTension: 0.4,
            borderWidth: 3,
            data: [],
        }]
    };

var maxHD

    fetch(`/registro/graficoDashCPU/chart/hd/${1}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    resposta.reverse();

                    for (i = 0; i < resposta.length; i++) {
                        var registro = resposta[i];

                        console.log(registro)
                        maxHD = registro.discoTotal
                        chartData.labels.push(registro.dataRegistro);
                        chartData.datasets[0].data.push((registro.filter).toFixed(2));
                    }
                    console.log(JSON.stringify(chartData));
                    var configuracoes = {
                        responsive: false,
                        animation: false,
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Consumo de Acordo com o maximo de Espaço em disco do Totem'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: false, 
                                    suggestedMin: 0,
                                    suggestedMax: maxHD
                                },
                            }]
                        }
                    };
                    plotarGraficoDisco(chartData, configuracoes);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarGraficoDisco(chartData, config) {
    console.log('iniciando plotagem do gráfico...');
    var ctx = document.getElementById('chartTotensDisco').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: config
    });
}

function atualizarGraficoDisco2() {
    obterDadosGraficoDisco2();
    setTimeout(function() {
        atualizarGraficoDisco2()
    }, 2000)
}


function obterDadosGraficoDisco2() {
    var chartData2 = {
        labels: [],
        datasets: [{
            label: 'Componentes DISCO',
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.3)',
            fill: true,
            lineTension: 0.4,
            borderWidth: 3,
            data: [],
        }]
    };
var maxHD2
    fetch(`/registro/graficoDashCPU/chart/hd/${2}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    resposta.reverse();

                    for (i = 0; i < resposta.length; i++) {
                        var registro = resposta[i];

                        console.log(registro)
                        maxHD2 = registro.memoriaTotal
                        chartData2.labels.push(registro.dataRegistro);
                        chartData2.datasets[0].data.push((registro.filter).toFixed(2));
                    }
                    console.log(JSON.stringify(chartData2));
                    var configuracoes2 = {
                        responsive: false,
                        animation: false,
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Consumo de Acordo com o maximo de Espaço em disco do Totem'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: false, 
                                    suggestedMin: 0,
                                    suggestedMax: maxHD2
                                },
                            }]
                        }
                    };
                    plotarGraficoDisco2(chartData2, configuracoes2);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarGraficoDisco2(chartData2, config2) {
    console.log('iniciando plotagem do gráfico...');
    var ctx2 = document.getElementById('chartTotensDisco2').getContext('2d');
    var chart = new Chart(ctx2, {
        type: 'line',
        data: chartData2,
        options: config2
    });
}

atualizarGraficoDisco2();
atualizarGraficoDisco();
