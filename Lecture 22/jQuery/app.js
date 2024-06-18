
// $ = selecting element it works as querselecterAll
// let h11 = $('h1');

// let h12 = $('.samarth');

// let h13 = $('#sam');

//-------------applying css property-----------------
//not a good practice

// h11.css('color', 'red');
// h11.css('background-color', 'green');

// h11.css('font-size' , '44px')


//to give properties in form of obj

// h11.css({
//     color: 'purple',
//     backgroundColor: 'yellow',
//     fontSize: '44px'
// })

//---------------innerText, innerHtml,TextCOontent => text ---------------

// $('p').text(); //getter

// console.log($('p').text('hi i am rahul')); //setter
//console.log($('p').text("<h1>hi samarth</h1>")) //wrong -> tags ke sath dega 

//innerhtml ka kam .html kr raha hai and its avaire of the text
// .html()

// console.log($('p').html())//getter

// console.log($('p').html("<h1>hi samarth</h1>"))// text without tag


//------------------attribute---------------
//attr()

// let ans = $('#inp').attr('type') //getter
// console.log(ans);


// let ans =  $

//-----------------------------------------------
// let h2 = $('h2')

//select first element
// .first()

// h2.first()// selecting first element
// h2.first().css("color", "red");

// h2.last().css("color","blue");

// -----------------------------------------------
//input

// let inp = $('input')

// inp.val() // work like getter

// inp.val('hii rahul') //setter

// -------------------------------------------------
//classlist -> in jquery

//addclass
// h2.first().addClass('first');

//More than one class may be added at a time, separated by a space, to the set of matched elements

// h2.first().addClass('first second'); // right way

// h2.first().addClass('first', 'second'); // wrong way


//removeClass()

// h2.first().removeClass("second");

// h2.first().removeClass("second first");


//toggle
// h2.first().toggleClass('first')

//contains -> use .hasClass()

//The .hasClass() method will return true if the class is assigned to an element, even if other classes
//  also are. For example, given the HTML above, the following will return true


// console.log(h2.first().hasClass("first")); //return true if present
// //multiple can be done
// //order matters
// console.log(h2.first().hasClass("first second")); // return true, true


// ----------------------------------------------------------
// $('button').click(function(){
//     console.log('clicked')
// })

// $('li').click(function(e){
//     $('li').text()

//     console.log(e.target.text())
// })

//we use this -> ye  btayega mera target element kon sa hai
//  $('li').click(function(){
// //     $(this).text()
//      console.log($(this).text());
//      $(this).css('font-size','50px');
// })

// -------------------------we can add multiple function ----------------------
//   $('li').click(function(){

//      console.log($(this).text());
//      $(this).css('font-size','50px');
// })

// $('li').click(function(){

//     console.log($(this).css('color' ,'red'));
// //      $(this).css('font-size','50px');
// })
// it will not work like pure dom

//order  -> keydown, keypress, keyup



//keyup
// $('input').keyup(function(){
//     console.log((this).val());
// })


//keydown key presss se pehle hota hai
// $('input').keydown(function(){
//     console.log((this).val());
// })


// -------------------------------------------------------
//alternative of addEventListener -> .on()
// $('button').on('click', function(){
//     console.log('hello')
// })

// ------------------Effects-------------------------------
//ajayegi -> div
$('#fadeIn').click(function(){
    // $('#div').fadeIn();
    $('#div').slideDown();
})

//chali jayegi -> div
$('#fadeOut').click(function(){
    // $('#div').fadeOut();
    $('#div').slideUp();
})
$('#fadeToggle').click(function(){
    // $('#div').fadeToggle();
    $('#div').slideToggle();
})