
// var fullName = "Tran Duc Khiem";
// var age = 19;

// alert(fullName);
// alert(age);

/*
Gioi thieu moi so ham built-in;
    1. Alert: Hien thi thong bao
    2. Console:
    3. Confirm: gia tri truyen vao la messsage, tra ve true neu nhan OK, false neu nhan Cancel
    4. Prompt:
    5. SetTimeout: 
        Hai tham số được truyền vào: tham so đầu là func, tham so thứ hai là thời gian delay (ms).
        Sau khi hết thời gian delay, hàm sẽ được thực thi.
    6. SetInterval:
    Hai tham số được truyền vào: tham so đầu là func, tham so thứ hai là khoảng thời gian.
    Hàm này có nghĩa là tham số thứ nhất sẽ thực hiện liên tục sau một khoảng thời gian nào đó.


*/

// console.log("Hello world");

// confirm("Are you sure?");

// prompt("What is your name?");

// setInterval(function() {
//     console.log("This is a delayed message after 1 second.");
// }, 1000);

// -----------------------------------

/*
    Toán tử số học:
+       --> Cộng
-       --> Trừ
*       --> Nhân
/       --> Chia
%       --> Chia lấy dư
**      --> Lũy thừa
++      --> Tăng giá trị của biến lên 1
--      --> Giảm giá trị của biến đi 1

*/

// var a = 1;
// var b = 2;

// var c = a + b;
// console.log(c);

// Toan tu ++ --
// Tien to va hau to
// var a = 6;
// ++ a
// Viec 1: +1 cho a, a= a + 1 => a = 7
// Viec 2: tra ve a sau khi duoc + 1

// var output = a++;
// VIec 1: 'a copy' , 'a coypy' = 6
// Viec 2: tru 1 cua a, a = a - 1 => a = 5
// Viec 3: tra ve 'a copy' 

// console.log('output: ', output);

// -----------------------------------
// Lam viec voi chuoi
// teamplet ting ES6
//  var fisrtName = "Khiem";
//  var lastName = "Tran";
//  console.log(`Hello ${fisrtName} ${lastName}`);


    // Lam viec voi chuoi
    // var myString = 'Hoc JS tai  F8'
    // 1. Length: Do dai cua chuoi
    // console.log(object.length); // Do dai cua chuoi

    // 2. Find index: Tim kiem vi tri cua chuoi
    // console.log(myString.indexOf('JS')); // Tim kiem vi tri cua chuoi 'JS' trong chuoi myString
    //tim nhung tu trung hop sau tu chung ta muon tim
    // console.log(myString.indexOf('JS', 6)); // Tim kiem vi tri cua chuoi 'JS' trong chuoi myString, bat dau tu vi tri 6
    // console.log(myString.lastIndexOf('JS')); // Tim kiem vi tri cuoi cung cua chuoi 'JS' trong chuoi myString


    // 3. Cut string: Cat chuoi
    // console.log(myString.slice(3, 10)); // Cat chuoi tu vi tri 0 den vi tri 10
    
    // 4. Replace: Thay the chuoi
    // console.log(myString.replace('F8', 'FPT')); // Thay the chuoi 'F80' bang 'FPT'
    // 5. Convert to upper case: Chuyen chuoi ve chu hoa
    
    // 6. Convert to lower case: Chuyen chuoi ve chu thuong
  
    // 7. Split: Tach chuoi thanh mang
    // console.log(myString.split(' ')); // Tach chuoi myString thanh mang, tach theo khoang trang
    // 8. Trim: Loai bo khoang trang dau va cuoi chuoi
    
    // console.log(myString.trim()); // Loai bo khoang trang dau va cuoi chuoi myString

    // 9. Get a character by index: Lay ky tu tai vi tri index
    // console.log(myString.charAt(0)); // Lay ky tu dau tien cua chuoi myString
    // console.log(myString[0]); // Lay ky tu dau tien cua chuoi myString

// ------------------------------------------------------

