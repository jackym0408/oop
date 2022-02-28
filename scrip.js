class pokemon{
    constructor(name, type, attack){
        this.name = name,
        this.type = type,
        this.attack = attack
    }

    useAttack = () =>{
        console.log(`${this.name}, used ${this.attack}`)
    }
};

let bulbasaur = new pokemon("Bulbasaur", "grass","tackle");

let lapras = new pokemon("Lapras", "water", "water gun");

bulbasaur.useAttack();
lapras.useAttack();