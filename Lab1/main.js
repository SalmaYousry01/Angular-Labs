var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x = 5;
console.log(x);
var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.debitAmount = function () { };
    Account.prototype.creditAmount = function () { };
    Account.prototype.getBalance = function () { };
    Object.defineProperty(Account.prototype, "AccountNumber", {
        get: function () {
            return this.Acc_no;
        },
        set: function (accNumber) {
            this.Acc_no = accNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "BalanceValue", {
        get: function () {
            return this.Balance;
        },
        set: function (BalanceNumber) {
            this.Balance = BalanceNumber;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(Interest_rate) {
        if (Interest_rate === void 0) { Interest_rate = 1000; }
        var _this = _super.call(this) || this;
        _this.Interest_rate = Interest_rate;
        return _this;
    }
    CurrentAccount.prototype.addCustomer = function () { };
    ;
    CurrentAccount.prototype.removeCustomer = function () { };
    ;
    return CurrentAccount;
}(Account));
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(Min_Balance) {
        if (Min_Balance === void 0) { Min_Balance = 1000; }
        var _this = _super.call(this) || this;
        _this.Min_Balance = Min_Balance;
        return _this;
    }
    SavingAccount.prototype.addCustomer = function () { };
    ;
    SavingAccount.prototype.removeCustomer = function () { };
    ;
    return SavingAccount;
}(Account));
