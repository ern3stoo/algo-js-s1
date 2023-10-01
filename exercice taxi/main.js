class personnage{
    constructor ( name, pv){
        this.name = name
        this.pv = pv
    }

    trajet(playlist){
        var taxiChange = 0
        var redLight = 0
        

        while (redLight< 30 && this.pv > 0){
            redLight ++
            console.log ( " Il a passé " + redLight + " feux rouges " )

            let random  =  Math.floor(Math.random() * 5)
            let shufflePlaylist  =  playlist[random]

            if(shufflePlaylist ==="Wejdenne - Anissa"){
                this.pv-= 1
                taxiChange ++
            
            console.log ( "John a les oreilles en feu à cause de la chanson..." )
            console.log ( "Il a changé de taxi " + taxiChange + " fois." )

            if(this.pv === 0){
                console.log ("John est dead")
                break
            }
            if( redLight === 30){
                console.log ( "John est arrivé à destination. Il a changé de taxi " + taxiChange + " fois. Et il lui reste " + this.pv + " PV.")
                break 
            }
        }
    }
    }
}
let John = new personnage("John", 10)
console.log (John)

let tableau = ["Wejdenne - Anissa","U2 - With Or Without You","The Weeknd - Save you tears", "Lana del rey - Young and beautiful", "Abdel - Habibi"]

John.trajet(tableau)