

let select1=document.querySelector("#select1")
let select2=document.querySelector(".btn")
let sel2=document.querySelector("#select2")
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


sel2.addEventListener('click',()=>{
  div2.style.display="none"
   div.style.display="inline"
   pages.style.display="none"
   
})




button2.addEventListener('click',()=>{
  user1=use.value
  paskey1=word.value
  localStorage.setItem("username1",JSON.stringify(user1))
  localStorage.setItem("password1",JSON.stringify(paskey1))
})


button1.addEventListener('click',()=>{
    user=username.value
    paskey=password.value
  
       localStorage.setItem("password",JSON.stringify(paskey))
    localStorage.setItem("username",JSON.stringify(user))

 let getname=JSON.parse(localStorage.getItem("username"))
 let getpass=JSON.parse(localStorage.getItem("password"))
    
let getuser=JSON.parse(localStorage.getItem("username1"))
let getpassword=JSON.parse(localStorage.getItem("password1"))


if(username.value===use.value && password.value===word.value){
  alert("you are login in")
    pages.style.display="inline"
      div.style.display="none"
       div2.style.display="none"

}
else{
    alert("you are not  login in")
   pages.style.display="none"
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


 let invest=document.querySelector(".invest")




Save.addEventListener('click',()=>{
last.style.display="none"
update(invest.value,amount.value)
amount.value=""
invest.value=""
count++
})



let balance=0
let expense=0
let newincome=0
let count=0
 let update=(type,amount,count)=>{
 let value=Number(amount)
let h1=document.querySelector(".head-one")
let h2=document.querySelector(".head-two")
let h3=document.querySelector(".head-three")
 let headfour=document.querySelector(".head-four")
if(type==="income"){
  newincome+=value
  balance+=value
  
  h1.textContent=balance
  h3.textContent=value
}

else if(type==="expense"){

balance-=value

  h2.textContent=value
   h1.textContent=balance
}
count=count+1
headfour.textContent=count
}









 








 


