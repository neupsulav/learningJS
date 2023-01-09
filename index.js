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

// Rock paper scissors game

// do {
//     var randomNumber = Math.floor(Math.random() * 3)
//     var randomGuess
//     if (randomNumber == 0) {
//         randomGuess = 'R'
//     } else if (randomNumber == 1) {
//         randomGuess = 'P'
//     } else {
//         randomGuess = 'S'
//     }

//     var guess = prompt("Rock(R), paper(P) or scissors(S)?")
//     if (guess == 'R' && randomGuess == 'S') {
//         alert(`You win. You = ${guess} computer = ${randomGuess}`)
//     } else if (guess == 'P' && randomGuess == 'R') {
//         alert(`You win. You = ${guess} computer = ${randomGuess}`)
//     } else if (guess == 'S' && randomGuess == 'P') {
//         alert(`You win. You = ${guess} computer = ${randomGuess}`)
//     } else if (guess == randomGuess) {
//         alert(`Draw. You = ${guess} computer = ${randomGuess}`)
//     } else {
//         alert(`You lose. You = ${guess} computer = ${randomGuess}`)
//     }
//     var wantToPlay = confirm("Do you want to play again?")
// } while (wantToPlay)

// chapter-7 practice set
// let nav = document.getElementById("navbar")
// nav.firstElementChild.firstElementChild.style.color = "red"
// let list = document.getElementsByTagName('li')
// let arraylist = Array.from(list)
// arraylist.forEach((element) => {
//     element.style.backgroundColor = "cyan"
// })