/*
    Làm việc với kiểu số
    1. Tạo gia trị Number:
     -Các cách tạo
     -Dùng cách nào? Tại sao?
     -Kiểm tra data type

    2. Làm việc với Number:
    -Các phương thức làm việc với Number
    +To string: Chuyển kiểm number sang kiểu String
    + To fixed: Làm tròn số sau dấu phẩy. Và sau khi sử dụng thì 
    // nó cũng chuyển về kiểu String
*/
// NaN là đại diện cho một số không hợp lệ
//var age = 18;
//var PI = 3.1432324;

//console.log(age.toString()); // Chuyển đổi kiểu số sang chuỗi
//console.log(PI.toFixed(4)); // 

// var otherNumber = new Number(100); // Cách tạo khác, không nên dùng

// console.log(typeof age); // Kiểm tra kiểu dữ liệu của biến age 

//--------------------
/*
    Làm việc với mảng
    1. Tạo mảng:
    - Cách tạo mảng
    - Kiểm tra kiểu dữ liệu của mảng
    2. Truy xuất mảng:
    -Độ dài mảng.
    -Lấy phần tử theo index.
*/

// *** Array là một kiểu dữ liệu có thể chưa tất cả các kiểu dữ liệu khác nhau, bao gồm cả các mảng khác.

// var languages = [
//     'JavaScript',
//     'PHP',
//     'Ruby',
//     'Python',   
//     'Java',
//     null,
//     function() {
//         console.log('Hello world');
//     },
//     {
//         name: 'Tran Duc Khiem'}
// ];

// console.log(typeof languages);
//  cách kiểm tra kiểu dữ liệu của mảng
// console.log(Array.isArray(languages));

// console.log(languages.length);

//Lấy phần tử theo index

// console.log(languages[0]);

/*
    Làm việc với mảng
    1. To String: Chuyển mảng sang chuỗi
    2. Join: Nối các phần tử trong mảng thành một chuỗi
    3. Pop: Xóa phần tử cuối cùng của mảng
    4. Push: Thêm phần tử vào cuối mảng
    5. Shift: Xóa phần tử đầu tiên của mảng
    6. Unshift: Thêm phần tử vào đầu mảng
    7. Splice: Xóa hoặc thay thế các phần tử trong mảng
    8. Slice: Lấy một phần của mảng
    9. Concat: Nối hai mảng lại với nhau
    10. IndexOf: Tìm kiếm phần tử trong mảng
    11. Find: Tìm kiếm phần tử trong mảng
*/

// var languages = [
//     'JavaScript',
//     'PHP',
//     'Ruby',
//     'Python',   
//     'Java',
   
// ];

// var languages2 = [
//     'C++', 
//     'C#',
//     'Dart',
//     'Go'
// ];

// console.log(typeof languages.toString()); // Chuyển mảng sang chuỗi
// console.log(typeof languages.join(' - ')); // Nối các phần tử trong mảng thành một chuỗi, cách nhau bởi dấu '-'  
// console.log(languages.pop()); // Xóa phần tử cuối cùng của mảng, trả về phần tử đã xóa
// console.log(languages); // In ra mảng sau khi xóa phần tử cuối cùng
// console.log(languages.push('Dart','Java')); // Thêm phần tử vào cuối mảng, trả về độ dài của mảng sau khi thêm
// console.log(languages); // In ra mảng sau khi thêm phần tử mới

// console.log(languages.shift()); // Xóa phần tử đầu tiên của mảng, trả về phần tử đã xóa 
// console.log(languages); // In ra mảng sau khi xóa phần tử đầu tiên

// console.log(languages.unshift('C++')); // Thêm phần tử vào đầu mảng, trả về độ dài của mảng sau khi thêm
// console.log(languages);

// languages.splice(1,0,'Dart','C#') // tham sô đầu là vị trí bắt đầu xóa
// tham số thứ hai là số lượng phần tử cần xóa
// kể từ tham số thứ 3 trở đi là chèn các phần tử vào mảng.
//Tuy nhiên ở tham số thú 2 phải là số 0. Nếu không thì nó hiểu 
// là xóa các phần tử từ vị trí bắt đầu.
// console.log(languages);

