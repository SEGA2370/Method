






// wednsday lecture examples
// let a=['sheep','sleep']
// a[3]='cow'
// console.log(a)

// let push=['eat', 'sleep'];
// push.push('softclub')
// // Result ['eat', 'sleep' 'softclub']

// let unshift=['eat', 'sleep'];
// unshift.unshift('softclub')
// // Result [ 'softclub' 'eat', 'sleep' ]

// let pop=['eat', 'sleep', 'softclub']
// pop.pop()
// console.log(pop)
// // Removes Softclub Last Element
// let shift=['eat', 'sleep', 'softclub']
// shift.shift()
// console.log(shift)
// // Removes eat First Element

// let arr1=['2','3','4']
// let arr2=['5','6','7']
// let arr3=['8','9',]
// let Merge=arr1.concat(arr2,arr3)
// console.log(Merge)

// let sort=[2,1,4,3]
// sort.sort()
// console.log(sort)
// let sortfun=[2,20,40,5]
// sortfun.sort(function(a,b){return b-a})
// let sorted=sortfun
// console.log(sorted)


// REDUCE
// const array1 =[1,2,3,4]
// undefined
// // 1*2*3*4
// undefined
// const start=1
// undefined
// const multiply = array1.reduce((a,b) => a*b ,start)
// console.log(multiply)

// Class Task Friday 24,02,2023
// Q1 Even or Odd
// function EvenOrOdd(arr)
// {
//     let arr1= arr.reduce((e, i) => (e + i), 0)
//     return arr1%2===0?'even':'odd]'
//     // let arr1= arr.reduce((e, i) => (e + i), 0)
//     // let arr2=arr1%2
//     // return [arr2].includes(0)
   
// }
// console.log(EvenOrOdd([0,1,5]))

// Q2 Number in String
// function NumbersInString(arr)
// {
//  return arr.filter((e)=>{
//     return e.includes(0) || e.includes(1) ||
//      e.includes(2) || e.includes(3)
//     || e.includes(4) || e.includes(5)
//     || e.includes(6) || e.includes(7)
//     || e.includes(8) || e.includes(9)
//  })   
// }
// console.log(NumbersInString(['1a','a','2b','b']))

// Q3 Mirror Array
// function MirrorArray(arr)
// {
//  let arr1=[...arr].reverse().slice(1)
//  let arr2=[...arr].concat(arr1)
//  return arr2
// }
// console.log(MirrorArray([1,2,3,4,5,6,7,8,9]))

// Q4 25Mile Marathon
// function Marathon(arr)
// {
//     let arr1 = arr.reduce((a, b)=>{return Math.abs(a)+Math.abs(b)});
//     if(arr1 == 25){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(Marathon([-6,-15,-4]))

// // Q5 RemoveDuplicate

// function DuplicateRemove(arr)
// {
//     return arr.filter((Element,Index) =>
//     arr.indexOf(Element) === Index)
// }
// console.log(DuplicateRemove(['john','taylor','john']))

// Q6Number to Reversed Array
// function ReversedArray(arr)
// {
//     let arr1=Array.from(String(arr), Number);
//     return arr1.reverse()
// }
// console.log(ReversedArray(12345))

// Class Work 22.02.2023 Methods with aRRay
// Q1 MIN&&MAX
// let arr=[1,2,3,4,5]
// function MaxMin(arr)
// {
//     return [Math.min(...arr),Math.max(...arr)]
// }
// console.log(MaxMin(arr))

// Q2 FindTrue
//  function CountTrue(arr)
//  {
//     return arr.filter((e)=>{return e==true}).length
//  }
//  console.log(CountTrue([true,false,true,false]))


// Q3 Total Of All Array
// function  MultiplyArray(...arr)
// {
//    let arr2= arr.map((a)=>{
//     return a.reduce((x,y)=>
//     {return x*y})
// })
// return arr2.reduce((a,b)=>{return a+b})
// }
// console.log(MultiplyArray([2,2,2],[2,1,1]))


// Q4 DropElement
// function FirstElements(arr,b)
// {
//     return arr.slice(b)
// }
// console.log(FirstElements([1,2,3],1))

// Q5 Buggy Code
// function BuggyCode(arr)
// {
//     return arr.reduce((x,y)=>{return x+y})
// }
// console.log(BuggyCode([1,2,3,4,5]))

// Q6 Array to String
// function ToString(arr)
// {
//     return arr.join("")
// }
// console.log(ToString([1,2,3,4,5]))

// Q7 2ndLargest
// function SecondLargest(arr)
// {
//     return arr.sort((function(a,b){return b-a}))[1]