// Exercise 3 Tell me a joke
// let arr = [`I was going to tell a time traveling joke but you guys didn't like it..😜😜`,
//     `What do you call a lazy kangaroo? A pouch potato..😜😜`,
//     `I used to run a dating service for chickens but I was struggling to make hens meet..😜😜`,
//     `Why do we tell actors to "break a leg?" Because every play has a cast..😜😜`,
//     `What does a pig put on dry skin? Oinkment..😜😜`,
//     `What do you call it when a snowman throws a tantrum? A meltdown..😜😜`,
//     `My uncle named his dogs Timex and Rolex. They're his watch dogs..😜😜`,
//     `Did you hear about the guy whose left side was cut off? He's all right now..😜😜`,
//     `How do you open a banana? With a mon-key..😜😜`,
//     `senior woman and adult daughter laughing on porch..😜😜`,
//     `Which is faster hot or cold? Hot because you can catch cold..😜😜`,
//     `What did one plate say to the other plate? Dinner's on me..😜😜`,
//     `Why do oranges wear sunscreen? So they don't peel..😜😜`,
//     `My wife told me to stop acting like a flamingo so I had to put my foot down..😜😜`,
//     `What do you call a pig that does karate? A pork chop..😜😜`,
//     `Where does Batman go to the bathroom? The batroom..😜😜`,
//     `What do you call a pony with a sore throat? A little horse..😜😜`,
//     `What did the left eye say to the right eye? Between you and me something smells..😜😜`,
//     `What did the mama tomato say to the baby tomato? Catch up!.😜😜`,
//     `Why didn't the melons get married? Because they cantaloupe..😜😜`,
//     `What do you call a fake noodle? An impasta..😜😜`,
//     `How did the pig get to the hogspital? In a hambulance..😜😜`,
//     `I'm so good at sleeping I can do it with my eyes closed!.😜😜`,
//     `Why does Humpty Dumpty love autumn? Because he had a great fall..😜😜`,
//     `What happens when a strawberry gets run over crossing the street? Traffic jam..😜😜`,
//     `Why did the cow jump over the moon? The farmer had cold hands..😜😜`,
//     `A termite walks into a bar and says "So is the bar tender here?".😜😜`,
//     `How does an octopus go into battle? Well-armed..😜😜`,
//     `What do you call a pudgy psychic? A four-chin teller..😜😜`,
//     `high angle view of cheerful grandparents talking with granddaughters while sitting on sofa at home.😜😜`,
//     `What do you get when you mix a cocker spaniel a poodle and a ghost? A cocker-poodle boo..😜😜`,
//     `How do celebrities stay cool? They have many fans..😜😜`,
//     `What does a pickle say when he wants to play cards? "Dill me in!.😜😜`,
//     `How much money does a pirate pay for corn? A buccaneer..😜😜`,
//     `Where do young trees go to learn? Elementree school..😜😜`,
//     `Why do bees have sticky hair? Because they use a honeycomb..😜😜`,
//     `How did the student feel when he learned about electricity? Totally shocked..😜😜`,
//     `What do you call a bee that can't make up its mind? A Maybe..😜😜`,
//     `Why was six afraid of seven? Because 7-8-9..😜😜`,
//     `If April showers bring May flowers what do May flowers bring? Pilgrims..😜😜`,
//     `I tried to catch fog yesterday. Mist..😜😜`,
//     `What do you call a hippie's wife? Mississippi..😜😜`,
//     `Two peanuts were walking down the street. One was a-salted..😜😜`,
//     `How can you tell it’s a dogwood tree? By the bark..😜😜`,
//     `What did the buffalo say when his kid went to college? Bison..😜😜`,
//     `What did the mayonnaise say when the refrigerator door was opened? Close the door I'm dressing..😜😜`,
//     `What's the stinkiest planet? Poopiter..😜😜`,
//     `two best friends telling secrets lying in the grass.😜😜`,
//     `What did one wall say to the other? I'll meet you at the corner..😜😜`,
//     `Why don't sharks eat clowns? Because they taste funny..😜😜`,
//     `A horse walks into a bar. The bartender says "Why the long face?".😜😜`,
//     `What did the pirate say when he turned 80? Aye matey..😜😜`,
//     `What's black and white and goes round and round? A penguin in the washing machine..😜😜`,
//     `How do you organize a space party? You planet..😜😜`,
//     `Why couldn't the bicycle stand up by itself? It was two tired..😜😜`,
//     `Did you hear the rumor about butter? Well I'm not going to spread it..😜😜`,
//     `Why did the student eat his homework? Because his teacher told him it was a piece of cake..😜😜`,
//     `What did one hat say to the other? You wait here I'll go on ahead..😜😜`,
//     `What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks..😜😜`,
//     `I couldn't figure out why the baseball kept getting larger. Then it hit me..😜😜`,
//     `What do you call a boomerang that won’t come back? A stick..😜😜`,
//     `What did the full glass say to the empty glass? You look drunk..😜😜`,
//     `How do you stop a bull from charging? Cancel its credit card..😜😜`,
//     `Why don’t we see elephants hiding in trees? Because they’re really good at it..😜😜`,
//     `happy multiracial senior women having fun together outdoor   elderly generation people hugging each other at park.😜😜`,
//     `What’s the difference between a hippo and a zippo? One’s pretty heavy and the other’s a little lighter..😜😜`,
//     `Did you hear the one about the roof? Never mind it's over your head..😜😜`,
//     `I used to hate facial hair...but then it grew on me..😜😜`,
//     `A cheese factory exploded in France. Da brie was everywhere..😜😜`,
//     `What's a ninja's favorite type of shoes? Sneakers..😜😜`,
//     `What's the best smelling insect? A deodor-ant..😜😜`,
//     `What do you call a bear without any teeth? A gummy bear..😜😜`,
//     `Why was the coach yelling at the vending machine? He wanted his quarter back..`];

// const goBtn = () => {

//     let randomNumber = Math.floor(Math.random() * (arr.length))
//     // innerHTML ra outerHTML ma get element garnu pardaina
//     // let joke = document.getElementById('addTxt')
//     addTxt.innerHTML = `"<i>${arr[randomNumber]}</i>"`
// }

//clock using JS

// setInterval(() => {
//     let a = new Date()
//     let h = a.getHours()
//     let m = a.getMinutes()
//     let s = a.getSeconds()
//     hour.innerHTML = h
//     min.innerHTML = m
//     seconds.innerHTML = s
// }, 1000);

//callback
// Syncronous programming

// callback and promises
// const loadScript = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve("Loaded");
//     };
//     document.body.append(script);
//   });
// };

// const mains = async () => {
//   let a = await loadScript(
//     "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
//   );
//   console.log(a);
// };

// mains();

//error in promises
const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let info = notCheck(src);
    if (!info) {
      reject(new Error("script doesn't match"));
    }
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve("Loaded");
    };
    document.body.append(script);
  });
};

const notCheck = (src) => {
  if (
    (src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
  ) {
    return true;
  } else {
    return false;
  }
};

const mains = async () => {
  let a = await loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
  );
  console.log(a);
  // try {
  //   let a = await loadScript(
  //     "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
  //   );
  // } catch (e) {
  //   console.log(e);
  // }
};

mains();
