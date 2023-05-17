// generate random numbers to select random messages
let randNumOne = Math.floor(Math.random()*3);
let randNumTwo = Math.floor(Math.random()*3);
let randNumThree = Math.floor(Math.random()*3);

//Object that generates message
const affirmPhrase = {
youAre: ['a strong and powerful person', 'a wise and kind soul', 'a resilient and patient person' ],
youHave: ['the strength to persist', 'the courage to be vulnerable', 'the patience of a saint' ],
youWill: ['not only survive, but also thrive', 'be the difference in someones life', 'shine and illuminate during dark days' ],

message () {
    console.log(`You are ${this.youAre[randNumOne]}. You have ${this.youHave[randNumTwo]}. You will ${this.youWill[randNumThree]}.`)

}

}

//console.log(randNumOne)
//console.log(randNumTwo)
//console.log(randNumThree)
console.log(affirmPhrase.message())