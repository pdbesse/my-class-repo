function MiniBank(balance=15) {
  this.placeholder = assignValue();//nope => assignValueis not defined
  this.balance = balance;
  this.statement = [balance];
  this.getBalance = function() {
    return this.balance;
  },
  this.doYourStuff = function(){
    return "Yep Yep Yep";
  },
  this.setBalance = function(value) {
    this.balance = value;
  },
  this.updateStatement = function(value) {
    this.statement.push(value);
  },
  this.getStatement = function () {
    return this.statement.slice(0);
  },
  this.printStatement = function() {
    var statement = this.getStatement();
    for (var i = 0; i < statement.length; i++) {
      console.log(`${i + 1}. ${statement[i]}`);
    }
  },
  this.deposit = function(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("'value' must be a positive number!");
    }
    var newBalance = this.getBalance() + value;
    this.setBalance(newBalance);
    this.updateStatement(newBalance);
    console.log(`Deposited ${value}!`);
  },
  this.withdraw = function(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("'value' must be a positive number");
    }
    var newBalance = this.getBalance() - value;
    if (newBalance < 0) {
      throw new Error("Insufficient funds for this transaction");
    }
    this.setBalance(newBalance);
    this.updateStatement(-value);
    console.log(`Withdrew ${value}!`);
  },
  this.printBalance = function() {
    console.log(`Balance: ${this.getBalance()}`);
  };
}


var myBank = new MiniBank(0);
myBank.printBalance();

myBank.deposit(85);
myBank.printBalance();

myBank.withdraw(20);
myBank.printBalance();

myBank.printStatement();

var yourBank = new MiniBank();

console.log(yourBank);
