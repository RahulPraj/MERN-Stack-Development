let buttons = document.querySelectorAll('button');

let inp = document.querySelector('input');

let btnText = '';
for(let btn of buttons){
    btn.addEventListener('click', function(event){
     ///value only when we work with input  uske alwa we use innertext

        btnText = event.target.innerText;

        if(btnText === 'C'){
            inp.value = ""
        }

        else if(btnText === "="){
            //eval() -> it evalute the vale
            try{
                inp.value = eval(inp.value);
            }
            catch(e){
                inp.value = 'Invalid';
                setTimeout(function(){
                    inp.value = "";
                },4000)
            }
           
        }
        //sb numbers pr click krenge jo bach gaya
        else{
            inp.value += btnText;
        }


    })
}