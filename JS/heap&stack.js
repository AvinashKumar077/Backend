//Stack(premitive types) & Heap(reference types or non-primitive types)

//this is the example of stack
let acountName = "Martin"

let accountTwo = acountName

accountTwo = "Martin2"

console.table({ acountName, accountTwo })

//this is the example of heap
let user = { name: "Martin" }
let userTwo = user
userTwo.name = "Martin2"
console.table({ user, userTwo })