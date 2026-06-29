
let select1=document.querySelector("#select1")
let div=document.querySelector(".parent")
let div2=document.querySelector(".parent1")




select1.addEventListener('click',()=>{
    div.style.display="none"
    div2.innerHTML=`
   
      <div class="card">
        <div class="card1">
          <h1>Create Account</h1>
          <p>Join FinTrack Pro</p>
        </div>

        <div class="card2">
          <label for="User"
            >Choose a Username<br />
            <input type="name" id="user" /></label
          ><br />
          <label for="word"
            >Password<br />
            <input type="password" id="word"
          /></label>
          <button class="btn1" id="reg">Register</button>
          <div class="column">
            <p class="para1">Already have an account?</p>
            <a href="index.html" class="para2" id="select2">Login here</a>
          </div>
        </div>
      </div>
    
      
      `

let button2=document.querySelector("#reg")
let use=document.querySelector("#user")
let word=document.querySelector("#word")


button2.addEventListener('click',()=>{
  
    user1=use.value
    paskey1=word.value
       localStorage.setItem("username1",user1)
    localStorage.setItem("password1",paskey1)   
})

})




   





















let button1=document.querySelector(".btn")
let username=document.querySelector("#username")
let password=document.querySelector("#pass")

button1.addEventListener('click',()=>{
    
    user=username.value
    paskey=password.value
       localStorage.setItem("password",paskey)
    localStorage.setItem("username",user)



    let getname=localStorage.getItem("username")
        let getpass=localStorage.getItem("password")
        console.log(getname)

 
 
        let getuser=localStorage.getItem("username1")
        let getpassword=localStorage.getItem("password1")

if(getname===getuser && getpassword===getpass){
alert("you are login in")

 let blue=document.querySelector("#blue")
        let pages=document.querySelector(".page")
    blue.addEventListener('click',()=>{
        div.style.display="none"
         div2.style.display="none"
      pages.innerHTML=`<div>
      <div class="fintrack">
        <div class="track">
<h1>FinTrack Pro</h1>
<p>Enterprise Finance</p></div>
<div class="dash">
<button>Dashboard</button>
<p>Setting</p></div>
<button class="add">Add Transaction</button>
</div>

  
  <div class="nav">
    <a>${user}</a>
    <button class="logout">Logout</button></div>

</div>

<div class="section1">
  <div class="heading">
<h1>Financial Overview</h1>
<p>Real Time tracking application</p>
</div>

<div class="cards">
<div class="cardper"><i></i><p>Current Balance</p><h3>$0.00</h3></div>
<div class="cardper"><i></i><p>Total income</p><h3 class="heading3">$0.00</h3></div>
<div class="cardper"><i></i><p>Total Expenses</p><h3 class="heading2">$0.00</h3></div>
<div class="cardper"><i></i><p>Total Transactions</p><h3>0</h3></div>
</div>

<div class="chart">
<div class="image">
  <img src="https://www.indiabix.com/_files/images/data-interpretation/bar-charts/15-1-10-1.png"
>
</div>

<div class="prefer">


<div class="card1" id="padding"><h3>Preference</h3>

<div class="dark">
<button class="dark">Dark</button>
</div>

<div>
  <button class="reset">Reset All Data</button>
</div>
</div>
</div>
</div>











<div class="alltransaction">
<div class="side">
<h1>All Transactions</h1>
<div class="category">
<input type="search" placeholder="Search transactions...">

<div class="input">
  <input type="name" placeholder="All types" class="remove">
<select>
  <option value="">All Types</option>
<option>Income Only</option>
<option>Expense Only</option>
</select>

</div>

</div>

<div class="footer">
  <p>DATE</p>
   <p>Description</p>
    <p>CATEGORY</p>
     <p>AMOUNT</p>
      <p>ACTIONS</p>
</div>









</div>


</div>
</div>



`

  let add=document.querySelector(".add")  
    let adding=document.querySelector(".adding")  
adding.innerHTML=""
  add.addEventListener('click',()=>{
if(adding.classList.toggle("adding")){

  pages.style.display="none"}


  else{

  pages.style.display="inline"

  }


    adding.innerHTML=`
    













    <diiv class="adding">
    <h1>Add Transcation</h1>
    
    <label for="expense"
            >Expenses<br /><label>
            <input type="name" id="expense"/><button class="expense">Expenses</button><br>


                <label for="income"
            >Income<label><br>
          <input type="name" id="income"/><button class="income>Income</button>
                
          
          
          
          
          
          
          
          
          
          <br />

    
        <label for="description"
            >Description<br />
            <input type="name" id="description" placeholder="Amazon,Salary,Coffee" /></label
          ><br />
    
    <div class="amount">


<label for="amount"
            >Type<br />
            <input type="name" id="amount" placeholder="Amount"/></label
          ><br />
    
        <label for="date"
            >Date<br />
            <input type="date" id="date" /></label
          ><br />
    </div>
    
    
    
<label for="cate"
            >Type<br />
            <input type="name" id="cate" placeholder="Select a category"/>
            <select >
              <option>Food</option>
                 <option>Salary</option>
                    <option>shopping</option>
                       <option>Entertainment</option>
            </select>
  
            
            </label
          ><br />
    
    <button class="save">Save Transaction</button>
    
    
    </div>












  
    
    
    
    
    `
    
    
    
    
    
  
  let save=document.querySelector(".save")  
  save.addEventListener('click',()=>{
    adding.style.display="none"
        pages.style.display="inline"










        let expenses=document.querySelector("#expense")
let expenses2=document.querySelector(".expense")
let heading2=document.querySelector(".heading2")

expenses2.addEventListener('click',()=>{
     val= expenses.value
   heading2.append(val)

   
})




let income=document.querySelector("#income")
let income2=document.querySelector(".income")
let heading3=document.querySelector(".heading3")
income2.addEventListener('click',()=>{
  let val2=income.value
     heading3.append(val2)
   
})
  }) 






  })

let dark=document.querySelector(".dark")
let body=document.querySelector("body")
dark.addEventListener('click',()=>{
    body.classList.toggle("body")
      
    
})









    })








}
else{
    alert("Again Typed")
}



    
})






















































