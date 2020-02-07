class Customer {
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, thLast: string) {
        this._firstName = theFirst;
        this._lastName = thLast;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }
}

//create instance

let myCustomer = new Customer("Stas", "Peshkur");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);