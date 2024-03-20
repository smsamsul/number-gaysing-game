
let box1 = document.querySelector(".box1");
let button1 = document.querySelector(".button1");

let box2 = document.querySelector(".box2");
let button2 = document.querySelector(".button2");

let box3 = document.querySelector(".box3");
let button3 = document.querySelector(".button3");

let error  = document.querySelector(".error");
let tittle  = document.querySelector(".tittle");
let tittle2  = document.querySelector(".tittle2");
let span  = document.querySelector("span");

let count = 5
let count2 = 5

// box1.style.marginTop =("100px")
// box2.style.marginTop =("100px")

// tittle.style.marginTop =("40px")
// tittle.style.position =("absolute")

button1.addEventListener("click", function(){
    if(box1.value == ""){
      error.classList.remove("d-none")
      error.innerHTML = "please give number"

    }
    else{
        if(!(box1.value-1==0 ? true:box1.value-1)){
         
            error.classList.remove("d-none")
            error.innerHTML = "please give courrect number"

        }
        else{
            if(box1.value > 10 || box1.value < 1){
                
            error.classList.remove("d-none")
            error.innerHTML = "must to be number 1 to 10"
            }

            else{
                error.classList.add("d-none")
                button2.classList.remove("d-none")
                box2.classList.remove("d-none")
                box1.classList.add("d-none")
                button1.classList.add("d-none")
                tittle.innerHTML ="palyer2"
                tittle2.classList.remove("d-none")
                span.innerHTML = count
           
            }
        }
    }

});

button2.addEventListener("click", function(){
    if(box2.value == ""){
      error.classList.remove("d-none")
      error.innerHTML = "please give number"

    }
    else{
        if(!(box2.value-1==0 ? true:box2.value-1)){
         
            error.classList.remove("d-none")
            error.innerHTML = "please give courrect number"

        }
        else{
            if(box2.value > 10 || box2.value < 1){
                
            error.classList.remove("d-none")
            error.innerHTML = "must to be number 1 to 10"
            
            }
            
            if(count > 0){
                count--;
                span.innerHTML = count
                if(box1.value == box2.value){

                    error.classList.add("d-none")
                    button3.classList.remove("d-none")
                    box3.classList.remove("d-none")
                    box2.classList.add("d-none")
                    button2.classList.add("d-none")
                    tittle.innerHTML ="palyer3"
                    tittle2.classList.remove("d-none")
                    span.innerHTML = count2
                }
            
                
            }
            else{
                error.classList.add("d-none")
                button3.classList.remove("d-none")
                box3.classList.remove("d-none")
                box2.classList.add("d-none")
                button2.classList.add("d-none")
                tittle.innerHTML ="palyer3"
                tittle2.classList.remove("d-none")
                span.innerHTML = count2
                
            }

        }
    }

});
button3.addEventListener("click", function(){
    
    if(box3.value==""){
        error.classList.remove("d-none")
        error.innerHTML = "please give number"
    }

})