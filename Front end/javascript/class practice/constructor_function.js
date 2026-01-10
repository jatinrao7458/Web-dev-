function bank(accountNumber,balance){
    this.accountNumber=accountNumber
    this.balance=balance
    this.deposit=function(deposit){
        this.balance=deposit+this.balance
    }
    this.withdraw=function(withdraw){
        this.balance=this.balance-withdraw
    }

}
let first_account= new bank(4676856,20000)
// console.log(first_account);
first_account.deposit(1000)
console.log(first_account.balance);
first_account.withdraw(2000)
console.log(first_account.balance);
