//Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.

let dataAtual = new Date;
let dataEvento = new Date("2021, 11, 20");

console.log("Insira a data do evento:")
if (dataEvento > dataAtual) {
    console.log("Data cadastrada com sucesso!")
} else {
    console.log("Data inválida! A data do evento deve ser posterior à data atual.")
}

//Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

let idadeParticipante = 26;

if (idadeParticipante >= 18) {
    console.log("Cadastro efetuado com sucesso!")
} else {
    console.log("Cadastro negado! O participante deve ter 18 anos ou mais.")
}

//Listar participantes e palestrantes por evento.

let listaParticipantes = [" Mauro Luiz de Lima", " Nilce Moretto", " killua zoldyck", " Rafael Moreira", " Pamela Golveia", " André Galo", " Lucas Silva e Silva", " Luiz Inácio", " Carolina Viena"];
let listaPalestrantes = [" Romulo Almeida", " Cristiane Salvador", " Carlos Saganni"];

console.log("Lista de participantes: " + listaParticipantes);
console.log("Lista de palestrantes: " + listaPalestrantes);


//Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.

let nomeParticipante = "Renato Zanim"

if (listaParticipantes.length < 100) {
    console.log("Idade do participante:")
    if (idadeParticipante >= 18) {
        console.log("✓")
        console.log("Insira o nome do participante:")
        if (nomeParticipante !== undefined){
            console.log("Participante" + " \"" + nomeParticipante + "\" " + "cadastrado!")
            listaParticipantes.push(nomeParticipante)
            console.log("Lista de participantes:" + listaParticipantes)
            console.log("Número de participantes:" + listaParticipantes.length)

        }
    } else {
        console.log("Cadastro negado! O participante deve ter 18 anos ou mais.")
    }
} else {
    console.log("Cadastro negado! O número de participantes chegou ao limite.")
}