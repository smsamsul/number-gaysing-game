let box_1 = document.querySelector(".box_1")
let bt_1 = document.querySelector(".bt_1")
let box_2 = document.querySelector(".box_2")
let bt_2 = document.querySelector(".bt_2")
let box_3 = document.querySelector(".box_3")
let bt_3 = document.querySelector(".bt_3")
let box_4 = document.querySelector(".box_4")
let bt_4 = document.querySelector(".bt_4")

let erro = document.querySelector(".erro")
let start = document.querySelector(".start")

let tittle = document.querySelector(".tittle")
let chance = document.querySelector(".chance")
let ges_5 = document.querySelector(".ges_5")

let book = document.querySelector(".book")
let namta = document.querySelector(".namta")




let count = 5
let count2 = 5
let count3 = 5
let count4 = 5

let type = document.querySelector(".type")
let del = document.querySelector(".del")

let mycondition = false

let text = type.innerHTML.split=""

let star_Text = type.innerHTML

let counta = -1
type.innerHTML=""


function typejs(){

    if(counta < text.length){

        counta++;
        type.innerHTML += star_Text.charAt(counta)
        text = star_Text.split("")
    }
}

function typejs2(){

    if(mycondition){
        text.pop()
         type.innerHTML = text.join("")

         if(text.length == 0){
            erro.classList.add("d-none")
            del.classList.add("d-none")
                
            }

    }
        

}

del.addEventListener("click",function(){

    mycondition = true


})




bt_1.addEventListener("click",function(){

 if(box_1.value==""){
    erro.classList.remove("d-none")
    del.classList.remove("d-none")
    
    setInterval(function(){
        typejs()
    },200)

    del.addEventListener("click",function(){
    
        setInterval (function(){
            typejs2()
        },200)
       
    })
    
 }
 

 else{
    if(!(box_1.value-1==0 ? true: box_1.value-1)){

        erro.classList.remove("d-none")
        erro.innerHTML= "please give courrect number"
    }
    else{

        if(box_1.value <=50){
            for(i=1;i<=box_1.value;i++)
        {
            namta.innerHTML=`<ul class="one${i}">${i} namta star</ul>`
          
            for(j=1;j<=10;j++){
            namta.querySelector(`.one${i}`).innerHTML+=`<li>${i} x ${j} = ${i*j} </li>`

            start.classList.remove("d-none")
            erro.classList.add("d-none")
            namta.classList.remove("d-none")
            
            }
           
        }
        
        }
    }
}

})




start.addEventListener("click",function(){
    erro.classList.add("d-none")
    box_2.classList.remove("d-none")
    bt_1.classList.add("d-none")
    box_1.classList.add("d-none")
    start.classList.add("d-none")
    bt_2.classList.remove("d-none")
    tittle.innerHTML ="player2"
    chance.classList.remove("d-none")
    ges_5.innerHTML = count

    if(box_1.value <=10){
        
        for(i=1;i<=box_1.value;i++)
    {
        namta.innerHTML=`<ul class="one${i}">${i} namta star</ul>`
        erro.classList.remove("d-none")
        for(j=1;j<=10;j++){
        namta.querySelector(`.one${i}`).innerHTML+=`<li>${i} x ${j} = ${i*j} </li>`
        erro.classList.add("d-none")
        
        }
       
    }
    
    }
    
})


bt_2.addEventListener("click", function(){
    if(box_2.value == ""){
      book.classList.remove("d-none")
      book.innerHTML = "please give number"

    }
    else{
        if(!(box_1.value-1==0 ? true:box_2.value-1)){
         
            book.classList.remove("d-none")
            book.innerHTML = "please give courrect number"

        }
        
        else{

        
            if(count > 0){
                ges_5.innerHTML = count--;
        
        
                if(box_1.value*9==box_2.value){
        
                    box_2.classList.add("d-none")
                    bt_2.classList.add("d-none")
                    bt_3.classList.remove("d-none")
                    box_3.classList.remove("d-none")
                    tittle.innerHTML ="player3"
                    erro.classList.remove("d-none")
                    erro.classList.add("d-none")
                    book.classList.add("d-none")
                    
                }
            }
            else{
        
                box_2.classList.add("d-none")
                bt_2.classList.add("d-none")
                bt_3.classList.remove("d-none")
                box_3.classList.remove("d-none")
                tittle.innerHTML ="player3"
                erro.classList.remove("d-none")
                erro.classList.add("d-none")
                book.classList.add("d-none")
                ges_5.innerHTML = count2
        
            }
            
        }
    }

});

bt_3.addEventListener("click",function(){

    if(box_3.value==""){

        book.classList.remove("d-none")
        book.innerHTML="please give number"

    }
    else{
        if(!(box_3.value-1==0 ? true: box_3.value-1)){

            book.classList.remove("d-none")
            book.innerHTML="please give courrect number"
    

        }
        else{
            if(count3 > 0){

                ges_5.innerHTML= count3--;


                if(box_1.value*9==box_3.value){
                    box_3.classList.add("d-none")
                    bt_3.classList.add("d-none")
                    box_4.classList.remove("d-none")
                    bt_4.classList.remove("d-none")
                    tittle.innerHTML="player4"
                    erro.classList.remove("d-none")
                    erro.classList.add("d-none")
                    book.classList.add("d-none")
                }
            }
            else{

                box_3.classList.add("d-none")
                bt_3.classList.add("d-none")
                box_4.classList.remove("d-none")
                bt_4.classList.remove("d-none")
                tittle.innerHTML="player4"
                erro.classList.remove("d-none")
                erro.classList.add("d-none")
                book.classList.add("d-none")
                ges_5.innerHTML= count4
                
            }
        }
    }


})

bt_4.addEventListener("click",function(){

    if(box_4.value==""){
        
        book.classList.remove("d-none")
        book.innerHTML="please give number"
    }

    else{

        if(!(box_4.value-1==0 ? true: box_4.value-1)){

            book.classList.remove("d-none")
            book.innerHTML="please give courrect number"

        }
        else{

        if(count4 > 0){

            ges_5.innerHTML= count4--;

            if(box_1.value*9==box_2.value & box_1.value*9==box_3.value & box_1.value*9==box_4.value){

                book.classList.remove("d-none")
                book.innerHTML="2/3/4 they are both winner and 1 looser "
            }
            else if(box_1.value*9==box_2.value & !(box_1.value*9==box_3.value & box_1.value*9==box_4.value)){
            
                book.classList.remove("d-none")

                book.innerHTML="2 winer and 3/4 is losser"
            

            }

    
        }
        
        }

    }
})



