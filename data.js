// data.js

const Data = {
    budgetScenarios: {
        trump: { 
            tree: [ 
                { name: "Defesa Geral", value: 830, color: 'var(--color-defense)', tooltip: "Pentágono: $830B" }, 
                { name: "Guerra Interna (ICE)", value: 178, color: 'var(--color-ice)', tooltip: "ICE: $178B" }, 
                { name: "Ajuda a Aliados", value: 40, color: 'var(--color-foreign-aid)', tooltip: "Israel, OTAN, Ucrânia: $40B" } 
            ], 
            key: 'value' 
        }, 
        harris: { 
            tree: [ 
                { name: "Defesa Geral", value: 750, color: 'var(--color-defense)', tooltip: "Pentágono: $750B" }, 
                { name: "Ajuda a Aliados", value: 80, color: 'var(--color-foreign-aid)', tooltip: "Ucrânia/OTAN: $80B" }, 
                { name: "Tecnologia/Diplomacia", value: 45, color: 'var(--color-tech)', tooltip: "Soft Power: $45B" }, 
                { name: "Controle de Fronteira", value: 30, color: 'var(--color-ice)', tooltip: "ICE: $30B" } 
            ], 
            key: 'value' 
        } 
    },
    tariffsData: { 
        tree: [ 
            { name: 'China', impact: 100, tooltip: "Guerra Fria Tecnológica" }, 
            { name: 'U. Europeia', impact: 60, tooltip: "Subjugação de Aliados" }, 
            { name: 'Brasil', impact: 40, tooltip: "Coerção Exemplar" }, 
            { name: 'Índia', impact: 30, tooltip: "Contenção Preventiva" } 
        ], 
        key: 'impact', 
        color: 'var(--color-rivals)' 
    },
    treasuryDataByMonth: { 
        "2025-05": { "Japan": 1135.0, "United Kingdom": 809.4, "China, Mainland": 756.3, "Cayman Islands": 441.3, "Canada": 430.1, "Belgium": 415.5, "Luxembourg": 412.6, "France": 375.1, "Ireland": 327.3, "Switzerland": 303.7, "Taiwan": 292.9, "India": 235.3, "Brazil": 212.1, "Germany": 101.9 }, 
        "2025-04": { "Japan": 1134.5, "United Kingdom": 807.7, "China, Mainland": 757.2, "Cayman Islands": 448.3, "Canada": 368.4, "Belgium": 411.0, "Luxembourg": 410.9, "France": 360.6, "Ireland": 339.9, "Switzerland": 310.9, "Taiwan": 298.8, "India": 232.5, "Brazil": 212.0, "Germany": 110.4 }, 
        "2025-03": { "Japan": 1130.8, "United Kingdom": 779.3, "China, Mainland": 765.4, "Cayman Islands": 455.3, "Canada": 426.2, "Belgium": 402.1, "Luxembourg": 412.4, "France": 363.1, "Ireland": 329.3, "Switzerland": 311.6, "Taiwan": 297.8, "India": 239.9, "Brazil": 208.4, "Germany": 111.4 }, 
        "2025-02": { "Japan": 1125.9, "United Kingdom": 750.3, "China, Mainland": 784.3, "Cayman Islands": 417.8, "Canada": 406.1, "Belgium": 394.7, "Luxembourg": 412.4, "France": 354.0, "Ireland": 339.0, "Switzerland": 290.8, "Taiwan": 294.8, "India": 228.0, "Brazil": 207.3, "Germany": 103.8 }, 
        "2025-01": { "Japan": 1079.3, "United Kingdom": 740.2, "China, Mainland": 760.8, "Cayman Islands": 408.6, "Canada": 350.8, "Belgium": 377.7, "Luxembourg": 409.9, "France": 335.4, "Ireland": 329.7, "Switzerland": 301.2, "Taiwan": 290.5, "India": 225.7, "Brazil": 199.4, "Germany": 105.5 }, 
        "2024-12": { "Japan": 1061.5, "United Kingdom": 722.8, "China, Mainland": 759.0, "Cayman Islands": 422.9, "Canada": 378.8, "Belgium": 374.6, "Luxembourg": 423.9, "France": 332.3, "Ireland": 339.4, "Switzerland": 298.7, "Taiwan": 282.5, "India": 219.1, "Brazil": 201.6, "Germany": 97.0 }, 
        "2024-11": { "Japan": 1087.1, "United Kingdom": 766.9, "China, Mainland": 768.6, "Cayman Islands": 405.3, "Canada": 372.4, "Belgium": 361.3, "Luxembourg": 417.8, "France": 332.5, "Ireland": 343.1, "Switzerland": 298.7, "Taiwan": 286.0, "India": 234.0, "Brazil": 229.0, "Germany": 99.9 }, 
        "2024-10": { "Japan": 1101.6, "United Kingdom": 746.5, "China, Mainland": 760.1, "Cayman Islands": 418.3, "Canada": 363.7, "Belgium": 349.6, "Luxembourg": 413.5, "France": 330.1, "Ireland": 336.7, "Switzerland": 297.9, "Taiwan": 287.9, "India": 241.4, "Brazil": 228.8, "Germany": 102.3 }, 
        "2024-09": { "Japan": 1095.5, "United Kingdom": 769.3, "China, Mainland": 772.0, "Cayman Islands": 424.6, "Canada": 367.9, "Belgium": 366.6, "Luxembourg": 407.1, "France": 328.9, "Ireland": 356.2, "Switzerland": 305.5, "Taiwan": 291.1, "India": 247.2, "Brazil": 234.6, "Germany": 103.8 }, 
        "2024-08": { "Japan": 1106.0, "United Kingdom": 749.2, "China, Mainland": 774.6, "Cayman Islands": 424.2, "Canada": 362.9, "Belgium": 325.0, "Luxembourg": 395.7, "France": 312.5, "Ireland": 350.9, "Switzerland": 299.3, "Taiwan": 287.1, "India": 245.9, "Brazil": 233.3, "Germany": 99.1 }, 
        "2024-07": { "Japan": 1093.5, "United Kingdom": 733.5, "China, Mainland": 776.5, "Cayman Islands": 380.1, "Canada": 375.3, "Belgium": 315.9, "Luxembourg": 389.3, "France": 291.1, "Ireland": 341.2, "Switzerland": 289.4, "Taiwan": 277.3, "India": 238.8, "Brazil": 229.1, "Germany": 104.9 }, 
        "2024-06": { "Japan": 1091.4, "United Kingdom": 746.5, "China, Mainland": 780.2, "Cayman Islands": 326.3, "Canada": 372.5, "Belgium": 318.0, "Luxembourg": 374.2, "France": 305.4, "Ireland": 336.1, "Switzerland": 287.4, "Taiwan": 267.9, "India": 241.9, "Brazil": 227.0, "Germany": 90.8 }, 
        "2024-05": { "Japan": 1106.0, "United Kingdom": 728.6, "China, Mainland": 768.3, "Cayman Islands": 342.7, "Canada": 356.3, "Belgium": 313.0, "Luxembourg": 367.3, "France": 283.0, "Ireland": 336.8, "Switzerland": 290.5, "Taiwan": 265.4, "India": 237.8, "Brazil": 223.2, "Germany": 91.3 } 
    },
    countryToGroup: { "Japan": "Aliados", "United Kingdom": "Aliados", "Canada": "Aliados", "France": "Aliados", "Taiwan": "Aliados", "Germany": "Aliados", "China, Mainland": "Rivais", "India": "Rivais", "Brazil": "Rivais", "Cayman Islands": "Offshore", "Belgium": "Offshore", "Luxembourg": "Offshore", "Ireland": "Offshore", "Switzerland": "Offshore" }
};
