let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function chance() { // my overly complicated solution
    if (Math.floor(Math.random() * 3 + 1) === 1) {
        return hands[0]
    } else if (Math.floor(Math.random() * 3 + 1) === 2) {
        return hands[1]
    } else {
        return hands[2]
    }
}

console.log(chance())

function getHand() { // scrimbas easy solution to the problem
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}

console.log(getHand())