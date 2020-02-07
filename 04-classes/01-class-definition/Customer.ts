class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirst: string, thLast: string) {
        this.firstName = theFirst;
        this.lastName = thLast;
    }

}

//create instanse

let myCustomer = new Customer("Stas", "Peshkur");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);