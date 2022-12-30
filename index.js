// chapter 1
// let name = 'Sulav'
// let a = 44
// console.log(name + a)

// console.log(typeof (name + a))


// const dict = {
//     name: "sulav",
//     faculty: 'csit',
//     batch: 2077
// }

// console.log(dict.name)
// dict.address = 'shitalnagar'
// console.log(dict)


// chapter 2
// let age = 18;
// if (age > 10 && age < 20) {
//     console.log("age in between 10 and 20")
// } else {
//     console.log("Not lies")
// }

// let num = 9;
// if (num % 3 == 0) {
//     console.log("yes divisible")
// } else {
//     console.log("No not divisible")
// }

// let num = 5;
// if (num % 2 == 0 || num % 3 == 0) {
//     console.log("yes divisible by 2 or 3")
// } else {
//     console.log("no not divisible by 2 or 3")
// }

// let age = 10;
// (age > 18) ? console.log("yes") : console.log("no")

// let day = 3
// switch (day) {
//     case 1:
//         console.log("Sunday")
//         break;
//     case 2:
//         console.log("Monday")
//         break;
//     case 3:
//         console.log("Tuesday")
//         break;
//     case 4:
//         console.log("wednesday")
//         break;
//     case 5:
//         console.log("Thursday")
//         break;
//     case 6:
//         console.log("Friday")
//         break;
//     case 7:
//         console.log("Saturday")
//         break;

//     default:
//         break;
// }

// chapter-3
// const obj = {
//     harry: 9,
//     rohan: 70,
//     aakash: 7
// }
// for (let i = 0; i < Object.keys(obj).length; i++) {
//     console.log(obj[Object.keys(obj)[i]])
// }

// let correctnum = 5;

// do {
//     n = prompt("Enter correct number:");
//     n = parseInt(n)
// } while (n != correctnum)

// const mean = (a, b, c, d, e) => {
//     return (a + b + c + d + e) / 5
// }

// console.log("Mean of 1,2,3,4,5 is " + mean(1, 2, 3, 4, 5))

// chapter 4
// let name1 = "sulav"
// console.log(`name is ${name1}`)

// console.log("har\"".length)

// let name2 = "roshan"
// name2[3] = "s"
// console.log(name2)

// chapter 5
// const numbers = [1, 2, 3, 4, 5]
// numbers.splice(2, 1, 23, 24)
// console.log(numbers)

// let a = [24, 50, 56, 80, 10, 34]
// let result = a.filter((element) => {
//     return (element % 10 == 0)
// })
// console.log(a)
// console.log(result)

// let square = a.map((element) => {
//     return element * element
// })
// console.log(square)

// let fact = [1, 2, 3, 4, 5]
// let result = fact.reduce((x1, x2) => {
//     return x1 * x2
// })
// console.log(result)

// chapter-6 practice set 
// let age = prompt("Enter your age")
// if (age >= 18) {
//     alert("you can drive")
// } else {
//     alert("you cannot drive")
// }

// let q1 = confirm("do you want to see the prompt again")
// if (q1) {
//     prompt("hehe i am back")
// }


// let num = prompt("Enter a number:")
// if (num > 4) {
//     location.href = "https://www.google.com/"
// }

// let mycolor = prompt("Enter a color")
// document.body.style.backgroundColor = mycolor


// guess the number game 
// var ran = Math.floor(Math.random() * 100)
// var count = 0
// var newnum
// do {
//     var num = prompt("Enter a number between 0-100:")
//     num = Number.parseInt(num)
//     if (num < ran) {
//         alert("Your number is smaller")
//     } else if (num > ran) {
//         alert("Your number is greater")
//     }
//     else {
//         let score = 100 - count
//         alert("BOOM! number matched. Your score is " + score)
//     }
//     count = count + 1
// } while (num != ran)