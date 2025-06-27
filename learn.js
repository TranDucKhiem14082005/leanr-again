
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

function showDialog() {
    alert('Hello World');
}

showDialog();

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


*/