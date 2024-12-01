AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00") //Cria uma data no formato que o computador entende. O new Date() transforma essa strinf em um "objeto data", que podemos usar para calcular diferenças de tempo
const timeStampDoEvento = dataDoEvento.getTime(); //Converte a data do evento para um timestamp, que é o número de milissegundos.

const contaAsHoras = setInterval(function() { //Executa uma função repetidamente, a cada 1 segundo
    const agora = new Date(); //new Date() pega o momento exato em que o código está sendo executado
    const timeStampAtual = agora.getTime(); //getTime() converte a data atual em um timestamp

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual; //Calcula quantos millessegundos faltam para o evento acontecer

    const diaEmMs = 1000 * 60 * 60 * 24;      //converte milessegundos 
    const horaEmMs = 1000 * 60 * 60;          //para valores que
    const minutoEmMs = 1000 * 60             // entendemos

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);                      
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s` //Atualiza o conteúdo de um elemento HTML com o ID contador

    if (distanciaAteOEvento < 0){                //Verifica se o evento expirou
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000)  //Define que a função será repetida a cada 1 segundo

