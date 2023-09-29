let a =  "Paul"
let b = "george"

function checkName(firstName, secondName){
    if (firstName === secondName) {
        return true 
    } else{
        return false
    }
}

let result = checkName(a, b)
console.log(result)




let F = 10
let O = 5
let Q = 3
let somme = calcul( F, O, Q)

function calcul(number1, number2, number3){
    return number1 * number2 - number3
}
console.log(somme)