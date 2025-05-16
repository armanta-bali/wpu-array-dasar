// membuat array kosong
// menambah array
// let arr =[];
// arr[0] = "armanta";
// arr[1] = "iwayan";
// arr[2] = "ganteng";
// arr[4] = "koki";
// console.log(arr);


// menghapus isi array
// arr[0] = "armanta";
// arr[1] = "iwayan";
// arr[2] = "ganteng";
// arr[3] = "koki";
// arr[1] = undefined; //ini dilakukan scara manual
// console.log(arr);

// menampilkan isi array menggunakan looping 
let arr = ["armanto", "ganteng", "pentol"];

for(let i = 0; i < arr.length; i++) {
    console.log(`Mahasiswa ke- ${i+1} : ${arr[i]}`);
}

let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let [first, second, ...rest] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(rest);   // ["orange", "mango", "kiwi"]

// Here's an example of using the split method to create an array of characters:

let str = "hello";
let charArray = str.split("");
console.log(charArray); // ["h", "e", "l", "l", "o"]

// The reverse() method is an array method that reverses an array in place. This means it modifies the original array rather than creating a new one. Here's how we can use it:
let CharArray = ["h", "e", "l", "l", "o"];
CharArray.reverse();
console.log(CharArray); // ["o", "l", "l", "e", "h"]


// The final step is to convert the reversed array of characters back into a string. We can accomplish this using the join() method. The join() method creates and returns a new string by concatenating all of the elements in an array, separated by a specified separator string. If you want to join the characters without any separator, you can use an empty string as the argument. Here's an example:

let reversedArray = ["o", "l", "l", "e", "h"];
let reversedString = reversedArray.join("");
console.log(reversedString); // "olleh"

// Method forEach
// function expresion
let number = [1, 2, 3, 5, 6, 8, 9, 10, 20, 100];
// number.forEach(function(e) {
//     console.log(e);
// })

// arrow function
number.forEach((element) => {console.log(element);})

// map method
let num = [1,3,5,7,9];
let num2 = num.map(function(e) {
    return e * 2;
})
console.log(num2.join(", "));

// mothod sort()

let nomor = [1, 1, 4, 2, 10, 60, 26];
console.log(nomor.join("-"));
nomor.sort(function(a,b) {
    return a-b;
})
console.log(nomor.join("-"));
