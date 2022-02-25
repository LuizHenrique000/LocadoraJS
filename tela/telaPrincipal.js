let tl = require('prompt-sync')();
function imprimirTela() {
    console.log("__________TELA DE MENU____________");
    console.log("| Digite 1 para Tela de Veículos |");
    console.log("| Digite 2 para Tela de Clientes |");
    console.log("| Digite 3 para Tela de Locações |");
    console.log("| Digite 0 para Encerrar         |");
    console.log("----------------------------------");
    let opcao = tl();

    if (opcao == 1) {
        console.log("Tela de veiculos");
    } else if (opcao == 2) {
        console.log("Tela de clientes");
    } else if (opcao == 3) {
        console.log("Tela de locações");
    } else if (opcao == 0) {
        console.log("Fim do programa")
    }

}
imprimirTela();