// }
// console.log(SecondLargest([20,30,40,50,25]))

// Q8 Find Index
// function FindIndex(arr,b)
// {
//     return arr.indexOf(b)
// }
// console.log(FindIndex(['hi','fgh','he','gy','we'] , 'we'))

// Q9 SumNumberElements
// function SumElementNum(arr)
// {
//     let arr2= arr.filter(function (x,y){
//         return typeof(x)==="number"
//     })
//     return arr2.reduce((a,b)=>{
//         return a+b
//     },0)
// }
// console.log(SumElementNum([true,false,'123','75']))

// Q10 Multiply
// function MultiplyElementIndex(arr)
// {
    
//     return arr.map(function(a,b)
//     {return a*b}
//     )
//     .reduce(function(a,b)
//     {return a+b}
//     )
// }
// console.log(MultiplyElementIndex([-3,0,8,-6]))

// Q11 Seven Boom
// function SevenBoom(arr)
// {
//    let a= arr.join('')
//    if (a.includes(7))
//    {return "BOOM!"}
//     else
//     return "There is No 7"
// }
// console.log(SevenBoom([3, 0, 8, 6, 587]));


// Q 12 Return Duplicate
// function Duplicates(arr)
// {
//     return arr.filter((Element,Index) =>
//     arr.indexOf(Element) !== Index)
// }
// console.log(Duplicates(['john','taylor','john']))

// Q13 function RemoveString(arr)
// {
//     let arr2= arr.filter(function (x,y){
//                 return typeof(x)==="number"
//             })
//             return arr2
// }
// console.log(RemoveString([1,2,3,"tr","sr"]))


// Q14 EvenAlltheWay
// function EvenAlltheWay(arr)
// {
//     let arr2
//     arr2=arr.filter((a)=> (a%2===0))
//     return arr2.filter((a,b)=> (b%2===0))  
// }
// console.log(EvenAlltheWay([1,3,2,6,4,8]))

// Q15 Sort By.length
// function SortFunction(arr)
// {
//     return arr.sort(function(a,b){return a.length - b.length})
// }
// console.log(SortFunction([,'Google','Apple','Microsoft']))

// Q16 Compact
// function Compact(arr)
// {
//     let arr2
//     arr2=arr.filter((a)=> {return a!==false})
//     .filter((a)=> {return a!==""})
//     .filter((a)=> {return a!==null})
//     .filter((a)=> {return a!==0})
//     .filter((a)=> {return a!==undefined})
//     .filter((a)=> {return a!==NaN})
//     return arr2
// }
// console.log(Compact([0,1,false,2,"",3]))

// Q17 Special Arrays
// function SpecialArrays(arr)
// {
//  for(let i=0;i<arr.length;i++)
//  {
//     if(i%2===0 && arr[i]%2!==0)
//     {
//     return false
//     }
//     else if(i%2===1 && arr[i]%2!==1)
//     {
//         return false
//     }
// }
// return true

// }
// console.log(SpecialArrays([2,3,4,5,6,7,8,9]))




// .filter((val, ind, arr) => arr.indexOf(val) === ind)
// HomeTask Wednsday
// Q1 Remove Vowels
// function Vowels(a)
// {
//     return a.replaceAll('a','').replaceAll('e','')
//     .replaceAll('i','').replaceAll('o','')
//     .replaceAll('u','')
//     .replaceAll('A','')
//     .replaceAll('E','').replaceAll('I','')
//     .replaceAll('O','').replaceAll('U','')
// }
// console.log(Vowels("I have never seen a thin person drinkin Diet Coke"))


// Q2 Square Every Digit
// function squareNum(n) {
//     let a=''
//     for(let i=n;i>0;) {
//         a+=Math.pow(i%10,2)
//         i=Math.floor(i/10)
//     }
//     return a
// }
// console.log(squareNum(9119));


// Q2 Square Every Digit
// function squareDigits(n) {
//     return +(n.toString().split('').map(number => number * number).join(''));
// }
// console.log(squareDigits(9119));

// Q3 Potato
// function Potato(a)
// {

//    let potato=a.replaceAll('potato','potato ').split(' ')
  
//         let cnt=0
//         for(let i=0;i<potato.length;i++)
//         {
//             if (potato[i].includes('potato'))
//             cnt++
//         }
//     return cnt
   
// }
// console.log(Potato("potatopotatoapple"))

// Q4 Unsolved




// Q5 Unsolved

// Q6
// function FirstVowel(a)
// {
    
// }
// function 
// Class Task Methods

















