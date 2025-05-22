const mach = document.querySelectorAll("button");
const input = document.getElementById("result");

const modeSelector = document.getElementById("mode");
const calculator = document.querySelector(".mach");
const body = document.body;

modeSelector.addEventListener("change", () => {
    const selectedOption = modeSelector.value;

    if (selectedOption === "Doremon") {
        body.style.backgroundImage = "url('/calculator/images/doremon.jpg')";
        body.style.backgroundSize = "cover";
        calculator.style.backgroundColor = "deepskyblue"; 
    } else if (selectedOption === "Ben10") {
        body.style.backgroundImage = "url('/calculator/images/ben10.jpg')"; 
        body.style.backgroundSize = "cover";
        calculator.style.backgroundColor = "darkolivegreen"; 
    }
    else{
        calculator.style.backgroundColor = " rgb(209, 209, 209)"; 
        body.style.backgroundColor = "white";
        body.style.backgroundImage ="" 
    }
});


for (let i =0;i<mach.length;i++){
    mach[i].addEventListener("click",()=>{
        const val =mach[i].textContent;
        if(val==="C"){
            cleardata();
        }
        else if(val==="="){
            answer();
        }
        else{
            append(val);
        }
    })
}

function cleardata(){
    input.value =""
}
function answer(){
    input.value = eval(input.value)
}
function append(val){
    input.value += val;
}
