function atualizarGraficoCPU() {
    obterDadosGraficoCPU();
    setTimeout(function () {
        atualizarGraficoCPU()
    }, 2000)
}

function obterDadosGraficoCPU() {
    var chartData2 = {
        labels: [],
        datasets: [{
            label: 'Componente CPU',
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.3)',
            fill: true,
            lineTension: 0.4,
            borderWidth: 3,
            data: [],
        }]
    };
    var maxCPU
    fetch(`/registro/graficoDashCPU/chart/cpu/${1}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    resposta.reverse();

                    for (i = 0; i < resposta.length; i++) {
                        var registro = resposta[i];
                        maxCPU = registro.cpuMaxFrequency
                        chartData2.labels.push(registro.dataRegistro);
                        chartData2.datasets[0].data.push((registro.filter).toFixed(2));
                    }
                    console.log(JSON.stringify(chartData2));
                    var configuracoes = {
                        responsive: false,
                        animation: false,
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Consumo de acordo com a Frequencia máxima da CPU'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: false,
                                    min: 1,
                                    suggestedMax: maxCPU
                                },
                            }]
                        }
                    };
                    plotarGraficoCPU(chartData2, configuracoes);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarGraficoCPU(chartData2, config) {
    console.log('iniciando plotagem do gráfico...');
    var ctx = document.getElementById('chartTotensCPU').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: chartData2,
        options: config
    });
}



function atualizarGraficoCPU2() {
    obterDadosGraficoCPU2();
    setTimeout(function () {
        atualizarGraficoCPU2()
    }, 2000)
}

function obterDadosGraficoCPU2() {
    var chartData2 = {
        labels: [],
        datasets: [{
            label: 'Componente CPU',
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.3)',
            fill: true,
            lineTension: 0.4,
            borderWidth: 3,
            data: [],
        }]
    };
    var maxCPU2

    fetch(`/registro/graficoDashCPU/chart/cpu/${2}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();
                    for (i = 0; i < resposta.length; i++) {
                        var registro = resposta[i];
                        maxCPU2 = registro.cpuMaxFrequency
                        chartData2.labels.push(registro.dataRegistro);
                        chartData2.datasets[0].data.push((registro.filter).toFixed(2));
                    }
                    console.log(JSON.stringify(chartData2));
                    var configuracoes = {
                        responsive: false,
                        animation: false,
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Consumo de acordo com a Frequencia máxima da CPU'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: false,
                                    min: 1,
                                    suggestedMax: maxCPU2
                                },
                            }]
                        }
                    };
                    plotarGraficoCPU2(chartData2, configuracoes);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarGraficoCPU2(chartData22, config2) {
    console.log('iniciando plotagem do gráfico...');
    var ctx2 = document.getElementById('chartTotensCPU2').getContext('2d');
    var chart = new Chart(ctx2, {
        type: 'line',
        data: chartData22,
        options: config2
    });
}

atualizarGraficoCPU2();
atualizarGraficoCPU();