// Q6 returnXtimes
// function returnXtimes(a,b)
// {
// let cnt=0
// for ( let i=0;i<b.length;i++)
// {
//     if(a==b[i])
//     {
//         cnt++;
//     }
//   else cnt
// }
// return cnt
// }
// console.log(returnXtimes("b","big Fat bubble"))



// Q5 Photo in Phone Solve
// function reversing(number)
// {
//     return number+(number.toString().split("").reverse().join(''))
// }
// console.log(reversing(123))


// Q4 Vowels
// function Vowels(a)
// {
//         let cnt=0
//         for(let i=0;i<a.length;i++)
//         {
//             if (a.charAt(i)=="a" || a.charAt(i)=="o" 
//             || a.charAt(i)=="e" || a.charAt(i)=="u" )
//             cnt++
//         }
//     return cnt
// }
// console.log(Vowels("palm"))


// Q3 DetectUpperCase
// function DetectUpperCase(a)
// {
//     let Uppercase="";
//     let LowerCase="";
//     for(let i=0;i<a.length;i++)
//     {
//         if(a.charAt(i)==a.charAt(i).toUpperCase()){
//             Uppercase+=a[i]
//         }
//         else LowerCase+=a[i]
//     }
//     return Uppercase+LowerCase
// }
// console.log(DetectUpperCase("AhPy"))

// Q2 convert 1st letterUppercase
// function ConvertToUpperCase(a)
// {
    
//     b = a.charAt(0).toUpperCase()
//     return `${b}${a.substring(1)}`
//     }
//     console.log(ConvertToUpperCase("headache headache headache"))


// Q1 Convert to Massive(Array)
// function ArrayConvert(a)
// {
//     return a.split(' ')
// }
// console.log(ArrayConvert("HeadAche Head Ache Head is hurting"))



// Q1 transform 1st letter to Uppercase
// Version 1
// function TransformUpperCase(a)
// {
// a = a.split(" ")
// let b = 0
// let c = ' ';
// for (let i =0;i < a.length; i++)
// {
//     b =a[i];
//     b =b.toUpperCase();
//     b = a[i].replace(a[i].charAt(0), b.charAt(0))
//     c +=b + ' ';
// }
// return c;
// }
// console.log(TransformUpperCase("I would finish that"))



//  Join method read about
// Version 2
// function TransformUpperCase(a)
// {
//     let b=a.split(' ')
//     for (i=0; i<b.length; i++)
//     {
//         b[i]=b[i].charAt(0).toUpperCase()+b[i].substring(1)
//         b.join(' ')
//     }
   
//     return b.join(' ')
// }
// console.log(TransformUpperCase("I would finish that"))


























// EXAMPLES


// Concat
// let text1 = "sea";
// let text2 = "food";
// let result = text1.concat(" ",text2);

// console.log(result)


// Replace and ReplaceAll
// let text = "Mr Blue has a blue house and a blue car";
// let result = text.replaceAll("blue", "red");

// console.log(result)

// Substr
// let text = "How are you doing today?";
// const myArray = text.split(" ");
// let word = myArray[1];
// console.log(word)


// let text1 = "How are you doing today?";
// const myArray1 = text1.split("");
// let word1 = myArray[2];
// console.log(word1)

// let text2 = "How are you doing today?";
// const myArray2 = text2.split(" ", 3);
// let word2 = myArray[3];
// console.log(word2)

// Substring
// let text = "Hello world!";
// let result = text.substring(1, 4);
// console.log(result)

// Slice
// let text = "Hello world!";
// let result = text.slice(7);
// console.log(result) // Result orld!

// toLowerCase
// let text = "SOFTCLUB!";
// let result = text.toLowerCase();
// console.log(result) //result softclub

// // toUpperCase
// let text1 = "softclub!";
// let result1 = text1.toUpperCase();
// console.log(result1) //result softclub

// Trim
// let text = "       Trim        ";
// let result = text.trim();
// console.log(result)  // trim removes space around


// includes
// let text = 'Hello SoftClub, welcome to the universe.'
// let result = text.includes('SoftClub')
// console.log(result)
// // Start looking at Position 12
// let text1 = 'Hello SoftClub, welcome to the universe.'
// let result1 = text.includes('welcome',6)
// console.log(result)

// let text = "Mr. Blue has A blue House"
// let result = text.search("has")
// console.log(result) // Result 9 index


// let text = "Mr. Blue has A blue House"
// let result = text.indexOf("A")
// console.log(result) // Result 13 index


// let number = NAN;
// let number2 = 1;
// let result = isNaN(number)
// let result2 = isNaN(number2)
// console.log(result) // True
// console.log(result2) //False