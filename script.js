
let select1=document.querySelector("#select1")
let select2=document.querySelector(".btn")
let pages=document.querySelector(".page")
let div=document.querySelector(".parent")
let div2=document.querySelector(".parent1")

let button1=document.querySelector(".btn")
let username=document.querySelector("#username")
let password=document.querySelector("#pass")


let button2=document.querySelector("#reg")
let use=document.querySelector("#user")
let word=document.querySelector("#word")

let blue=document.querySelector("#blue")

let section=document.querySelector(".section1")

let adding=document.querySelector(".add")
let appear=document.querySelector(".appear")

let last=document.querySelector(".last")
let Save=document.querySelector(".Save")

let heading=document.querySelector(".heading")
let income=document.querySelector(".income")
let amount=document.querySelector(".amounting")


// login in and register part
select1.addEventListener('click',()=>{
  div2.style.display="inline"
   div.style.display="none"
   
})

button2.addEventListener('click',()=>{
  user1=use.value
  paskey1=word.value
  localStorage.setItem("username1",user1)
  localStorage.setItem("password1",paskey1)   
})


button1.addEventListener('click',()=>{
    user=username.value
    paskey=password.value
       localStorage.setItem("password",paskey)
    localStorage.setItem("username",user)

 let getname=localStorage.getItem("username")
 let getpass=localStorage.getItem("password")
    
let getuser=localStorage.getItem("username1")
let getpassword=localStorage.getItem("password1") 

if(getname===getuser && getpassword===getpass){
alert("you are login in")}


else{
  alert("Again typed")
}


})

// open fintrack

select2.addEventListener('click',()=>{
     console.log("hello");
   pages.style.display="inline"
   div.style.display="none"
    div2.style.display="none"


   
   
})








adding.addEventListener('click',()=>{
last.style.display="inline"
})

Save.addEventListener('click',()=>{
last.style.display="none"






let h3=document.querySelector(".head1")
 if( income.value===Expenses){
   newm=amount.value

h3.textContent="$"+newm
h3.append(newm)

 }
})

















 








 