// console.log(languages.concat(languages2)); // Nối hai mảng lại với nhau, trả về một mảng mới

// console.log(languages.slice(-2,-1));

// ------------------------------------------

/*
    Hàm (function) trong JavaScript
    1. Khái niệm hàm
    - Hàm là một khối mã có thể tái sử dụng, được định nghĩa
    - Làm một việc cụ thể nào đó
    
    2. Loại hàm
    - Built-in: Là những hàm đã được định nghĩa sẵn trong JavaScript
    - Tự định nghĩa: Là những hàm do người dùng tự định nghĩa

    3. Tính chất
    - Không thực thi khi định nghĩa
    - Chỉ thực thi khi được gọi
    - Có thể truyền tham số vào hàm
    - Có thể trả về giá trị
    - Có thể không trả về giá trị
    - Có thể có nhiều tham số

    4. Tạo hàm đầu tiên
*/
 
// a-z A-Z 0-9 _ $ : Không được đặt số ở kí tự đầu tiên

// function showDialog() {
//     alert('Hello World');
// }

// showDialog();

/*

    Tham số trong hàm
    - Tham số là những giá trị được truyền vào hàm khi gọi hàm
    - Tham số có thể là bất kỳ kiểu dữ liệu nào
    - Tham số có thể có nhiều tham số
    - Tham số có thể có giá trị mặc định
    - Tham số có thể là một hàm khác
    - Tham số có thể là một mảng
    - Tham số có thể là một đối tượng

    Đối số trong hàm
    - Đối số là những giá trị được truyền vào hàm khi gọi hàm
    - Đối số có thể là bất kỳ kiểu dữ liệu nào
    - Đối số có thể có nhiều đối số
    - Đối số có thể có giá trị mặc định


    1. Tham số?
    -Định nghĩa?: Là giá trị truyền vào khi được định nghĩa
    -Kiểu dữ liệu?: KDL là không giới hạn, có thể là bất kỳ kiểu dữ liệu nào
    -Tính private?: 
    -1 tham số
    -nhiều tham số

    2. Truyền tham số:
    - 1tham số
    - Nhiều tham số

    3. Arguments: Chỉ xuất hiện trong function
    - Đối tượng Arguments:
    - Giới thiệu vòng for of

*/
// param la` tham số truyền vào hàm

// function writeLog() {
//     var myString = '';
//     for(var tenbien of arguments) {
//         myString += tenbien + ', ';
//     }
//     console.log(myString);

// }

// writeLog(1,2,3,4,5,6); // Gọi hàm


// Return trong hàm

// var isConfirm = confirm('Are you sure?');

// console.log(isConfirm);

// function cong(a, b) {
//     return a + b; // Trả về giá trị của phép cộng   
// }

// var result = cong(1, 2); // Gọi hàm và lưu kết quả vào biến result

// console.log(result); // In ra kết quả của phép cộng


/*
    Một số điều cần biết về function

    1. Khi function đặt trùng tên? Khi các function trung tền thì
    hàm được định nghĩa sau sẽ ghi đè lên hàm được định nghĩa trước đó.
    - Ví dụ: Hàm showMessage được định nghĩa hai lần, hàm thứ hai sẽ ghi đè lên hàm thứ nhất.
    
    2. Khai báo biến trong hàm? có thể khai báo biến trong hàm, biến này sẽ chỉ có thể sử dụng trong hàm đó.
    3. Định nghĩa hàm trong hàm? Có
    -Tuy nhiên, hàm bên trong có thể truy cập biến của hàm bên ngoài, nhưng hàm bên ngoài không thể truy cập biến của hàm bên trong.
    -Hàm được khai báo trong hàm thì phải sử dụng call back chính trong hàm đó luôn.

 */

// function showMessage() {
//    console.log('message1 from showMessage function');
// }

