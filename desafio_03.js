// Instruções para entrega
// # 3️⃣ Escrevendo as classes de um Jogo

// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada
// Definindo a classe Heroi

// Definindo a classe Heroi


// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    // Método para atacar
    atacar() {
        let ataque
        if (this.tipo === 'mago') {
            ataque = 'magia'
        } else if (this.tipo === 'guerreiro') {
            ataque = 'espada'
        } else if (this.tipo === 'monge') {
            ataque = 'artes marciais'
        } else if (this.tipo === 'ninja') {
            ataque = 'shuriken'
        } else {
            ataque = 'um ataque desconhecido'
        }
        console.log(`O herói ${this.nome}(Idade = ${this.idade}), classificado como ${this.tipo} atacou usando ${ataque}`)
    }
}

// Exemplo de uso da classe Heroi
const mago = new Heroi('Merlin', 50, 'mago')
const guerreiro = new Heroi('José', 35, 'guerreiro')
const monge = new Heroi('Jack', 40, 'monge')
const ninja = new Heroi('João', 30, 'ninja')

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()