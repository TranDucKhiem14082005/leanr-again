
// OOP - Object Oriented Programming



// /// KE THUA (enheritance)

// class Animal {
//     constructor(name) {  
//         this.name = name;
//     }

//     speak() {
//         return console.log(`this is: ${this.name} makes a noise.`);
//     }   
// }

// /// ke thua (enheritance)
// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }

//     speak() {
//         return `${super.speak()} Woof Woof!`;
//     }
// }

// const dog = new Dog('Rex');
// console.log(dog.name);
// dog.speak(); // this is: Rex makes a noise. Woof Woof!

//****************** */



// Polymorphism: DA HINH
// Chung ta co the dinh nghia nhieu phuong thuc cung ten trong cac lop khac nhau.
// class Animal { 
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         return console.log('Animal makes a noise.');
//     }
// }

// class Dog extends Animal {
//     constructor(name){
//         super(name);
//     }
//     speak() {
//         return console.log(`Dog: ${this.name} makes a noise. Woof Woof!`);
//     }
// }

// const dog = new Dog('Rex');
// dog.speak();



// Encapsulation: DONG GOI

// class Animal {
//     #name;

//     constructor(name) {
//         this.#name = name;
//     }

//     getName() {
//         return console.log(`Animal name is : ${this.#name}`);
//     }
// }

// const cat = new Animal('Cat');
// cat.getName();


//Abstraction: TRUU TUONG


class Order {
    constructor(orderID,customerName) {
        this.orderID = orderID ;
        this.customerName = customerName;
    }

    placeOrder() {
        this.#prepareOrder();
        this.#processPayment();
        this.#shipOrder();

        //Ghi ma khach hang da dat hang, thi minh chi hien thi
        // thong tin dat don hang co thanh cong hay khong
        // Con` nhung phuong thuc kia minh se khong hien thi
        // vi chung la nhung phuong thuc Private. Va KH cung kh can phai biet
        console.log('Don hang da duoc dat thanh cong!');
    }

    //Tao ra cac phuong thuc de xu ly don hang nhung Private

    #prepareOrder() {
        console.log(`Chuan bi don han ${this.orderID} cho ${this.customerName}`);
    }
    #processPayment() {
        console.log(`Xu ly thanh toan don hang ${this.orderID} cho ${this.customerName}`);
    }
    #shipOrder() {
        console.log(`Giao don hang ${this.orderID} den ${this.customerName}`);
    }
}

const myOrder = new Order(123, 'Tran Duc Khiem');
myOrder.placeOrder();