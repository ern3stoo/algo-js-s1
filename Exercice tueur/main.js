class killer{
    constructor( name, pv){
        this.name = name 
        this.pv = pv
    }
    attackKiller(killer) {
        let domage = this.atk
        survivor.pv-= domage
        
    }
}

let Jason = new killer( "Jason", 100)



class survivor{
    constructor ( name, pv, probDeath, probAttack, probDeadandAttack){
        this.name = name 
        this.pv = pv
        this.probDeath = probDeath
        this.probAttack = probAttack
        this.probDeadandAttack = probDeadandAttack

    }
    
    
}
let personnage = ["Juliette", "Kevin","Jennifer","Sofia","Mohamed"]
let caracteristique = ["Blonde","Sportif","Nerd","Deleguer","Brut"]
console.log (caracteristique)
let proba = [0.3, 0.5, 0.2]
let suffleSurvivor = personnage

let survivorOne = new survivor (personnage[Math.random], 30, proba[Math.random], proba[Math.random], proba[Math.random])
let survivorTwo = [30]
let survivorThree = 
let survivorFour =
let survivorFive =