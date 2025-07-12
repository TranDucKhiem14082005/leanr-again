
// alert('can you see me?');


// confirm('Are you sure?');

// prompt('Ban ten la gi?');

// setTimeout(function() {
//     console.log('Hello, this is a delayed alert!');
// },1000); // Cau lenh nay se chay sau 1 giay

// setInterval(function () {
//     console.log('This message will repeat every 2 seconds ' + Math.random());
// },2000); // Cau lenh nay se chay lap lai sau moi 2 giay

//---------------------------------

/*
    Làm việc với chuỗi
    teamplet ting ES6
    var firstName = 'Tran';
    var lastName = 'Duc Khiem';
    
    
    var fullName = 'Tran Duc Khiem';
    // console.log(`Minh là ${fisrtName} ${lastName}`); // In ra: Minh là Tran Khiem
    
    console.log(fullName.length);
    console.log(fullName.indexOf('T'));
    console.log(fullName.indexOf('Khiem',4));
    console.log(fullName.lastIndexOf('Khiem'));
    
    // Cut string: cắt chuỗi.
    
    console.log(fullName.slice(0,4));
    
    console.log(fullName.replace('Khiem', 'KHIEM'));
    
    console.log(fullName.split(' ')); // Chia chuỗi thành mảng
    // Nó sẽ lấy điểm giống nhau để nó cắt
    
    console.log(fullName.trim()); // Xóa khoảng trắng ở đầu và cuối chuỗi
    
    console.log(fullName[10]); // Truy cập vào ký tự tại vị trí thứ 10 trong chuỗi,
    // và lấy chữ đó ra.
*/


/*

    Làm việc với Numbers

    var age = 19;
    var PI = 3.14421543;
    
    console.log(age.toString()); // Chuyển đổi số thành chuỗi
    console.log(PI.toFixed(2)); // Làm tròn số đến 2 chữ số thập phân
*/

/*

    Làm việc với mảng
    1. To String: Chuyển mảng thành chuỗi
    2. Join: Nối các phần tử trong mảng thành một chuỗi
    3. Pop: Xóa phần tử cuối cùng trong mảng
    4. Push: Thêm phần tử vào cuối mảng
    5. Shift: Xóa phần tử đầu tiên trong mảng
    6. Unshift: Thêm phần tử vào đầu mảng
    7. Splice: Xóa hoặc thay thế phần tử trong mảng
    8. Slice: Cắt mảng thành một mảng con
    9. Sort: Sắp xếp mảng
    10. Reverse: Đảo ngược thứ tự các phần tử trong mảng
    11. Concat: Nối hai mảng lại với nhau
    12. IndexOf: Tìm chỉ số của phần tử trong mảng
    var languages = [
        'JavaScript',
        'PHP',
        'Python',
        'Ruby'
    ];
    
    var languages2 = [
        'C',
        'C#',
        'JAVA'
    ]
    
    console.log(languages.slice(1,4)); // lấy phần từ trong mảng ra
    
    console.log(languages.toString()); // Chuyển mảng thành chuỗi
    
    console.log(languages.join(' '));
    
    console.log(languages.pop()); // xóa phần tử cuối cùng của mảng.
    
    console.log(languages.push('Dart'));
    console.log(languages);
    
    console.log(languages.shift());
    console.log(languages);
    console.log(languages.unshift('Java'));
    console.log(languages);
    
    languages.splice(1,0,'JavaScript');
    
    console.log(languages);
    
    console.log(languages.concat(languages2));

*/    


/*

// Hàm function in JavaScript

// function showMessage(value) {
//     console.log(value);
// }

// showMessage('hello everyone');

// function writeLog() {
//     var myString ='';
//     for(var tenbien of arguments) {
//         myString += tenbien + ', ';

//     }

//     console.log(myString);
// }

// writeLog(1, 2, 3, 4, 5, 6)


// function declaration

// function sayHello(name) {
//     return console.log(`Hello, ${name}`);
// }

// sayHello('Khiem')


// // function expression

// var showMessage = function(value) {
//     console.log(value);
// }

// showMessage('Hello mọi người')
*/

// var isMale = 'male';

// var myInfo = {
//     name: "Tran Duc Khiem",
//     age: 19,
//     [isMale]: true
// }

// myInfo['email'] = 'Khiemtran@gmail.com'

// myInfo.phone = '3213213123';
// console.log(myInfo);

// console.log(myInfo.name);

// delete myInfo.name

function User(firsrtName, lastName, avatar) {
    this.firsrtName = firsrtName;
    this.lastName = lastName;
    this.avatar = avatar;
}

User.prototype.className = 'F8'; //Them một thuộc tính
//vào trong Object 

User.prototype.getavatar = function() {
    return this.avatar;
}

var user = new User('Tran Duc', 'khiem', 'conGau')

console.log(user.getavatar());