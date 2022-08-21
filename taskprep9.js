// Using call to call a function.
var obj = { name:4};
var addNum = function(a){
    return this.name +a;
}
console.log(addNum.call(obj,6));

//-----------------------------------------------------------
//Program Using Aplly.
let obj2 = {Fees:10};
var arr = [3,5,7];
 var countFee = function(a,b,c){
    return this.Fees +a+b+c;
 }
 console.log(countFee.apply(obj2,arr));

 //---------------------------------------------------------------
 // program using bind.
 let obj3 = { Amount:10};
 var Calculate = function(a,b,c){
    return obj3.Amount +a+b+c;
 }
 var bound = Calculate.bind(obj3);
 console.log(bound(2,3,4));

 //-----------------------------------------------------------------
 // Question 4 without passing Argument.
var Student = {
    Age:20 };
var StuAge = function(){
    return Student.Age;
}
let Getage = StuAge.bind(Student);
console.log(Getage());