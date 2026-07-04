

let select1=document.querySelector("#select1")
let select2=document.querySelector("#select2")
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


select2.addEventListener('click',()=>{
  div2.style.display="none"
   div.style.display="inline"
   pages.style.display="none"
  

   
})




button2.addEventListener('click',()=>{
  
  user1=use.value
  paskey1=word.value
  localStorage.setItem("username1",JSON.stringify(user1))
  localStorage.setItem("password1",JSON.stringify(paskey1))
   div2.style.display="none"
   div.style.display="block"
   pages.style.display="none"
})


button1.addEventListener('click',()=>{
    user=username.value
    paskey=password.value

  
let getdata=document.querySelector(".anchor")
getdata.textContent=username.value
       localStorage.setItem("password",JSON.stringify(paskey))
    localStorage.setItem("username",JSON.stringify(user))

 let getname=JSON.parse(localStorage.getItem("username"))
 let getpass=JSON.parse(localStorage.getItem("password"))
    
let getuser=JSON.parse(localStorage.getItem("username1"))
let getpassword=JSON.parse(localStorage.getItem("password1"))


if(user===getuser && paskey===getpassword){
  alert("you are login in")
    pages.style.display="block"
      div.style.display="none"
       div2.style.display="none"

}
else{
    alert("you are not  login in")
   pages.style.display="none"
}

})





let logout=document.querySelector(".logout")
logout.addEventListener('click',()=>{
   pages.style.display="none"
   alert("you are logout")
   div.style.display="inline"
   
})




// open fintrack

select2.addEventListener('click',()=>{
   div.style.display="none"
    div2.style.display="none"


   
   
})






 



adding.addEventListener('click',()=>{
last.style.display="inline"
})



let setting=document.querySelector(".setting")
let track=document.querySelector(".track")
let showsetting=document.querySelector(".showsetting")
setting.addEventListener('click',()=>{
showsetting.style.display="block"
section.style.display="none"

})


let savechanges=document.querySelector(".savechanges")

savechanges.addEventListener('click',()=>{
  showsetting.style.display="none"
  section.style.display="block"

})


let fullname=document.querySelector(".fullname")
let anchor=document.querySelector(".anchor")
fullname.value=username.value









let  dark=document.querySelector(".dark")

let  cards=document.querySelector(".cards")

let  light=document.querySelector(".light")
dark.addEventListener('click',()=>{
 pages.classList.toggle("light")
  section.classList.toggle("light")
cards.style.backgroundColor="white"
cards.style.Color="black"

 
})


const ctx=document.querySelector("#mychart")
new Chart(ctx,{
  type:"bar",
  data:{
    labels:[
      "newincome","expenses"

    ],
      datasets: [{
            label: "values",
            data: [5000,7000],
            backgroundColor:[
      "green","red"
            ]
        }]




  },
  options:{
    responsive:true,
    scales:{
      y:{
        beginAtZero:true
      }
    }
  }
});








let show=document.querySelector(".show")
show.addEventListener('click',()=>{
let mytodo=document.querySelector(".mytodo")
let inputval=document.querySelector(".lastinp")
if(inputval.value==="expense"|| inputval.value==="income")
{
  mytodo.innerHTML+=`
<div class="mylist">
<h1>your balance is:${balance}</h1>
<button class="delete">Delete</button>
</div>

`
}








let del=document.querySelector(".delete")
let todo=document.querySelector(".todo")
del.addEventListener('click',()=>{
del.closest(".mylist").remove()
})
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
 let update=(type,amount)=>{
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








 








 


