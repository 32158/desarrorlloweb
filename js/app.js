let formulario= document.getElementById('Register');
let message__box= document.getElementById('message');
let input__label= document.querySelectorAll(".input__label");

formulario.addEventListener("input",(e)=>{
    if(e.path[0]==nombre){

        let evalue=e.target.value.length >0? true:false;
        evalue==true?input__label[0].classList.add("static__"):input__label[0].classList.remove("static__")

    }else if(e.path[0]==correo) {
        let evalue=e.target.value.length >0? true:false;
        evalue==true?input__label[1].classList.add("static__"):input__label[1].classList.remove("static__")
        
    } else {
        console.log(e.path[0].value)
        
    }
    
})

let input= document.querySelectorAll("input");

input.forEach((e)=>{
    e.onfocus=()=>{
    
        e==correo?e.nextElementSibling.classList.add("label__active"):false
        e==nombre?e.nextElementSibling.classList.add("label__active"):false
    }
    e.onblur=()=>{
        
        e==nombre?e.nextElementSibling.classList.remove("label__active"):false
        e==correo?e.nextElementSibling.classList.remove("label__active"):false
    }

})



formulario.addEventListener('submit',e =>{
    e.preventDefault()
    let data= new FormData(formulario)
    message__box.innerHTML=`
        <span><strong>Nombre:</strong> ${data.get('name').charAt(0).toUpperCase()+data.get('name').slice(1)}</span>
        <span><strong>Correo:</strong> ${data.get("email")}</span>`
        formulario.reset() 
})

let conten=document.getElementById('prev__')
let mostrar=document.getElementById('img__1');
document.addEventListener('click',e=>{
    let confirm= e.target.localName=="img"? true : false
    if(confirm){
        conten.src=`${e.target.currentSrc}`
        mostrar.classList.add('target__most')
        // console.log(e.target)
    }
    if(e.target.matches('svg')||e.target.matches('path')||e.target.matches('article')){
        mostrar.classList.remove('target__most')

    }

})