let arr1=[3,7,34,90,12];
console.log("last element",arr1.slice(-1));
let arr2=[true,"green","where",12,56];
console.log("last element",arr2.slice(-1));

//QUESTION2
let myPets=["Cow","Bird","Snake","Dog"];
let myPets2=myPets.join();
console.log({myPets2});
//QUESTION3
var arr3=[-5,9,5,3,2,-3,6,8,4,1];
var arr4=arr3.sort();
console.log({arr4});
//QUESTION 4
let arr=["boy","man","girl",   "school","girl","woman"];
let originalBeings=[];
let duplicates=[];
arr.forEach(being=>{
    if(!originalBeings.includes(being)){
    }
    else(duplicates.push(being));
});
console.log({originalBeings});
console.log({duplicates});
//QUESTION5
let arr5=["the","way","x",4];
let arr6=["the","way","x",4];
const word1="food";
const wordsIndex=arr6.indexOf(word1);
if(word1==arr6[1]){console.log({word1})};
{console.log("the search was not found")};
//QUESTION 6
let word="renniw";
let word2=word.split("").sort().join();
console.log({word2});
//QUESTION7
let myFruits=["Guava","Pear","Mango","Apple","Orange","Lemon","Grape","Pineapple","Melon","Kiwi"];
let newArrFruits=myFruits.slice(0,4)+" Tomato "+myFruits.slice(4);
console.log({newArrFruits});