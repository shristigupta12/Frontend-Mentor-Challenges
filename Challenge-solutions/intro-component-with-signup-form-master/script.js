function onClickInput(){
    document.querySelectorAll("input").style.border = "2px groove hsl(246, 25%, 77%); "
}
const firstName = document.getElementById("first-name-box")
const lastName = document.getElementById("last-name-box")
const email = document.getElementById("email-address-box")
const password = document.getElementById("password-box")
const form = document.getElementsByClassName("form-wrapper")

form.addEventListener('claimTrailBtn', (e)=>{
    let errorMessages = [];
    if(firstName === '' || firstName === null){
        errorMessages.push('First Name cannot be empty')
    }
    if(errorMessages.length>0){
        firstNameError.innerText = errorMessages.join(', ')
        e.preventDefault()
    }
} )
