// var color = "bluredasjdnai";
// var ok = color.length;

// var str = "ireallylovethepizza";
// var try2 = str.indexOf("pizza");



// var str3 = "bus, car, plane, zug";
// var try3 = str3.slice(0,6);


// var str4 = "please come to my place";
// var try4 = str4.replace('place', 'home')


// var x = 5.417668;
// var y = x.toPrecision(3);
// console.log(y);





// var myString = 'Salom, dasturchilar. nima gaplar?';
// var splits = myString.split(' ', 3);

// console.log(splits);

// let numbers = [];
// let index = 1;

// numbers[3] = 8;
// numbers[index] = 2;

// console.log(numbers); 

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(function(number){
//     number < 3;
// });

// console.log(filteredNumbers);

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(1, 3));

// let targets = [1500, 3000, 5000, 7500, 10000, 15000];


// // Цикл, в котором выясняется, какими перелётами мили накопятся быстрей

// for (let i = 0; i < targets.length; i++) {
//   let flightsVariantFirst = calculateFlights(3118, true, targets[i]);
//   let flightsVariantSecond = calculateFlights(3617, false, targets[i]);

//   console.log('Необходимое количество полётов в бизнес-классе до Валенсии: ' + flightsVariantFirst);
//   console.log('Необходимое количество полётов в экономе до Лиссабона: ' + flightsVariantSecond);

//   if (flightsVariantFirst > flightsVariantSecond) {
//     console.log('Быстрей накопишь полётами в экономе до Лиссабона! Количество полётов: ' + flightsVariantSecond);
//   } else {
//     console.log('Быстрей накопишь полётами в бизнесе до Валенсии! Количество полётов: ' + flightsVariantFirst);
//   }
// }

// let arr = [5, 16,  7,  4, 10,  3,  4,  4, 14,  5, 14,  4,  44,  4];

// for(let i = 0; i <= arr.length; i++){
//   if(arr[i] = 4){
//     console.log(arr[i]++); 
//   }
// };

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 5, 55, 9, 0];

//     for( var i = 0; i < arr.length; i++){ 

//         if ( arr[i] === 5) { 

//           arr.splice(i, 5);  
//           i--;
//           console.log(arr[i])
//         }
//       }

// const twoSum = (nums, target) => {
//   let storage = {};
//   for(let [index, num] of nums.entries()){
//       if(storage[num] !== undefined) return [storage[num], index];
//       storage[target-num] = index;
//   }
// };

// let heart = document.querySelector('.heart');
// let likesNumber = document.querySelector('.likes-number');
// let counter = 0;

// heart.onclick = function () {
//   counter++;
//   likesNumber.textContent = counter;
//   heart.classList.toggle('added');
// };

// const numbers = [84, 54, 10, 105,  26, 23,78, 12, 94]
// numbers.sort();
// console.log(numbers);
// let key = document.querySelectorAll('.key');
// let display = document.querySelector('.display');
// let clear = document.querySelector('.clear');
// key.onsubmit = function(evt){
//   evt.preventDefault();
//   for( letter of key){
//     console.log(x);
//   }
  
// }

// clear.onclick = function(){
//   display.textContent = "";
// }


// const letters = ['a', 'b', 'c', 'd', 'a', 'c', 'c', 'd', 'a', 'd'];
// let count = {};

// letters.forEach(item => {
//     if(count[item]){
//         console.log(count[item]++);
//     }else{
//         count[item] = 1;
//     }
// })
// console.log(count);

// const str = 'coding is fun!';

// const res = str.split('').reverse().join('');
// console.log(str.split(''));

// const gerPermutation = arr => {
//     const swapInPlace = (arrSwap, indexA, indexB) =>{
//        const temp = arrSwap[indexA];
//        arrSwap[indexA] = arrSwap[indexB];
//        arrSwap[indexB] = temp;
//     }
    
// };
// const arr = [1,2,3,4];
// gerPermutation(arr);
// console.log(arr)

// function reverseString(str){
//     var final = '';
//      for(var i = str.length - 1; i >=0; i--){
//          final += str[i];
//      }
//      return final;
// }
// console.log(reverseString('hello'));
