const accountId = 1234
let accountName = "Savings Account"
var accountBalance = "1000"
let accountType;

// do not use var keyword to declare variables only use const and let
// var is not recommended to use because of the issue in block scope and function scope

//console.log() for single variable print
console.log(accountId)
//console.table() for multiple variable print
console.table({ accountId, accountName, accountBalance, accountType })