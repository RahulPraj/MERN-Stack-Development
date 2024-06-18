
//Promise is a constructor

//--------------basic syntax------------------------
//let promise = new Promise(function(resolve, reject){


//})


//---------------------------------------------------

// let promise = new Promise(function(resolve, reject){
//     let data  = 'billo bagge biyeya da ki kregi';
//     resolve(data);

//     let error = 'baby beer peeke nachereli chammak chammak cham'
//     reject(error);
// })

// promise
// .then(function(data){
//     console.log(data);
// })
// .catch(function(err){
//     console.log(err);
// })

//eg--------------
let p1  = new Promise(function(resolve, reject){
    console.log("3sec wait karo work in progress")
    setTimeout(function(){
        resolve()
    }, 3000)
})

p1.then(function(){
    console.log("kam hogya i ma happy")
})

//----eg - instagram story with promise-----
// let step1 = function(){
//     console.log("selecting image");
//     return new Promise(function(resolve, reject){
//        setTimeout(function(){
//         console.log("image selected");
//         resolve("image selected")
//        },4000)
//     })
// }

// let step2 = function(image){
//     console.log(`applying fillter on ${image}`)
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             console.log("filter applied")
//             resolve("filtered image")
//         },3000)
//     })
// }

// let step3 = function(fillter){
//     console.log(`adding caption on ${fillter}`)
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             console.log("caption aded to the image");
//             resolve("final image");
//         },2000)
//     })
// }

// let step4 = function(final){
//     console.log(`uploading the ${final}`);
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log('iamge uplaod successfully')
//         },4000)
//     })
// }

// step1
// .then(function(image){
//     return step2(image)
// })
// .then(function(fillter){
//     return step3(fillter)
// })
// .then(function(final){
//     return step4(final);
// })
// .catch(function(err){
//     console.log(err)
// })