

// function User(name, age, avatar) {
//     this.name = name;
//     this.age = age;
//     this.avatar = avatar;
//     this.getAge = function() {
//         return this.age;
//     }
//  }


// var author = new User('Khiem',10,'avatar');
// console.log(author);

// console.log(author.getAge()); // 10

// // them mot thuoc tinh vao Object constructor

// User.prototype.className = '12A2';

// console.log(author);


// ------------------------------- Date object in JS -------------------------------

// var date = new Date();

// var year = date.getFullYear(); 
// var month = date.getMonth() + 1; // Tháng bắt đầu từ 0
// var day = date.getDate();

// console.log(day);

// var hours = date.getHours();
// console.log(hours);
// var minutes = date.getMinutes();
// var seconds = date.getSeconds();

// console.log(`this is curret date: ${day} / ${month} / ${year} / ${hours} : ${minutes} : ${seconds}`);

//-------------==================------------------

// Array map method in JavaScript
//Muốn thay đổi một element trong mảng thì dùng map
// Nó sẽ return về một mảng mới với các phần tử đã được thay đổi theo hàm callback
// var courses = [
//     {
//         id: 1,
//         name: 'JavaScript',
//         coin: 100
//     },
//     {
//         id: 2,
//         name: 'PHP',
//         coin: 200
//     },
//     {
//         id: 3,
//         name: 'Python',
//         coin: 300
//     },
//     {
//         id: 4,
//         name: 'HTML & CSS',
//         coin: 400
//     }
// ]

//Sau khi nó trả về một mảng mới thì số lượng phần tử của nó
// sẽ bằng với số lượng phần tử của mảng ban đầu

//Đối số truyền vào phải là một function

//tham số thứ 3 có thể không truyền vào

// function courseHandler(course, index, originalArray) {
//     return {
//         id: course.id,
//         name: `Khóa học: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//         index: index,
//         originalArray: originalArray
//     }
// }
// // map method nay sẽ lặp qua tửng phần tử trong mảng
// // và sẽ trả về từng phần tử trong mảng cũ về mảng mới.
// // Trong quá trình mà chúng ta truyền vào một hàm. Thì khi mà
// // hàm này được gọi thì nó sẽ nhận vào từng phần tử của mảng cũ
// // và trả về một giá trị mới cho phần tử đó trong mảng mới
// var newCourses = courses.map(courseHandler);

// console.log(newCourses);



//----------------------------- Reduce method in JavaScript -----------------------------
// Reduce: muốn nhận về một giá trị duy nhất từ mảng 
// khi chúng ta cần tính toán một giá trị nào đó từ mảng
// var courses = [
//     {
//         id: 1,
//         name: 'JavaScript',
//         coin: 100
//     },
//     {
//         id: 2,
//         name: 'PHP',
//         coin: 200
//     },
//     {
//         id: 3,
//         name: 'Python',
//         coin: 300
//     },
//     {
//         id: 4,
//         name: 'HTML & CSS',
//         coin: 400
//     }
// ]

// var totalCoin = 0;
// for (var course of courses) {
//     totalCoin += course.coin;
// }
// console.log(totalCoin); // 1000


// Biến lưu trữ
//Thực hiện việc lưu trữ


// accumulator: là biến lưu trữ giá trị của lần lặp trước đó
// currentValue: là giá trị của phần tử hiện tại trong mảng
// function coinHandler(accumulator,currentValue,currentIndex,originalArray) {
//     // console.log(accumulator); // giá trị của lần lặp trước đó
//     // console.log(currentValue); // giá trị của phần tử hiện tại trong mảng.
//     // console.log(currentIndex); // chỉ số của phần tử hiện tại trong mảng
//     // console.log(originalArray); // mảng gốc

//     return accumulator + currentValue.coin; // cộng dồn giá trị coin của các khóa học

// }
// Đối số thứ 2 được gọi là giá trị khởi tạo
//Và nó được gán vào biến accumulator trong lần đầu tiên khi hàm callback
// Nếu không truyền vào thì giá trị khởi tạo sẽ là phần tử đầu tiên của m
// var totalCoin = courses.reduce(coinHandler, 0); 

// initial value có thể không khởi tạo cũng được.
// và nếu không có initial value thì nó sẽ lấy phần tử đầu
// tiên của mảng làm giá trị khởi tại cho biến accumulator
// Và cái current value sẽ là phần tử thứ 2 của mảng
// console.log(totalCoin); // 1000

// Những bài toán không dùng initial value

// var numbers = [100, 200, 300, 400];

// var totalCoin = numbers.reduce(function(accumulator,currentValue) {
//     return accumulator + currentValue; // cộng dồn giá trị của các phần tử trong mảng
// })

// console.log(totalCoin);


// // Flat - "Làm phẳng" mảng từ Depth array

// var depthArray = [1, 2, [3, 4], [5, 6, [7, 8]]];

// var flatArray = depthArray.reduce(function(flatOutput, depthItem) {

    
//     // Kiểm tra xem depthItem có phải là mảng hay không
//     // Nếu là mảng thì tiếp tục làm phẳng nó bằng cách gọi lại hàm reduce
//     // arguments.callee là một cách để tham chiếu đến hàm hiện tại trong ngữ cảnh của nó
    
