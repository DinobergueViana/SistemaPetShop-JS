const listaDePets = require('../listaDePets.json')

// cria um novo pet
const adicionarPet = (rga, nome) => {
    console.log(rga)
    let pet = {
        rga,
        nome
    }
    listaDePets.push(pet);
    console.log(listaDePets);
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
const buscarPet = (lista, rga) => {
    let resultado = "";
    let petAchado = lista.find(
        (pet) => (pet.rga == rga)
    );
    if(petAchado){
        resultado = "Pet encontrado com sucesso!\n"
        console.log(resultado);
        for(var dado in petAchado){
            resultado += dado.toUpperCase() + ": " + petAchado[dado] + "\n";            
        }
    }else{
        resultado = "Pet não encontrado. O rga não consta em nossos dados."
    }

    return resultado;
    
}

// realiza os serviços castrar e vacinar;
const servicos = (pet, tipoDeServico) => {
    console.log("Iniciando serviço...")
    tipoDeServico(pet);
}

// exibe os dados do pet
const listarPets = (lista) => {

    let petString = "";
    lista.forEach(valor =>{
        petString += valor.nome + "-----"
        
    })

    return petString;
    // lista.forEach(pet => {
    //     console.log("Nome do pet: " + pet.nome);
    //     console.log("Idade do pet: " + pet.idade);
    //     console.log("Raça do pet: " + pet.raca);
    //     console.log("Sexo: " + pet.sexo);
    //     console.log("Castrado: " + pet.castrado);
    //     console.log("Vacidado: " + pet.vacinado);
    //     console.log("Cuidador: " + pet.cuidador);
    // });
}

module.exports = {adicionarPet,listarPets,buscarPet,castrarPet,vacinarPet,servicos}