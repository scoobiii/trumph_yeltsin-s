// app.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- MÓDULO DE ESTADO DA APLICAÇÃO ---
    const AppState = {
        charts: {},
        activePage: 'decisors',
        budget: { currentScenario: 'trump' },
        retaliation: { currentPeriod: 1 }
    };

    // --- MÓDULO DE UI (INTERFACE DO USUÁRIO) ---
    const UI = {
        init: () => {
            document.querySelectorAll('.nav-button').forEach(button => {
                button.addEventListener('click', (e) => {
                    const pageId = e.target.dataset.page;
                    UI.showPage(pageId);
                });
            });
            // Mostra a página inicial
            UI.showPage(AppState.activePage);
        },
        showPage: (pageId) => {
            AppState.activePage = pageId;
            document.querySelectorAll('.page-content').forEach(page => page.classList.remove('active'));
            document.querySelectorAll('.nav-button').forEach(button => button.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
            document.querySelector(`.nav-button[data-page='${pageId}']`).classList.add('active');
            
            // Inicializa o gráfico da aba clicada, se ainda não foi criado
            if (!AppState.charts[pageId] && pageId !== 'decisors' && pageId !== 'paper') {
                Charts.init(pageId);
            }
        }
    };

    // --- MÓDULO DE GRÁFICOS ---
    const Charts = {
        defaults: { 
            plugins: { 
                title: { display: false }, 
                legend: { display: false }, 
                tooltip: { 
                    enabled: true, 
                    displayColors: false, 
                    backgroundColor: 'rgba(0,0,0,0.9)', 
                    titleFont: { size: 16, family: 'Teko' }, 
                    bodyFont: { size: 14, family: 'Roboto Condensed' }, 
                    padding: 15, 
                    callbacks: { 
                        title: (ctx) => ctx[0].raw._data.name, 
                        label: (ctx) => ctx[0].raw._data.tooltip.split('\n') 
                    } 
                } 
            }, 
            maintainAspectRatio: false, 
            responsive: true 
        },
        
        init: (chartId) => {
            if (AppState.charts[chartId]) return; // Previne recriação
            switch (chartId) {
                case 'budget': Charts.initBudget(); break;
                case 'tariffs': Charts.initTariffs(); break;
                case 'retaliation': Charts.initRetaliation(); break;
            }
        },

        initBudget: () => {
            const ctx = document.getElementById('budget-chart').getContext('2d');
            AppState.charts['budget'] = new Chart(ctx, { type: 'treemap', data: { datasets: [] }, options: Charts.defaults });
            
            const update = () => {
                const scenario = AppState.budget.currentScenario;
                const data = Data.budgetScenarios[scenario];
                AppState.charts['budget'].data.datasets = [{ 
                    tree: data.tree, 
                    key: data.key, 
                    groups: ['name'], 
                    backgroundColor: (c) => c.raw?._data.color, 
                    labels: { 
                        display: true, 
                        color: '#fff', 
                        font: {size: 20}, 
                        formatter: (c)=>[c.raw._data.name, `$${c.raw.v}B`]
                    } 
                }];
                AppState.charts['budget'].update('none');
            };

            document.querySelectorAll('#budget .control-button').forEach(button => {
                button.addEventListener('click', (e) => {
                    document.querySelectorAll('#budget .control-button').forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');
                    AppState.budget.currentScenario = e.target.dataset.scenario;
                    update();
                });
            });
            update();
        },

        initTariffs: () => {
            const ctx = document.getElementById('tariffs-chart').getContext('2d');
            const data = Data.tariffsData;
            AppState.charts['tariffs'] = new Chart(ctx, { 
                type: 'treemap', 
                data: { 
                    datasets: [{ 
                        tree: data.tree, 
                        key: data.key, 
                        groups: ['name'], 
                        backgroundColor: data.color, 
                        labels: { 
                            display: true, 
                            color: '#fff', 
                            font: {size: 22}, 
                            formatter: (c)=>c.raw._data.name
                        } 
                    }] 
                }, 
                options: Charts.defaults 
            });
        },

        initRetaliation: () => {
            const ctx = document.getElementById('retaliation-chart').getContext('2d');
            AppState.charts['retaliation'] = new Chart(ctx, { type: 'treemap', data: { datasets: [] }, options: Charts.defaults });

            const update = () => {
                const period = AppState.retaliation.currentPeriod;
                const months = Object.keys(Data.treasuryDataByMonth);
                const currentData = Data.treasuryDataByMonth[months[0]];
                const periodIndex = Math.min(period, months.length - 1);
                const previousData = Data.treasuryDataByMonth[months[periodIndex]];
                
                const chartData = Object.keys(currentData).map(country => {
                    const value = currentData[country];
                    const prevValue = previousData[country] || value;
                    const change = value - prevValue;
                    const changePercent = prevValue !== 0 ? ((change / prevValue) * 100) : 0;
                    
                    let color;
                    if (changePercent > 1) color = 'var(--gain-strong)'; 
                    else if (changePercent > 0.1) color = 'var(--gain-medium)';
                    else if (changePercent < -1) color = 'var(--loss-strong)'; 
                    else if (changePercent < -0.1) color = 'var(--loss-medium)';
                    else color = 'var(--neutral)';
                    
                    return { 
                        name: country.replace(', Mainland', ''), 
                        value: value, 
                        group: Data.countryToGroup[country] || 'Outros', 
                        color: color, 
                        tooltip: `Posse: $${value.toFixed(1)}B\nVariação (${period}M): ${change.toFixed(1)}B (${changePercent.toFixed(2)}%)` 
                    };
                });

                AppState.charts['retaliation'].data.datasets = [{ 
                    tree: chartData, 
                    key: 'value', 
                    groups: ['group', 'name'], 
                    treeGroupLevels: 1, 
                    backgroundColor: (c) => c.raw?._data.color, 
                    labels: { 
                        display: true, 
                        color: '#fff', 
                        font: { family: 'Teko', size: (c) => c.raw.v > 500 ? 22 : 18 },
                        formatter: (c) => {
                            if (c.raw._data.group) return [c.raw._data.name, `$${c.raw.v.toFixed(0)}B`];
                            return c.raw.g.toUpperCase();
                        }
                    } 
                }];
                AppState.charts['retaliation'].update('none');
            };

            document.querySelectorAll('#retaliation .control-button').forEach(button => {
                button.addEventListener('click', (e) => {
                    document.querySelectorAll('#retaliation .control-button').forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');
                    AppState.retaliation.currentPeriod = parseInt(e.target.dataset.period);
                    update();
                });
            });
            update();
        }
    };

    // --- PONTO DE ENTRADA DA APLICAÇÃO ---
    UI.init();
});
