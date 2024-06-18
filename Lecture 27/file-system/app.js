let fs = require('fs');

let data = "hi chai aagyi, chai peelo friendsss"

// creating file if present hai to usme hi kam start hojayega nhi to create krdega
fs.writeFile('abc.txt', data, 
    {
        endcoding: 'utf=8', //in html 
        flag: 'w' // write krna cha rahe hn , its optional
    }, 
    (err)=>{
        if(err){throw err}
        console.log("file written successfully")

    }
)

// --------------------without optional part----------------
// fs.writeFileSync('abc.txt', data)

// fs.writeFile('def.txt', data, 
     
//     (err)=>{
//         if(err){throw err}
//         console.log("file written successfully")

//     }
// )


// ------------readFile-------
// get buffer data 
// fs.readFile('abc.txt',

// (err, data)=>{
//     if(err){throw err}
//     console.log(data);
// })

// 
// fs.readFile('abc.txt',
// {
//     encoding: 'utf-8',
//     flag: 'r'
// },
// (err, data)=>{
//     if(err){throw err}
//     console.log(data);
// })

//------------toString method---------
// fs.readFile('def.txt',
// (err, data)=>{
//     if(err){throw err}
//     console.log(data.toString());
// })


// update -> adding data in the give file

// fs.appendFile("abc.txt", 
//     'pehle din, fir dilruba, aur dil ke mehmaan bangaye',
    
//     (err)=>{
//         if(err){throw err}
//     console.log('file updated successfully');
//     }
// )

// fs.appendFileSync('abc.txt', 'you are smart.');
// delete file

// fs.unlink('abc.txt',(err)=>{
//     if(err){throw err}
//     console.log('file delete successfully');
// })