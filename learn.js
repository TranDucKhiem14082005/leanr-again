
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
    var myString = 'Hoc JS tai  F8'
    // 1. Length: Do dai cua chuoi
    // console.log(object.length); // Do dai cua chuoi

    // 2. Find index: Tim kiem vi tri cua chuoi
    console.log(myString.indexOf('JS')); // Tim kiem vi tri cua chuoi 'JS' trong chuoi myString
    //tim nhung tu trung hop sau tu chung ta muon tim
    console.log(myString.indexOf('JS', 6)); // Tim kiem vi tri cua chuoi 'JS' trong chuoi myString, bat dau tu vi tri 6
    console.log(myString.lastIndexOf('JS')); // Tim kiem vi tri cuoi cung cua chuoi 'JS' trong chuoi myString


    // 3. Cut string: Cat chuoi
    console.log(myString.slice(3, 10)); // Cat chuoi tu vi tri 0 den vi tri 10
    
    // 4. Replace: Thay the chuoi
    console.log(myString.replace('F8', 'FPT')); // Thay the chuoi 'F80' bang 'FPT'
    // 5. Convert to upper case: Chuyen chuoi ve chu hoa
    
    // 6. Convert to lower case: Chuyen chuoi ve chu thuong
  
    // 7. Split: Tach chuoi thanh mang
    console.log(myString.split(' ')); // Tach chuoi myString thanh mang, tach theo khoang trang
    // 8. Trim: Loai bo khoang trang dau va cuoi chuoi
    
    console.log(myString.trim()); // Loai bo khoang trang dau va cuoi chuoi myString

    // 9. Get a character by index: Lay ky tu tai vi tri index
    console.log(myString.charAt(0)); // Lay ky tu dau tien cua chuoi myString
    console.log(myString[0]); // Lay ky tu dau tien cua chuoi myString