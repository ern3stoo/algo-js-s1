class pokemon{
    constructor( name, pv, atk,){
        this.name = name
        this.pv = pv
        this.atk = atk
    }

    attackPokémon(pokemon) {
        let domage = this.atk
        pokemon.pv -=domage
        console.log (this.name + "a ataqué" + pokémon.name + ", il lui reste"+ pokemon.pv +}
    }  
let Salameche = new pokemon("Salamèche", 60, 10 )
let Leviator = new pokemon("Léviator", 120, 50)
console.log(Salameche)
console.log(Leviator)

Salameche.attackPokemon(Leviator)
console.log(Leviator.pv)

while(Salameche.pv> 0 && Leviator.pv >0) {
Salameche.attackPokémon(Leviator)
if(Leviator.pv <= 0){
    break
}

Leviator.attackPokémon(Salameche)

if(Salameche.pv <= 0){

}
} 





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

