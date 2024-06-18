let canvas = document.querySelector('canvas');//sheet
let ctx = canvas.getContext('2d')//brush

//we have to first select the color
// ctx.fillStyle = 'red';//color of the rect

//give rectangle
// ctx.fillRect(100, 50, 180,80 ); //its a method , we have to give codinates

// ctx.fillStyle = 'red'; ->wrong

// ctx.strokeStyle = 'blue';//color to the line
//OUTLINE TO THE RECTANGLE


//line ke liye we take path 
//beginPath() -> its a method

ctx.beginPath()

//brush utha kr point pr rakh do
ctx.moveTo(150, 150);
//line move 
ctx.lineTo(150, 300)
ctx.lineTo(300, 300)
ctx.lineTo(300, 100)

//points ko join krdega
ctx.closePath();

ctx.stroke() //ke edges ko joint krdega last points ko

// ctx.fill()


//to write text

ctx.font = '30px sans-serif'
ctx.fillStyle = 'red'
//it accepts 3 things -> text , x and y
ctx.fillText('rahul',100, 300);