// function showMessage() {
//     console.log('message2 from showMessage function');
// }

// showMessage(); // Gọi hàm showMessage, sẽ in ra message2

// function showMessage() {
//     var message = 'Hello world'; // Biến này chỉ có thể sử dụng trong hàm này
//     console.log(message);

//     function showInnerMessage() {
//         console.log('Inner message: ' + message); // Có thể truy cập biến message từ hàm bên trong
//     }

//     showInnerMessage(); // Gọi hàm bên trong để in ra message
// }

// // console.log(message); // Sẽ báo lỗi vì biến message không được định nghĩa ở đây 

// showMessage();

/*
    Các loại function
    1. Function declaration: 
    2. Function expression: 
    3. Arrow function: 

 */

// Function declaration
// function greet(name) {
//     return console.log(`Hello, ${name}!`);`Hello, ${name}!`;
// }

// greet('Khiem');

// // Function expression: Có thể đặt tên hoặc không
// // Nên đặt => để biết xem hàm đó làm về công việc gì.
// var showMessage2 = function(name) {
//     return console.log(`Message: ${name}`);;
// }

// showMessage2('Khiem');


// // setTimeout(function() {
// //     console.log('This is a delayed message after 1 second.');
// // }, 1000);

// var myObject = {
//     myFunction: function() {
//         console.log('This is a method inside an object.');
//     }
// };

// myObject.myFunction(); // Gọi hàm bên trong đối tượng



//--------------------------------------------------

// Polyfill là gì?
// Polyfill là một đoạn mã JavaScript được sử dụng để cung cấp các tính năng mới của ngôn ngữ JavaScript mà không được hỗ trợ bởi trình duyệt hiện tại.
// Polyfill cho phép các nhà phát triển sử dụng các tính năng mới của JavaScript mà không cần phải lo lắng về việc trình duyệt có hỗ trợ hay không.

//---------------------------------------------------

/*
    Object trong javaScript
    Một key không có sẽ trả về undefined

    // funtion -> phương thức
    // others --> các dạng dữ liệu được lấy ra trực tiếp mà không
    cần đến call thì gọi là thuộc tính (property)
    
*/

// var isMale = 'male'; // Khai báo một biến kiểu boolean
// // Phải tạo ra một cái biến ở trước object mà mình muốn thêm 
// // key vào, nếu không thì sẽ báo lỗi
// // Trong object thì phải dùng dấu [] để khai báo key là biến
// // Nếu không thì nó sẽ hiểu là một cái key được khai báo

// var myInfo = {
//     name: 'Tran Duc Khiem',
//     age: 19,
//     address: 'Ha Noi',
//     [isMale]: true, // Khai báo một biến kiểu boolean chưa có key trong object

//     getName: function() {
//         return this.name;
//     }

// }

// console.log(myInfo);
// var myKey = 'name'; // Khai báo một biến chứa tên key
// //Truy cập vào giá trị mà = 'true', // Khai báo một biến kiểu boolea chưa có key trong object
// console.log(myInfo[myKey]); // Truy cập vào giá trị của key name trong object myInfo

// // Thêm một cặp key-value mới vào object
// myInfo.email = 'khiemtran@gmail.com'
// myInfo['phone'] = '0123456789';
// // Thay đôi các giá trị của các key trong object
// myInfo.age = 20;
// // Xóa một cặp key-value trong object
// delete myInfo.address;
// // Truy cập vào các giá trị của object
// console.log(myInfo.name); // Truy cập vào giá trị của key name

// console.log(myInfo['phone']); // Truy cập vào giá trị của key email

// console.log(myInfo.getName()); // Gọi hàm getName trong object myInfo

// ****************************************

// Object constructor: Là một bản thiết kế

/*

    Object prototype - basic : Nguyên mẫu để tạo nên một đối tượng

    1. prototype là gì?
    2. sử dụng khi nào?


*/

