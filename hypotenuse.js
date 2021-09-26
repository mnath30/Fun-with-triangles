var isHypotenuseButton=document.querySelector("#btn-hypotenuse");
var baseHypotenuse=document.querySelector('#base-hypotenuse');
var heightHypotenuse=document.querySelector('#height-hypotenuse');
var resultHypotenuse=document.querySelector('#result-hypotenuse');


function displayIfHypotenuse(){
    baseHypotenuse=Number(baseHypotenuse.value);
    heightHypotenuse=Number(heightHypotenuse.value);
    var hypotenuse;
    if (baseHypotenuse && heightHypotenuse){
        if ((baseHypotenuse<0) || (heightHypotenuse<0)){
            resultHypotenuse.innerText="Base or Height values cannot be negative";
        }
        else {
            hypotenuse= Math.sqrt((baseHypotenuse**2)+(heightHypotenuse**2));
            resultHypotenuse.innerText=`Hypotenuse is ${hypotenuse}`;
    
        }
    } 
    else{
        resultHypotenuse.innerText="Enter base and height values greater than zero";
    }  
    
}


isHypotenuseButton.addEventListener("click",displayIfHypotenuse);