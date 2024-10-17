// sayHello();
// function sayHello(){ //function statement
//     console.log("Hello");
// }

// let say= ()=>{  // arrow function
//     console.log("hello");
// }

// let saymyname=function(){
//     console.log("Say my name");
// }

// say();
// saymyname();
// console.log(age);//undef
// // console.log(a);//error can't accesa before intilization
// var age=24;
// let a=19;

/****************** */ 
//hof
// function calculate(add,sub,divi,multi,a,b,sign){
//     if(sign=='+')
//     console.log(add(a,b));
//     else if(sign=='-')
//     console.log(sub(a,b));
//     else if(sign=='/')
//     console.log(divi(a,b));
//     else if(sign=='*')
//     console.log(multi(a,b));
// }

// function add( a, b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function divi(a,b){
//     return a/b;
// }
// function multi(a,b){
//     return a*b;
// }
// calculate(add,sub,divi,multi,123,234,"+");

/* closure function */

// function fun1(){
//     var a=5,b=3;
//     return function fun2(){
//         return a+b
//     }
// }
// let fun2=fun1();//fun1 return fun2
// console.log(fun2());//print output of fun2


// function fun1(){
//     var a=5,b=3;
//     function fun2(){
//         return a+b
//     }
//     console.log(fun2());
// }
// fun1()


// function fun1(){
//     var a=10,b=20;
//     return function fun2(){
//         let c=40;
//         return ()=>{
//             return a+b+c;
//         }
//     }
// }
// console.log(fun1()()()); by this we can call it directly




// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();
  

// let arr={
//     name:"Ayush",
//     Class:"Btech section e",
//     Roll_NO:19
// }
// for(var key in arr){
//     console.log(arr[`${key}`]);
// }

let arr=[1,2,3,4,5,6];
/*
    Map - creates a new array from calling a function for every array element.
    filter - method creates a new array filled with elements that pass a test provided by a function.
    array.filter(function(currentValue, index, arr), thisValue)
    reduce
    forEach
*/

// arr.forEach((ele,idx)=>{
//     console.log(idx+" "+ele);
// })

// let a=arr.map(num=>num*2)
// console.log(a);


// let b=arr.filter((num,idx)=>{
//     return num%2==0;
// })
// console.log(b);

// let c=arr.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log(c);

// console.log(arr.reduce((prev,curr)=>{ return prev+curr},100));