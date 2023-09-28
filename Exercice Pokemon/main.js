class pokemon{
    constructor( name, pv, atk,){
        this.name = name
        this.pv = pv
        this.atk = atk
       
    }

    attackPokémon(truc){
        truc.pv -= this.atk

    }

}

let Salameche = new pokemon("Salamèche", 60, 10 )
let Leviator = new pokemon("Léviator", 120, 50 )
console.log(Salameche)
console.log(Leviator)


class attack{
    constructor( name, degat){
        this.name = name 
        this.degat = degat

    }

    attackPokémon(truc){
        truc.name -=this.dégat
    }
}

let Flammeche = new attack("Flammeche", 10)
let Surf = new attack("Surf",50)
console.log(Flammeche)
console.log(Surf)

