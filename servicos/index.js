// cria um novo pet
const adicionarPet = (nome, idade, raca, sexo, cuidador, castrado, vacinado, rga) => {
    let pet = {
        nome,
        idade,
        raca,
        sexo,
        cuidador,
        castrado,
        vacinado,
        rga
    }
    listaDePets.push(pet);
}

// castra o pet
const castrarPet = pet => {
    if(pet.castrado){
        return console.log("Pet já castrado...")
    }
    pet.castrado = true;
    console.log("Pet castrado com sucesso!");
};

//vacina o pet
const vacinarPet = pet => {
    if(pet.vacinado){
        return console.log("Pet já vacinado...")
    }
    pet.vacinado = true;
    console.log("Pet vacinado com sucesso!");
}

// verifica se o Pet está cadastrado;
const buscarPet = (rga) => {
    let petEcontrado = listaDePets.filter((pet) => pet.rga == rga);
    return petEcontrado.length > 0;
}

// realiza os serviços castrar e vacinar;
const servicos = (pet, tipoDeServico) => {
    console.log("Iniciando serviço...")
    tipoDeServico(pet);
}

// exibe os dados do pet
const listarPets = () => {

    listaDePets.forEach(pet => {
        console.log("Nome do pet: " + pet.nome);
        console.log("Idade do pet: " + pet.idade);
        console.log("Raça do pet: " + pet.raca);
        console.log("Sexo: " + pet.sexo);
        console.log("Castrado: " + pet.castrado);
        console.log("Vacidado: " + pet.vacinado);
        console.log("Cuidador: " + pet.cuidador);
    })
}

module.exports = {adicionarPet,listarPets,buscarPet,castrarPet,vacinarPet,servicos}