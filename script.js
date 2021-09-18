var isTrianglebutton=document.querySelector("#btn");
var isHypotenuseButton=document.querySelector("#btnHypotenuse");


function displayIfTriangle(){
    var isTriangleangle1=document.querySelector("#angle1");
    var isTriangleangle2=document.querySelector("#angle2");
    var isTriangleangle3=document.querySelector("#angle3");
    var isTriangleresult=document.querySelector("#result");
    var angle1=Number(isTriangleangle1.value);
    var angle2=Number(isTriangleangle2.value);
    var angle3=Number(isTriangleangle3.value);
    isTriangleresult.innerHTML="Result will be here";
    var total=angle1+angle2+angle3;
    if ((total)==180){
        isTriangleresult.innerHTML="Yay! It is a triangle";
        console.log("3");
    }
    else if ((total)===0){
        isTriangleresult.innerHTML="Please enter all the angles greater than 0";
        console.log("2");
    }
    else{
        isTriangleresult.innerHTML="No sorry not a triangle";
        console.log("1");
    }
}

function displayIfHypotenuse(){
    console.log("button hyp")
    var baseHypotenuse=document.querySelector("#baseHypotenuse").value;
    var heightHypotenuse=document.querySelector("#heightHypotenuse").value;
    var resultHypotenuse=document.querySelector("#resultHypotenuse");
    baseHypotenuse=Number(baseHypotenuse);
    heightHypotenuse=Number(heightHypotenuse);
    var hypotenuse;
    if ((baseHypotenuse==0) || (heightHypotenuse==0)){
        resultHypotenuse.innerHTML="Base or Height cannot be zero";
    }
    else {
        hypotenuse= Math.sqrt((baseHypotenuse**2)+(heightHypotenuse**2));
        console.log(hypotenuse);
        resultHypotenuse.innerHTML=`Hypotenuse is ${hypotenuse}`;

    }
    
}

isTrianglebutton.addEventListener("click",displayIfTriangle);
isHypotenuseButton.addEventListener("click",displayIfHypotenuse);