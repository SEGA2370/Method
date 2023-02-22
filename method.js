// wednsday lecture examples
// let a=['sheep','sleep']
// a[3]='cow'
// console.log(a)



















// Class Work 22.02.2023 Methods with aRRay
// Q1 MIN&&MAX
// let arr=[1,2,3,4,5]
// function MaxMin(arr)
// {
//     return [Math.min(...arr),Math.max(...arr)]
// }
// console.log(MaxMin(arr))

// Q2 FindTrue
// function CountTrue(arr)
// {
    
// }















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