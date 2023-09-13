abstract class Animal {
    nome: string;
    dataDeNascimento: Date;
    sexo: string;
    idade: number;
    carnivoro: boolean;
    peçonhento: boolean;

    constructor(
        nome: string,
        dataDeNascimento: Date,
        sexo: string,
        idade: number,
        carnivoro: boolean,
        peçonhento: boolean
    ) {
        this.nome = nome;
        this.dataDeNascimento = dataDeNascimento;
        this.sexo = sexo;
        this.idade = idade;
        this.carnivoro = carnivoro;
        this.peçonhento = peçonhento;
    }

    Movimentar(): void { };
    Comunicar(): void { };
    Alimentar(): void { };
}

class Mamifero extends Animal {
    qtdeDeMamas: number;
    pelos: boolean;
    corDoPelo: string;

    constructor(
        nome: string,
        dataDeNascimento: Date,
        sexo: string,
        idade: number,
        carnivoro: boolean,
        peçonhento: boolean,
        qtdeDeMamas: number,
        pelos: boolean,
        corDoPelo: string
    ) {
        super(nome, dataDeNascimento, sexo, idade, carnivoro, peçonhento);
        this.qtdeDeMamas = qtdeDeMamas;
        this.pelos = pelos;
        this.corDoPelo = corDoPelo;
    }

    Amamentar(): void { };
}

class Reptil extends Animal {
    temEscamas: boolean;
    temCasco: boolean;

    constructor(
        nome: string,
        dataDeNascimento: Date,
        sexo: string,
        idade: number,
        carnivoro: boolean,
        peçonhento: boolean,
        temEscamas: boolean,
        temCasco: boolean
    ) {
        super(nome, dataDeNascimento, sexo, idade, carnivoro, peçonhento);

        this.temEscamas = temEscamas;
        this.temCasco = temCasco;
    }
}

class Ave extends Animal {
    rapina: boolean;
    corDaPena: string;

    constructor(
        nome: string,
        dataDeNascimento: Date,
        sexo: string,
        idade: number,
        carnivoro: boolean,
        peçonhento: boolean,
        rapina: boolean,
        corDaPena: string,
    ) {
        super(nome, dataDeNascimento, sexo, idade, carnivoro, peçonhento);

        this.rapina = rapina;
        this.corDaPena = corDaPena;
    }
}

interface IOviparo {
    botar(): void;
    chocar(): void;
}

interface IVoar {
    voar(): void;
    altitudeMaximaEmMetros: number;
    velocidadeDoVoo: number;
}

interface IAquatico {
    viveEmTerra: boolean;
    mergulho: boolean;
    aguaDoce: boolean;
}

class Papagaio extends Ave implements IOviparo, IVoar {
    altitudeMaximaEmMetros: number;
    velocidadeDoVoo: number;

    constructor(
        nome: string,
        dataDeNascimento: Date,
        sexo: string,
        idade: number,
        carnivoro: boolean,
        peçonhento: boolean,
        rapina: boolean,
        corDaPena: string,
        altitudeMaximaEmMetros: number,
        velocidadeDoVoo: number
    ) {
        super(nome, dataDeNascimento, sexo, idade, carnivoro, peçonhento, rapina, corDaPena);
        this.altitudeMaximaEmMetros = altitudeMaximaEmMetros;
        this.velocidadeDoVoo = velocidadeDoVoo;
    }

    voar() {
        console.log(`${this.nome} está voando.`);
    }

    botar() {
        console.log(`${this.nome} botou!`)
    }

    chocar() {
        console.log(`${this.nome} chocou!`)
    }

    ciscar() {
        console.log(`${this.nome} ciscou!`)
    }

    Movimentar() {
        console.log(`${this.nome} movimentou!`)
    }

    Comunicar() {
        console.log(`Eu sou um ${this.nome}!`)
    }

    Alimentar() {
        console.log(`${this.nome} se alimentou!`)
    }
}

class Ornitorrinco extends Mamifero implements IOviparo, IAquatico {

    viveEmTerra: boolean;
    mergulho: boolean;
    aguaDoce: boolean;

    constructor(
        nome: string,
        dataDeNascimento: Date,
        sexo: string,
        idade: number,
        carnivoro: boolean,
        peçonhento: boolean,
        qtdeDeMamas: number,
        pelos: boolean,
        corDoPelo: string,
        viveEmTerra: boolean,
        mergulho: boolean,
        aguaDoce: boolean
    ) {
        super(nome, dataDeNascimento, sexo, idade, carnivoro, peçonhento, qtdeDeMamas, pelos, corDoPelo)
        this.viveEmTerra = viveEmTerra;
        this.mergulho = mergulho;
        this.aguaDoce = aguaDoce;
    }

    botar() {
        console.log(`${this.nome} botou!`)
    }

    chocar() {
        console.log(`${this.nome} chocou!`)
    }

    ciscar() {
        console.log(`${this.nome} ciscou!`)
    }

    Movimentar() {
        console.log(`${this.nome} movimentou!`)
    }

    Comunicar() {
        console.log(`Eu sou um ${this.nome}!`)
    }

    Alimentar() {
        console.log(`${this.nome} se alimentou!`)
    }

    Amamentar() {
        console.log(`${this.nome} se amamentou!`)
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