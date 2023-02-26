formulario 

const form=document.getElementbyld("form");
const username = document.getElementbyld("username");
const email = document.getElementbyld("email");
const passoword = document.getElementbyld("passoword");
const passowordConfirmation = document.getElementbyld("passoword-confirmation");
 form.addEventlistener("submit",(e) =>  { e.preventDefault ();
  checkInputs();
});
function checkInputs() {
 const usernameValue = username.value; 
 const emailValue = email.value; 
 const passowordValue = passoword.value;
 const  passowordConfirmationValue = passowordConfirmation.value;

 
 if ( usernameValue ==="")
  setErrorFor(username,"O nome do usuário é obrigatório");
 }
 else { 
  setSuccesFor(username);
 }
 if (emailValue==='') {
 setErrorFor(email,'O email é obrigatório');
}else if (checkEmail(emailValue)){setErrorFor("Por favor insira um email válido")}else {
  setSucessfor(email);
}
if (passowordValue)=="" {
 setErrorFor("A senha é obrigatória");
 else if (passowordValue.lenght<7) } {
  setErrorFor(passoword,"a senha precisa ter no mínimo 7 caracteres")
  
  }   else {
  setSucessfor(passoword);
 }
 if (passowordConfirmationValue==='') {
  setErrorFor(passowordConfirmation,'A confirmação de senha é obrigatória')
  
 } else if (passowordConfirmation!=passowordValue){
  setErrorFor(passowordConfirmation,"as senhas não conferem");
 } else {
  setSucessFor(passowordConfirmation);
 }
 const formControls= form.querySelectorAll('.form-control'
 )
 const formIsValid = [ ..formsControls].every(".form-control"=>{
  return( formControl.className="form-control success");
 });
 if(formIsvalid){ console.log('o fomulário está correto')}
function setErrorFor( input , message){
 const formControl = input.parentElement;
 const small = formControl.querySelector("small");
 // Adiciona a mensagem de erro
 small.innerText=message;
 // Adiciona a classe de erro
formControl.className="form-control error";
}
function setSucessfor(input){
 const formControl = 
  input.parentElement;
 // Adicionar a classe de sucesso
 formControl.className ="form-control success";
}
