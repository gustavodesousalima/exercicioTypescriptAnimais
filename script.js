"use strict";
class Animal {
    constructor(nome, dataDeNascimento, sexo, idade, carnivoro, peçonhento) {
        this.nome = nome;
        this.dataDeNascimento = dataDeNascimento;
        this.sexo = sexo;
        this.idade = idade;
        this.carnivoro = carnivoro;
        this.peçonhento = peçonhento;
    }
    Movimentar() { }
    ;
    Comunicar() { }
    ;
    Alimentar() { }
    ;
}
class Mamifero extends Animal {
    constructor(nome, dataDeNascimento, sexo, idade, carnivoro, peçonhento, qtdeDeMamas, pelos, corDoPelo) {
        super(nome, dataDeNascimento, sexo, idade, carnivoro, peçonhento);
        this.qtdeDeMamas = qtdeDeMamas;
        this.pelos = pelos;
        this.corDoPelo = corDoPelo;
    }
    Amamentar() { }
    ;
}
class Reptil extends Animal {
    constructor(nome, dataDeNascimento, sexo, idade, carnivoro, peçonhento, temEscamas, temCasco) {
        super(nome, dataDeNascimento, sexo, idade, carnivoro, peçonhento);
        this.temEscamas = temEscamas;
        this.temCasco = temCasco;
    }
}
class Ave extends Animal {
    constructor(nome, dataDeNascimento, sexo, idade, carnivoro, peçonhento, rapina, corDaPena) {
        super(nome, dataDeNascimento, sexo, idade, carnivoro, peçonhento);
        this.rapina = rapina;
        this.corDaPena = corDaPena;
    }
}
class Papagaio extends Ave {
    constructor(nome, dataDeNascimento, sexo, idade, carnivoro, peçonhento, rapina, corDaPena, altitudeMaximaEmMetros, velocidadeDoVoo) {
        super(nome, dataDeNascimento, sexo, idade, carnivoro, peçonhento, rapina, corDaPena);
        this.altitudeMaximaEmMetros = altitudeMaximaEmMetros;
        this.velocidadeDoVoo = velocidadeDoVoo;
    }
    voar() {
        console.log(`${this.nome} está voando.`);
    }
    botar() {
        console.log(`${this.nome} botou!`);
    }
    chocar() {
        console.log(`${this.nome} chocou!`);
    }
    ciscar() {
        console.log(`${this.nome} ciscou!`);
    }
    Movimentar() {
        console.log(`${this.nome} movimentou!`);
    }
    Comunicar() {
        console.log(`Eu sou um ${this.nome}!`);
    }
    Alimentar() {
        console.log(`${this.nome} se alimentou!`);
    }
}
class Ornitorrinco extends Mamifero {
    constructor(nome, dataDeNascimento, sexo, idade, carnivoro, peçonhento, qtdeDeMamas, pelos, corDoPelo, viveEmTerra, mergulho, aguaDoce) {
        super(nome, dataDeNascimento, sexo, idade, carnivoro, peçonhento, qtdeDeMamas, pelos, corDoPelo);
        this.viveEmTerra = viveEmTerra;
        this.mergulho = mergulho;
        this.aguaDoce = aguaDoce;
    }
    botar() {
        console.log(`${this.nome} botou!`);
    }
    chocar() {
        console.log(`${this.nome} chocou!`);
    }
    ciscar() {
        console.log(`${this.nome} ciscou!`);
    }
    Movimentar() {
        console.log(`${this.nome} movimentou!`);
    }
    Comunicar() {
        console.log(`Eu sou um ${this.nome}!`);
    }
    Alimentar() {
        console.log(`${this.nome} se alimentou!`);
    }
    Amamentar() {
        console.log(`${this.nome} se amamentou!`);
    }
}
let papagaio = new Papagaio("Papagaio", new Date(2023, 5, 5, 14, 30, 0), "macho", 1, false, false, false, "Verde", 100, 50);
console.log(papagaio);
papagaio.chocar();
papagaio.botar();
papagaio.Alimentar();
papagaio.Comunicar();
papagaio.ciscar();
papagaio.Movimentar();
papagaio.voar();
