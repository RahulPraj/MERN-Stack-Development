
// function fun(){

// }

// let ans = fun();
// console.log(ans)



// --------------------
// async function fun(){
//     return 10;
// }

// let ans = fun();
// console.log(ans);

// ans.then(function(data){
//     console.log(data)
// })

//---eg-Async await------


async function fun1(){
    await new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("3 sec ka kam hogya")
            resolve();
        },3000)
    })

    await new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("2sec ka kam hogya")
            resolve();
        },2000)
    })

    console.log('dono kam hogye');

}


fun1();