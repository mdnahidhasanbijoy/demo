// var button = document.querySelector('button');
// var box = document.getElementById('change');

//  function changecolor(){
//     if(box.style.background == 'red'){
//         box.style.background = 'blue';
//     }else{
//         box.style.background = 'red'};
// }

// var nahid = "eta clss number 25"

// var demo = document.getElementById("demo").innerHTML = "eta class number 25"
// console.log(demo);

// var country = "Bangladesh"

// console.log(`This is our ${country} A beautiful country` );
 
// let age = 22
// let job = true
// let salary = 20000

// if (age > 21 || job == true || salary >= 50000) {
//     console.log("tumi biye korte parbe");
    
// }else{
//     console.log("wait koro bara");
    
// }

// let result = prompt("Enter your number")

// if (result > 90) {
//     var demo = document.getElementById("demo").innerHTML = "Your Grade: Golden A+"
    
// }else if(result >= 80){
//     var demo = document.getElementById("demo").innerHTML = "Your Grade: A+"
// }else if(result >= 70){
//     var demo = document.getElementById("demo").innerHTML = "Your Grade: A"
// }else if(result >= 60){
//     var demo = document.getElementById("demo").innerHTML = "Your Grade: B"
// }else if(result >= 50){
//     var demo = document.getElementById("demo").innerHTML = "Your Grade: C"
// }else if(result >= 40){
//     var demo = document.getElementById("demo").innerHTML = "Your Grade: D"
// }else if(result >= 30) 
//     var demo = document.getElementById("demo").innerHTML = "Your Grade: F"


// let fruits = prompt("enter fruit name")

// switch (fruits) {
//     case "Apple":
//         document.write("Apple has so much contain of calcium")
//         break;
//     case "Banana":
//         document.write("Banana contain instant energy")
//         break;
//     case "Mango":
//         document.write("Mango is tasty")
//         break;
//     default:
//         document.write("Here is fruit menu")
//         break;
// }

// function myfunction(name, age) {
//     console.log("My name is " + name + " I am " + age);
    
// }
// myfunction("Nahid", "22 years old")

// const myArr = [1,2,3,4,5,6,7]

// const spliceArr = myArr.splice(2,5,24)
// console.log(spliceArr);

// let text = " "
// for (let i = 1; i <= 10; i++) {
//   for(let j = 1; j <= 10; j++){
//     // console.log(i + "x" + j + "=" + i*j);
//     text += i + "x" + j + "=" + i*j + " ";
//   }
  
// }
// document.getElementById("one").innerText = text;

//Urmi apu code
// function HandleClick() {
//     const demoText = document.getElementById("demo");
//     if (demoText.style.display === "none" || demoText.style.display === "") {
//     demoText.style.display = "block";
//     } else {
//     demoText.style.display = "none";
//     }
//     }
//     document.getElementById("btn").addEventListener("click", HandleClick);

//Urmi Apu code
// function HandleClick() {

//     var state = document.getElementById("demo")
//     if (state.style.display ==="none" || state.style.display ==="") {
//         state.style.display = "block";
//     } else{
//         state.style.display = "none";
//     }
// }
// document.getElementById("btn").addEventListener("click", HandleClick)




//  let state = false;

//   function HandleClick() {
//     const demo = document.getElementById("demo");

//     if (state) {
//       demo.style.display = "none";
//       state = false;
//     } else {
//       demo.style.display = "block";
//       state = true;
//     }
//   }




// let demo = document.querySelector(".demo");
// let btn = document.getElementById("btn");

// function HandleClick(){
//     demo.classList.toggle("two")

// }
// btn.addEventListener("click", HandleClick)


// const car = {type:"Lamborghinni", model:"500", color:"white"};

// console.log(" car name is " + car.type + " model is " + car.model + " and color is " + car.color);

//destucturing start.//
// const vehicles = ["omar", "kashem","mofiz"];

// const [one, two, three] = vehicles;
// console.log(one);
//destructuring end.//

// let passwordInput = document.getElementById("inputPassword");
// let icon = document.getElementById("eye");

// icon.addEventListener("click", ()=>{
//     let type = passwordInput.type === "password"?"text":"password"
//     passwordInput.type = type
//     // icon.classList = "fa-eye-slash" === "password"? "show": "fa-eye-slash"
//     icon.innerHTML  = type === "password"? `<i class="fa-solid fa-eye"></i>`: `<i class="fa-solid fa-eye-slash"></i>`
 
// })


// let counter = document.querySelectorAll(".counter");
// let arr = Array.from(counter)

// arr.map((item)=>{
//     let count = 0
//     let increment = function () {
//         count++;
//         item.innerHTML = count;
//         if (count == item.dataset.number) {
//            clearInterval(stop);
    
//         }
        
//     };
//     let stop = setInterval(()=>{
//         increment();
//     },100/item.dataset.number)
// })
  



// let count = 0;
// let one = document.getElementById("one")
// let start = document.getElementById("start")
// let stop = document.getElementById("stop")

// let interval ;
// start.addEventListener("click", ()=>{
//     if(!interval){
//         interval = setInterval(()=>{
//             if(count < 100){
//                 count++
//                 one.innerHTML = count;
//             }else{
//                 clearInterval(interval)
//                 interval = null
//             }
//         }, 100)
//     }
// })
// stop.addEventListener("click",()=>{
//     clearInterval(interval)
//         interval = null
// })

