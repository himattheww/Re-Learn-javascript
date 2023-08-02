// variable
let name = 25;
console.log(name);


//  input
// let username = window.prompt("Whats your name");
// console.log(username);

// conversion ]
//  yang ini bernilai strings

let ini_angka = "20";
let ini_angka2 = parseInt(ini_angka);
let ini_angka3 = ini_angka2 + 5;
console.log("ini angka 3 " + ini_angka3);

// Math functions
// Math.Pow = Square/pangkat
// Math.Ceiling pembulatan ke atas
// Math.Floor Pembulatan ke bawah
let x = 3.14;
x = Math.pow(x, 2);
console.log("ini nilai x" + x)

// String slicing
let fullName = "Bro Code"
let firstName;
let lastName;

// dia ngambilnya dari index ke 4
firstName = fullName.slice(4)
// ini ngambilnya dari index 0 sampai 3
lastName = fullName.slice(0, 3)
console.log("ini first name" + firstName)
console.log("ini last name" + lastName)

// switch case
let grade = "A"
switch (grade) {
    case "A":
        console.log("You did great")
        break;
    case "B":
        console.log("You ok")
}



// arrow functions
let hello = () => {
    console.log(24)
}

// arrays
// push menambah element
// pop remove element terakhir
// unshift nambahi element ke first elemen
// shift remove element dari awal
// .sort itu mengsort
// .sort.reverse sort nya terbalik
let arrays = () => {
    let fruits = ["apple", "orange", "banana"]
    fruits.push("lemon")
    fruits.pop()

    console.log(fruits)
}

// spread operator memecahkan nilai array dan menambahkan nya sebagai array
let class1 = ["spongbob","patrick","sandy"]
let class2 = ["squidy","krabs","plankton"]
// dibawah ini ga bisa, jadi dia harus di pecah dulu
class1.push(class2)
// pakai spread
class1.push(...class2)

// selanjutnya chapter 39 arrayforEach