// function User(fisrtName, lastName, avatar) {
//     this.firsrtName = fisrtName; // this là đối tượng hiện tại
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function () {
//         return `${this.firsrtName} ${this.lastName}`;
//     }
// }

// User.prototype.className = 'F8'; // Thêm một thuộc tính bằng prototype

// User.prototype.getAvatar = function() {
//     return this.avatar;
// }

// // trong object prototype chỉ khi là phương thước thì
// // mới sử dụng từ this, còn thuộc tính thì không dùng.

// var author = new User('Tran', 'Duc Khiem', 'https://example.com/avatar.jpg'); // Tạo một đối tượng mới từ hàm User
// var user = new User('Tran', 'Kim Linh', 'https://example.com/avatar.jpg'); // Tạo một đối tượng mới từ hàm User

// author.age = 19; // Thêm thuộc tính age vào đối tượng author

// console.log(author.getAvatar());
// console.log(user);

// ***********************************

/*
    Date object in JavaScript: Đối tượng Date trong JS
    => Làm việc thời gian
*/

// var date = new Date();

// var getYears = date.getFullYear();

// var getMonth = date.getMonth() + 1; // getMonth chỉ trả về giá trị từ 0-11

// var getday = date.getDate();

// console.log(`${getday} ${getMonth} ${getYears}`);

//------------------------------------------------------------

// Câu lệnh rẽ nhánh - If else

// var date = 2;

// if (date === 2) {
//     console.log('Hôm nay là thú 2');
// } else if (date === 3) {
//     console.log('Hôm nay là thú 3');
// } else if (date === 4) {
//     console.log('Hôm nay là thú 4');
// }

//------------------------------ Ôn tập ---------------------------------

// var a = 10;
// var pi = 3.14;
// console.log(a.toString());
// console.log( pi.toFixed());

// var fullName = 'Tran Duc Khiem';

// var fisrtName = 'Tran Duc';

// var lastName = '  Khiem';

// console.log(fullName.replace('Khiem', 'KHIEM')); // thay the

// console.log(fullName.slice(1,2)); // cat chuoi

// console.log(fullName.split());

// console.log(fullName.toLocaleLowerCase());
// console.log(fullName.toLocaleUpperCase());

// console.log(fisrtName.concat(` ${lastName}`));
// console.log(fullName.indexOf('Khiem',1)); // tim tu

// console.log(lastName.trim()); // chuan hoa chuoi

//============================== 
// Ham`

// function showMessage(param) {
//     console.log(param);

// }

// showMessage('heello ae')

// var plus = function(a,b) {
//     console.log('cho nay dung de in ra: ');
//     function showDialog(message) {
//         console.log(message);
//     }
//     showDialog('hello ae');
// }

// plus();

//---------------------- Object ------------------

// var isMale = 'male';// them mot key bang cach su dung bien

// var info = {
//     name: 'Tran Duc Khiem',
//     age: 19,
//     [isMale]: true
// };

// info.phone = 123513123;

// info['email'] = 'khiemtran@gmail.com'

// console.log(info);
// console.log(info.name);
// console.log(info['email']);


//================================================

// Vong lap for

// var myArray = [
//     'JS',
//     'PHP',
//     'Ruby',
//     'Python'
// ]

// var lengths = myArray.length;

// for (var i = 0; i < lengths; i++) {
//         console.log(myArray[i]);
// }


// ******** for in loop : Lay ra cac key trong mot doi tuong ****************

// var myInfo = {
//     name: 'Tran Duc Khiem',
//     age: 19,
//     address: 'Ha Noi',
// }

// for(var key in myInfo) {
//     console.log(myInfo[key]); // In ra giá trị của key trong object myInfo
// }

// lay gia tri tu key trong mang cung giong nhu lay gia tri
// tu key trong object

// var languages = [
//     'JS',
//     'PHP',
// ]

// for (var key in languages) {
//     console.log(languages[key]); // In ra giá trị của key trong mảng languages
// }


// ************// for of loop: Duyệt qua các phần tử trong mảng*****************
// tung chu cai trong mot chuoi

// var languages = [
//     'js',
//     'PHP'
// ]

// var languages1 = 'PHP';

// // No se khong su dung vong lop cho mot object

// var myInfo = {
//     name: "Khiem",
//     age: 19
// }

// console.log(Object.values(myInfo)); // In ra các giá trị trong object myInfo ra 1 mang

// console.log(Object.keys(myInfo)); // In ra các key trong object myInfo

// console.log(Object.keys(myInfo)); // In ra các giá trị trong object myInfo

// for (var value of languages) {
//     console.log(value); // In ra giá trị của từng phần tử trong mảng languages
// }

// for (var value of languages1) {
//     console.log(value); // In ra giá trị của từng ký tự trong chuỗi languages1
// }

// for (var value of Object.keys(myInfo)) {
//     console.log(myInfo[value]); // In ra các key trong object myInfo
// }

// for (var value of Object.values(myInfo)) {
//     console.log(value);
// }

// ------------------------------------------------------------------


// while loop


// var myArray = [
//     "JS",
//     'PHP'
// ]

// var lengths = myArray.length;
//  var i = 0;

// while (i < lengths) {
//     i++;
//     console.log(myArray[i]);
// }

// var i = 0;
// while(i < 1000) {
//     i++;
//     console.log(i);
// }

// Do While

// var i = 0;

// do {
//     i++;
//     console.log(i);
// } while (i < 10);


// Break và Continue

// for (var i = 0; i < 10; i++) { 
//     // if (i === 5) {
//     //     break; // Dừng vòng lặp khi i bằng 5
//     // }

//     if (i % 2 === 0) {
//         continue; // Bỏ qua các số chẵn
//     }
//     console.log(i);
// }

// Vong lap long nhau

// var myArray = [
//     [1,2],
//     [3,4]
//  ]

//  for (var i = 0; i < myArray.length; i++) {
//     for(var j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j]); // In ra từng phần tử trong mảng hai chiều
//     }
//  }


//  for (var i = 100; i >= 0; i -= 5) {
//     console.log(i); // In ra các số từ 100 đến 0, giảm dần mỗi lần 5
//  }


// ----------------------------------------------------

/*
    Array methods:
        forEach(): Duyệt qua từng phần tử trong mảng
        every(): Kiem tra tat ca cac phan tu cua mang phai thoa man mot dieu kien gi do
        some(): 
        find(): 
        filter(): 
        map(): 
        reduce(): 
        indexOf():  
        lastIndexOf(): 
*/

var courses = [
     {
        id: 1,
        name: 'JavaScript',
        coin: 100
     },
     {
        id: 2,
        name: 'PHP',
        coin: 0
     },
     {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'Python',
        coin: 500
    }    

]


// Duyet qua cac phần tử trong mảng 
// courses.forEach(function(course, index) {
//     console.log(index,course);
// })

// for (var course of courses) { 
//     console.log(course);
// }

// for (var i = 0; i < courses.length; i++) {
//     console.log(courses[i]);
// }

// Duyet qua cac phan tu trong mang va kiem tra dieu kien. Phai dung het tat ca

// var isFree = courses.every(function(course,index) { 
//     return course.coin === 0;
// })

// console.log(isFree)

// for (var course of courses) {
//     if(course.coin ===0) {
//         console.log(course.name);
//     }
// }

// for(var i = 0; i < courses.length; i++) {
//     if(courses[i].coin === 0) {
//         console.log(courses[i].name);
//     }
// }

// 

// Duyet qua cac phan tu trong mang va kiem tra dieu kien. Chi 1 la du
var isFree = courses.some(function(course,index) { 
    return course.coin === 0;
})


// Kiem tra xem co PT nao co trong mang khong, neu co thi se
// tra ve phan tu do, neu khong co thi tra ve undefined
var course = courses.find(function(course,index) { 
    return course.name === 'Ruby';
})

console.log(course);


// Con filter se tra ve mot mang moi khi thoa man yeu cau
var course = courses.filter(function(course,index) { 
    return course.name === 'Ruby';
})

console.log(course);
