AOS.init();

const dataDaCopa = new Date("Jun 11, 2026 12:00:00");
const timeStampDaCopa = dataDaCopa.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteACopa = timeStampDaCopa - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    const segundoEmMs = 1000;

    const diasAteACopa = Math.floor(tempoAteACopa / diaEmMs);
    const horasAteACopa = Math.floor((tempoAteACopa % diaEmMs) / horasEmMs);
    const minutosAteACopa = Math.floor((tempoAteACopa % horasEmMs) / minutoEmMs);
    const segundosAteACopa = Math.floor((tempoAteACopa % minutoEmMs) / segundoEmMs);

    const dataAtual = new Date();
    let anosAteACopa = dataDaCopa.getFullYear() - dataAtual.getFullYear();
    let mesesAteACopa = dataDaCopa.getMonth() - dataAtual.getMonth();
    if (mesesAteACopa < 0) {
        anosAteACopa--;
        mesesAteACopa += 12;
    }
    if (dataAtual.getDate() > dataDaCopa.getDate()) {
        mesesAteACopa--;
    }

    document.getElementById('contador').innerHTML = `${anosAteACopa} anos ${mesesAteACopa} meses ${diasAteACopa % 30} dias ${horasAteACopa} horas ${minutosAteACopa} minutos ${segundosAteACopa} segundos`;

    if (tempoAteACopa < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);