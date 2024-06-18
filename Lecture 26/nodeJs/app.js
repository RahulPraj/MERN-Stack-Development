// console.log(process.argv)

console.log(process.cwd())
console.log(__dirname);
// let ans = process.argv.slice(1,2)

// console.log(ans)

// -------------1 to 20 numbers print kara do-----
// let num  = process.argv.pop() //it will give the last number we enter

// console.log(num)

// for(let i = 1; i <= num; i++){
//     console.log(item)
// }


// basic approch -> modulus repeated operation
// function fizzbuzz(n){
//     for(let i = 1; i <= num; i++){
//         if(i% 3 == 0 && i % 5 == 0 )
//         {
//             console.log("fizzbuzz");
//         }
    
//         else if(i%3 == 0)
//         {
//             console.log('fizz');
//         }
//         else if(i%5 == 0)
//         {
//             console.log('buzz');
//         }
  // else{
    //     console.log(str);
    // }    
//     }
  
    
// }

// way 2 -> with 2 modulus
// optimal aproach
   
// function fizzbuzz(n){
//     for(let i = 1; i <= num; i++){
//         let str = "";
//         if(i%3==0)
//         {
//             str += "fizz"
//         }
//         if(i%5==0)
//         {
//             str += 'buzz';
//         }
//         if(str == "")
//         str += i;
        
//         console.log(str);

//     }
    
// }


//way-3 -> no operators use

// function fizzbuzz(n){
//     let cnt3 = 1;
//     let cnt5 = 1;
//     for(let i = 1; i <= num; i++){
//         let str = "";
      
//         if(cnt3 == 3)
//         {
//             str += "fizz";
//             cnt3 = 0;
//         }
//         if(cnt5 == 5)
//         {
//             str += "buzz";
//             cnt5 = 0;
//         }
//         if(str == "")
//         {
//             str += i;
//         }
      
//         console.log(str);
//         cnt3++;
//         cnt5++;
//     }
    
// }


// fizzbuzz(num);

