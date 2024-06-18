function grade(){

    let marks = 85;
    if(marks >= 90){
        console.log("topper");

    }
    else if(marks >= 80){
        console.log("A+");
    }
    else if(marks >= 70  ){
        console.log("B+");
    }
    else if(marks >= 60){
        console.log("C+");

    }else{
        console.log("fail")
    }
}

grade();