//     // Nếu không phải mảng thì chuyển nó thành mảng với một phần tử
//     return Array.isArray(depthItem) 
//         ? depthItem.reduce((acc,val) => acc.concat(val), flatOutput)
//         : flatOutput.concat(depthItem);
// }, []);

// console.log(flatArray);

// var topic= [
//     {
//         topicName: 'JavaScript',
//         courses: [
//             { 
//                 name: 'JS Basic',
//                 coin: 100 
//             },
//             {   name: 'JS Advanced',
//                 coin: 200 
//             }
//         ]
//     },
//     {
//         topicName: 'PHP',
//         courses: [
//             {   name: 'PHP Basic',
//                 coin: 150 
//             },
//             {   name: 'PHP Advanced',
//                 coin: 250 
//             }
//         ]
//     }
// ]

// var newCourses = topic.reduce(function(acc, topic) {
//     return acc.concat(topic.courses);
//     // tới bước này nó sẽ trả về một mảng gồm các khóa học của từng topic
// }, []);

// // Muốn có các tên của các khóa học trong từng topic đó thì tá sẽ làm:

// names = newCourses.map(function(course) {
//     return course.name;
// })

// console.log(names);

// var courses = [
//     {
//         id: 1,
//         name: 'JavaScript',
//         coin: 100
//     },
//     {
//         id: 2,
//         name: 'PHP',
//         coin: 200
//     },
//     {
//         id: 3,
//         name: 'Python',
//         coin: 300
//     },
//     {
//         id: 4,
//         name: 'HTML & CSS',
//         coin: 400
//     }
// ]

// var courseHandler = function(course, index, originalArray) { 
//     return {
//         id: course.id,
//         name: `Khóa học: ${course.name}`,
//         coin: course.coin,
//         coinText: `Giá: ${course.coin}`,
//         index: index,
//         originalArray: originalArray
//     }
// }

// var newCourses = courses.map(courseHandler);

// console.log(newCourses);

// var totalCoin = courses.reduce(function(acc, currentValue) {
//     return acc + currentValue.coin;
// }, 0);

// console.log(totalCoin);

// --------------------------------


// Lam viec voi array
// Khong nhat thiet la length cua array phai bang voi
// so phan tu cua array ban dau. Co the co nhung
// phan tu undefined o cuoi array
// Neu nhu ta gan length cua array bang mot so nho hon

//forEach

//for in duyet qua cac phan tu that cua array. 
// no cung se duyet qua cac phan tu trong prototype

// Array.prototype.forEach2= function(callback) {
//     for(var index in this) {
//         if(this.hasOwnProperty(index)){
//             callback(this[index],index,this)
//         }
//     }
// }

// var courses = [
//     'JavaScript',
//     'PHP',
//     'Python',
//     'HTML & CSS',
//     'Ruby'
// ];

// courses.forEach(function(course, index, arr) {
//     console.log(index, course, arr);
// });

// courses.forEach2(function(course, index, arr) {
//     console.log(index, course, arr);
// })

// ------------------------------- Filter method in JavaScript -------------------------------

/// Filter: loc ra cac phan tu thoa man cac dieu kien
// Khong lap qua array trong

// Array.prototype.filter2 = function (callback) {
//     var output = []
//     for(var index in this) {
//         if(this.hasOwnProperty(index)) {
//            var result = callback(this[index],index,this);
//            if(result) { 
//                 output.push(this[index]);
//            }
//         }
//     }

//     return output;
// }


// Some: true / false
// kiem tra neu phan tu hien tai da dung voi dieu kien thi
// no se tra ve ket qua luon, va khong lap qua cac phan tu con lai

// Array.prototype.some2 = function (callback) {
//     for(var index in this) {
//         if(this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this);
//             if(result) {
//                 return true; // Neu co phan
//             }
            
//         }
//     }
//     return false; 
// }


// Every: true / false
// Kiem tra neu tat ca cac phan tu

// Array.prototype.every2 = function (callback) {
//     for(var index in this) {
//         if(this.hasOwnProperty(index)) {
//             if(callback(this[index], index, this) === false) {
//                 return false; // Neu co phan tu khong th
//             }
//         }
//     }
//     return true;
    
// }

// var courses = [
//     {
//         name: 'JavaScript',
//         coin: 100,
//         isFinish: true,
//     },
//     {
//         name: 'PHP',
//         coin: 200,
//         isFinish: true,
//     },
//     {
//         name: 'Python',
//         coin: 300,
//         isFinish: false,
//     },
//     {
//         name: 'HTML & CSS',
//         coin: 400,
//         isFinish: true,
//     }
// ]


// var result = courses.every2(function(course,index,arr) {
//     return course.coin > 1000;
// })

// console.log(result);

// var filterCouses = courses.filter2(function(course,index,arr) {
//     console.log(course, index, arr);
//     return course.coin > 200;
// })

// console.log(filterCouses);

