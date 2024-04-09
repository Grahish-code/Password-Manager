const passwordcontainer=document.querySelector('.password-container');
const btn=document.querySelector('.btn');
let password=document.querySelectorAll('.input-boxes');



function showPassword(){
    passwordcontainer.innerHTML=localStorage.getItem('password')
}


function updateStorage(){
    localStorage.setItem('password',passwordcontainer.innerHTML);
    console.log(localStorage.password);
    
}

showPassword();

btn.addEventListener('click',()=>{
    let inputbox=document.createElement('p');
    let img=document.createElement('img');
    inputbox.className='input-boxes';
    inputbox.setAttribute("contenteditable","true");
    img.src='delete.svg';
    passwordcontainer.appendChild(inputbox).appendChild(img);

})

passwordcontainer.addEventListener('click',function(e){
if(e.target.tagName === 'IMG'){
    e.target.parentElement.remove();

    updateStorage();

}
else if(e.target.tagName==='P'){
    password=document.querySelectorAll(".input-boxes");
    password.forEach(pw=>{
        pw.onkeyup=function(){

            updateStorage();
        }
    })
}

})

document.addEventListener("keydown",event=>{
    if(event.key==='Enter'){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

function checkPassword(){
const EnteredPassword=document.getElementById('key-password').value;
const correctPassword='1234';
if(EnteredPassword===correctPassword){
    console.log('correct password');
    document.getElementsByClassName('password-container')[0].style.display = 'block';

}
else{
    alert('Incorrect password, please try again');
}
}
