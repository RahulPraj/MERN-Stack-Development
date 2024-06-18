//--------callback hell--------



// setTimeout(function(){
//     console.log("1st step runnning after 3s")
// } , 3000)


// setTimeout(function(){
//     console.log("2nd step runnning after 4s")
// } , 4000)

// setTimeout(function(){
//     console.log("3rd step runnning after 2s")
// } , 2000)



// -------------WRONG APPROACH---------------------


// function step1(){
//     console.log("selecting image")
//     setTimeout(function(){
//         console.log("image selected");
//         return("image selected");
//     } , 4000)
// }

// function step2(image){
//     console.log('applying filter')
//     setTimeout(function(){
//         console.log(`applied the fiter to the ${image}`);
//         return "filtered image"
//     } , 2000)
// }

// function step3(filter){
//     console.log("selecting caption");
//     setTimeout(function(){
//         console.log(`caption added to the ${filter}`)
//         return 'final image'
//     } , 3000)
// }

// function step4(final){
//     console.log('uploading your image plz wait');
//     setTimeout(function(){
//         console.log(`uploaded your ${final}`)
//     } , 4000)
// }

// let image = step1();
// let filter = step2(image);
// let final = step3(filter);
// step4(final);

//----------better approach----------- 9 

function step1(cb) {
    console.log("selecting the image");
    setTimeout(function(){
        console.log("image selected");
        cb('image selected')
    },4000)
}

function step2(image, cb){
    console.log(`applying filter to the ${image}`);
    setTimeout(function(){
        console.log("filter applied");
        cb("filter applied")
    }, 2000)
}

function step3(filter, cb){
    console.log(`caption appyling on ${filter}`);
    setTimeout(function(){
        console.log("caption apllied successfuly");
        cb('final image');
    },3000)
}

function step4(final){
    console.log(`uploading the ${final}`);
    setTimeout(function(){
        console.log("image uploading successfully")
    },4000)
}

step1(function(image){
    step2(image, function(filter){
        step3(filter, function(final){
            step4(final)
        })
    })
})