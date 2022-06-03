const email = document.getElementById("email");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let entrar = false
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""

   if(!regexEmail.test(email.value)){
       warnings += `Ingrese un email válido <br> example@example.com`
       entrar = true
   }

    if(entrar){
        parrafo.innerHTML = warnings
   }else{
        parrafo.innerHTML = "Enviado"
    }
})
