var x = 5;
console.log(x);

class Account {
    private Acc_no;
    private Balance;

    constructor(){}


    debitAmount(){}
    creditAmount(){}
    getBalance(){}

    get AccountNumber(){
        return this.Acc_no;
    }

    set AccountNumber(accNumber){
        this.Acc_no = accNumber;
    }

    get BalanceValue(){
        return this.Balance;
    }

    set BalanceValue(BalanceNumber){
        this.Balance = BalanceNumber;
    }

}



interface IAccount{
    Date_of_opening:string;

    addCustomer();
    removeCustomer();
}


class CurrentAccount extends Account implements IAccount{
    Date_of_opening:string;
    Interest_rate:number;

    constructor(Interest_rate = 1000) {
        super();
        this.Interest_rate = Interest_rate;
    }

    addCustomer(){};
    removeCustomer(){};
}

class SavingAccount extends Account implements IAccount{
    Date_of_opening:string;
    Min_Balance:number;

    constructor(Min_Balance = 1000) {
        super();
        this.Min_Balance = Min_Balance;
    }

    addCustomer(){};
    removeCustomer(){};
}