// let prices = [300,400,500,600]

// let discount = prices.map((price)=>{
//     const percentage = price*(10/100);
//     return price - percentage;
// })
// console.log(discount);


// let products = [{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"},
//                 {firstName:"David", lastName:"Back", age:55, eyeColor:"black"},
//                 {firstName:"Michel", lastName:"carry", age:45, eyeColor:"gray"},
// ] 

// let search = products.reduce((total, item)=>{
//     console.log(total);
//     return total + item.age;
    
// },0)

// console.log(search);




// const days = document.getElementById("days")
// const hours = document.getElementById("hours")
// const minutes = document.getElementById("minutes")
// const seconds = document.getElementById("seconds")


// const targetDate = new Date("May 01 2025 00:00:00").getTime();



// function timer() {
//     const todayDate = new Date().getTime();
//     const distance = targetDate - todayDate;

//     const days = Math.floor(distance/1000/60/60/24);
//     const hours = Math.floor(distance/1000/60/60)%24;
//     const minutes = Math.floor(distance/1000/60)%60;
//     const seconds = Math.floor(distance/1000)%60;

//     days.innerHTML = days;
//     hours.innerHTML = hours;
//     minutes.innerHTML = minutes;
//     seconds.innerHTML = seconds;
 
    
    
// }

// setInterval(timer,1000)

// const Days = document.getElementById("days");
// const Hours = document.getElementById("hours");
// const Minutes = document.getElementById("minutes");
// const Seconds = document.getElementById("seconds");

// const targetDate = new Date("May 01 2025 00:00:00").getTime();
 
// function timer() {
//     const todayDate = new Date().getTime();
//     const distance = targetDate - todayDate;

//     const days = Math.floor(distance / 1000 / 60 / 60 / 24);
//     const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
//     const minutes = Math.floor(distance / 1000 / 60) % 60;
//     const seconds = Math.floor(distance / 1000) % 60;

//     Days.innerHTML = days;
//     Hours.innerHTML = hours;
//     Minutes.innerHTML = minutes;
//     Seconds.innerHTML = seconds;
// }

// setInterval(timer, 1000);
// timer();  

// let firstUi = document.querySelector(".firstUi");
// let firstInput = document.querySelector(".firstInput");
// let firstUiBtn = document.querySelector(".firstUiBtn");
// let firstUiError = document.querySelector(".firstUiError");
// let secondUi = document.querySelector(".secondUi");
// let secondUiHeading = document.querySelector(".secondUiHeading");
// let secondInput = document.querySelector(".secondInput");
// let secondUiBtn = document.querySelector(".secondUiBtn");
// let secondUiError = document.querySelector(".secondUiError");
// let thirdUi = document.querySelector(".thirdUi");
// let thirdInput = document.querySelector(".thirdInput");
// let thirdUiBtn = document.querySelector(".thirdUiBtn");
// let thirdUiHeading = document.querySelector(".thirdUiHeading");
// let thirdUiError = document.querySelector(".thirdUiError");
// let decision = document.querySelector(".decision")




// firstUiBtn.addEventListener("click",()=>{
//     let value = Number(firstInput.value)
//     if (value) {
//         firstUiError.innerHTML = "Please enter a Name"
//     } else if (firstInput.value == "") {
//         firstUiError.innerHTML = "Please enter valid information"
//     }else{
//         firstUi.style.display = "none";
//         secondUi.style.display = "block";
//         secondUiHeading.innerHTML = firstInput.value + " Hello P1! " + " welcome"
        
//     }
// })
// secondUiBtn.addEventListener("click",()=>{
//     let value = Number(secondInput.value)
//     if (!value) {
//         secondUiError.innerHTML = "Please enter a Number"
//     }else if(value < 1 || value > 100){
//         secondUiError.innerHTML = "Please enter number between 1-100"
//     }else if (secondInput.value == "") {
//         secondUiError.innerHTML = "Please enter valid information"
//     }else{
//         secondUi.style.display = "none";
//         thirdUi.style.display = "block";
//        thirdUiHeading.innerHTML = "player two " + "guess the player one's number"
//     }
// })

// thirdUiBtn.addEventListener("click",()=>{
//     if (secondInput.value == thirdInput.value) {
//         thirdUi.style.display = "none";
//         decision.innerHTML = "Congratulations You win"
//         decision.style.color = "red"
//     } else{
//         thirdUi.style.display = "none";
//         decision.innerHTML = "Opps You Loss"
//     }
// })


// let state = false

// function HandleClick() {
//     if (state == true) {
//         document.getElementById("bulb").src="images/light bulb off.png";
//         state = false;
//     } else{
//         document.getElementById("bulb").src="images/light bulb on.png";
//         state = true;
//     }
// }
// document.getElementById("btn").addEventListener("click", HandleClick)

let image = document.getElementById("bulb")
function HandleClick() {
   
    if (image.src.match("light bulb on")) {
        image.src = "images/light bulb off.png"
       
    } else{
         image.src = "images/light bulb on.png"
    }
}
document.getElementById("btn").addEventListener("click", HandleClick)

function HandleOff() {
   
    if (image.src.match("light bulb off")) {
       
         image.src = "images/light bulb on.png"
         console.log(image);
         
    } else{
         image.src = "images/light bulb off.png"
    }
}
document.getElementById("btn-2").addEventListener("click", HandleOff)

