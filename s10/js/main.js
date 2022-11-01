$(document).ready(function(){


    let hidenavbarwidth = $(".navhide").innerWidth();

    $('.navbtn').click(function () {
    
        if ($('.navhide').css("left") < "0px") {
    
            $('.navhide').animate({ left: 0 }, 500)
            $(".navside").animate({ left: "260px" }, 500)
            $(".navbtn").text('X')
            $(".navlinks").show(1000)
        }
        else {
            $('.navhide').animate({ left: (-hidenavbarwidth) }, 500)
            $(".navside").animate({ left: "0px" }, 500)
            $(".navbtn").text('☰')
    
        }
    })
    

    

        arr = [""]
           
         
        async function search(){
        
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
                let result =await res.json()
             arr = result.meals
        var dis = ""
        
        
        for (let i = 0; i < arr.length; i++) {
            
                dis+= ` <div class="col-sm-3 ">
                <div class="item plus" >
                <img src="${arr[i].strMealThumb}" alt="">
                <div class="layer">
                <h4 class="searchtext">${arr[i].strMeal}</h4>
                 </div>
                </div>
                </div>` 
           
        }
        
        document.querySelector('.catego').innerHTML= `<div class="d-flex justify-content-between ">
       
         </div> ` +dis
         $('.navhide').animate({ left: (-hidenavbarwidth) }, 500)
         $(".navside").animate({ left: "0px" }, 500)
         $(".navbtn").text('☰')

         $('.item').click(function(){
            
$('.item').fadeOut(500)

async function details (){

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    let result =await res.json()
 arr = result.meals
var dis = ""

for (let i = 0; i < arr.length; i++) {
    
    dis+=`     <div class="col-md-4 details g-5 ">
    <div class="detailsimg">
    <img src="${arr[i].strMealThumb}" alt="">
    <h2>${arr[i].strMeal}</h2>
    </div>
               </div>
               <div class="col-md-8 details  g-3">
    
      <h4>Instructions</h4>
       <p>${arr[i].strInstructions} </p>
       <p class="fs-5 fw-bold "> Area : ${arr[i].strArea}</p>
       <p class="fs- 5 fw-bold ">Category  : ${arr[i].strCategory}</b>
       <p class="fs-2 fw- mt-5">Recipes :</p>
       <div class="detailsrecips">
    <p>${arr[i].strIngredient1}</p>
    <p>${arr[i].strIngredient2}</p>
    <p>${arr[i].strIngredient3}</p>
    <p>${arr[i].strIngredient4}</p>
    <p>${arr[i].strIngredient5}</p>
    <p>${arr[i].strIngredient6}</p>
    <p>${arr[i].strIngredient7}</p>
    <p>${arr[i].strIngredient8}</p>
    <p>${arr[i].strIngredient9}</p>
    <p>${arr[i].strIngredient10}</p>
    <p>${arr[i].strIngredient11}</p>
    <p>${arr[i].strIngredient12}</p>
    <p>${arr[i].strIngredient13}</p>
    <p>${arr[i].strIngredient14}</p>
    <p>${arr[i].strIngredient15}</p>
    </div>
    
    <b >Tags :</b> <br> <br>
    <button class="btn btn-danger"><a href="${arr[i].strYoutube}"></a>You Tube</button>
               </div>`
    
}

document.querySelector(".catego").innerHTML=dis

}
details()

        })
        }
        
       search()
   
        
        
        
    
    arr = ['']
    $(".categ").click(function(){
    
    
    async function category() {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        let result =await res.json()
     
    arr = result.categories;
    
    let dis = ""
    for (let i = 0; i < arr.length; i++) {
    dis +=  `<div class="col-md-4 ">
    <div class="item" >
    <img src="${arr[i].strCategoryThumb}" alt="">
    <div class="layer">
    <h4>${arr[i].strCategory}</h4>
    <p>${arr[i].strCategoryDescription}</p>
     </div>
    </div>
    </div>`    
       }
       document.querySelector('.catego').innerHTML= dis
       $('.navhide').animate({ left: (-hidenavbarwidth) }, 500)
       $(".navside").animate({ left: "0px" }, 500)
       $(".navbtn").text('☰')
  
    

       $(".item").click(function(){


        $(".item").fadeOut(50)
        
        async function carea() {
        
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=egyptian`)
            let result =await res.json()
         arr = result.meals    
        
         let diss = ""
        for (let i = 0; i < arr.length; i++) {
            
         diss+= ` <div class="col-sm-3 ">
         <div class="item plus" >
         <img src="${arr[i].strMealThumb}" alt="">
         <div class="layer">
         <h4 class="searchtext">${arr[i].strMeal}</h4>
          </div>
         </div>
         </div>` 
        }
        
         document.querySelector(".catego").innerHTML= diss
         
         $('.item').click(function(){
                    
            $('.item').fadeOut(500)
            
            async function details (){
            
                let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
                let result =await res.json()
             arr = result.meals
            var dis = ""
            
            for (let i = 0; i < arr.length; i++) {
                
                dis+=`     <div class="col-md-4 details g-5 ">
                <div class="detailsimg">
                <img src="${arr[i].strMealThumb}" alt="">
                <h2>${arr[i].strMeal}</h2>
                </div>
                           </div>
                           <div class="col-md-8 details  g-3">
                
                  <h4>Instructions</h4>
                   <p>${arr[i].strInstructions} </p>
                   <p class="fs-5 fw-bold "> Area : ${arr[i].strArea}</p>
                   <p class="fs- 5 fw-bold ">Category  : ${arr[i].strCategory}</b>
                   <p class="fs-2 fw- mt-5">Recipes :</p>
                   <div class="detailsrecips">
                <p>${arr[i].strIngredient1}</p>
                <p>${arr[i].strIngredient2}</p>
                <p>${arr[i].strIngredient3}</p>
                <p>${arr[i].strIngredient4}</p>
                <p>${arr[i].strIngredient5}</p>
                <p>${arr[i].strIngredient6}</p>
                <p>${arr[i].strIngredient7}</p>
                <p>${arr[i].strIngredient8}</p>
                <p>${arr[i].strIngredient9}</p>
                <p>${arr[i].strIngredient10}</p>
                <p>${arr[i].strIngredient11}</p>
                <p>${arr[i].strIngredient12}</p>
                <p>${arr[i].strIngredient13}</p>
                <p>${arr[i].strIngredient14}</p>
                <p>${arr[i].strIngredient15}</p>
                </div>
                
                <b >Tags :</b> <br> <br>
                <button class="btn btn-danger"><a href="${arr[i].strYoutube}"></a>You Tube</button>
                           </div>`
                
            }
            
            document.querySelector(".catego").innerHTML=dis
            
            }
            details()
            
                    })
                    
        
        
        }
        
        carea()
        
            })



    
    }
    
    category()
    
        })
    
    
      
    //------------------------------------------------------------------------------
   
    
    
//---------------------------------------------------------------------


    $(".area").click(function(){
       
        async function area() {

            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
            let result =await res.json()
         arr = result.meals    
            let dis = ""
    for (let i = 0; i < arr.length; i++) {
        dis+= `
        <div class="col-lg-3 disarea" >
        <i   class="fa-solid fa-city w-100 fs-1 text-danger disarealogo "></i>
    <h2 class="disareatext">${arr[i].strArea}</h2>
    </div>
        `
    }
  
    document.querySelector(".catego").innerHTML = dis
    $('.navhide').animate({ left: (-hidenavbarwidth) }, 500)
    $(".navside").animate({ left: "0px" }, 500)
    $(".navbtn").text('☰')
    $("html, body").animate({
        scrollTop: 0
    }, 200)    


    $(".disarea").click(function(){


$(".disarea").fadeOut(50)

async function carea() {

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=egyptian`)
    let result =await res.json()
 arr = result.meals    

 let diss = ""
for (let i = 0; i < arr.length; i++) {
    
 diss+= ` <div class="col-sm-3 ">
 <div class="item plus" >
 <img src="${arr[i].strMealThumb}" alt="">
 <div class="layer">
 <h4 class="searchtext">${arr[i].strMeal}</h4>
  </div>
 </div>
 </div>` 
}

 document.querySelector(".catego").innerHTML= diss
 
 $('.item').click(function(){
            
    $('.item').fadeOut(500)
    
    async function details (){
    
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        let result =await res.json()
     arr = result.meals
    var dis = ""
    
    for (let i = 0; i < arr.length; i++) {
        
        dis+=`     <div class="col-md-4 details g-5 ">
        <div class="detailsimg">
        <img src="${arr[i].strMealThumb}" alt="">
        <h2>${arr[i].strMeal}</h2>
        </div>
                   </div>
                   <div class="col-md-8 details  g-3">
        
          <h4>Instructions</h4>
           <p>${arr[i].strInstructions} </p>
           <p class="fs-5 fw-bold "> Area : ${arr[i].strArea}</p>
           <p class="fs- 5 fw-bold ">Category  : ${arr[i].strCategory}</b>
           <p class="fs-2 fw- mt-5">Recipes :</p>
           <div class="detailsrecips">
        <p>${arr[i].strIngredient1}</p>
        <p>${arr[i].strIngredient2}</p>
        <p>${arr[i].strIngredient3}</p>
        <p>${arr[i].strIngredient4}</p>
        <p>${arr[i].strIngredient5}</p>
        <p>${arr[i].strIngredient6}</p>
        <p>${arr[i].strIngredient7}</p>
        <p>${arr[i].strIngredient8}</p>
        <p>${arr[i].strIngredient9}</p>
        <p>${arr[i].strIngredient10}</p>
        <p>${arr[i].strIngredient11}</p>
        <p>${arr[i].strIngredient12}</p>
        <p>${arr[i].strIngredient13}</p>
        <p>${arr[i].strIngredient14}</p>
        <p>${arr[i].strIngredient15}</p>
        </div>
        
        <b >Tags :</b> <br> <br>
        <button class="btn btn-danger"><a href="${arr[i].strYoutube}"></a>You Tube</button>
                   </div>`
        
    }
    
    document.querySelector(".catego").innerHTML=dis
    
    }
    details()
    
            })
            


}

carea()

    })
    
   
 
}
area()

    })
  
 





//--------------------------------------------------------------------------------------



$(".ingredients").click(function(){
    


    async function ingredients() {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        let result =await res.json()
     arr = result.meals

        let dis = ""
for (let i = 0; i < 20; i++) {
    dis+= `
    <div class="col-lg-3 ingredients-section2 ">
    <i class="fa-solid fa-bowl-food ingredients-section-logo"></i>
<h2 class="disareatext">${arr[i].strIngredient}</h2>
<p class="text-light">${arr[i].strDescription}</p>
</div>

    `
}



document.querySelector(".catego").innerHTML = dis
$('.navhide').animate({ left: (-hidenavbarwidth) }, 500)
$(".navside").animate({ left: "0px" }, 500)
$(".navbtn").text('☰')
$("html, body").animate({
    scrollTop: 0
}, 200)       

$(".ingredients-section2").click(function(){



    $(".ingredients-section2").fadeOut(50)
    
    async function ingredientscarea() {
    
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`)
        let result =await res.json()
     arr = result.meals    
    
     let diss = ""
    for (let i = 0; i < arr.length; i++) {
        
     diss+= ` <div class="col-sm-3 ">
     <div class="item plus" >
     <img src="${arr[i].strMealThumb}" alt="">
     <div class="layer">
     <h4 class="searchtext">${arr[i].strMeal}</h4>
      </div>
     </div>
     </div>` 
    }
    
     document.querySelector(".catego").innerHTML= diss
     
     $('.item').click(function(){
            
        $('.item').fadeOut(500)
        
        async function details (){
        
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            let result =await res.json()
         arr = result.meals
        var dis = ""
        
        for (let i = 0; i < arr.length; i++) {
            
            dis+=`     <div class="col-md-4 details g-5 ">
            <div class="detailsimg">
            <img src="${arr[i].strMealThumb}" alt="">
            <h2>${arr[i].strMeal}</h2>
            </div>
                       </div>
                       <div class="col-md-8 details  g-3">
            
              <h4>Instructions</h4>
               <p>${arr[i].strInstructions} </p>
               <p class="fs-5 fw-bold "> Area : ${arr[i].strArea}</p>
               <p class="fs- 5 fw-bold ">Category  : ${arr[i].strCategory}</b>
               <p class="fs-2 fw- mt-5">Recipes :</p>
               <div class="detailsrecips">
            <p>${arr[i].strIngredient1}</p>
            <p>${arr[i].strIngredient2}</p>
            <p>${arr[i].strIngredient3}</p>
            <p>${arr[i].strIngredient4}</p>
            <p>${arr[i].strIngredient5}</p>
            <p>${arr[i].strIngredient6}</p>
            <p>${arr[i].strIngredient7}</p>
            <p>${arr[i].strIngredient8}</p>
            <p>${arr[i].strIngredient9}</p>
            <p>${arr[i].strIngredient10}</p>
            <p>${arr[i].strIngredient11}</p>
            <p>${arr[i].strIngredient12}</p>
            <p>${arr[i].strIngredient13}</p>
            <p>${arr[i].strIngredient14}</p>
            <p>${arr[i].strIngredient15}</p>
            </div>
            
            <b >Tags :</b> <br> <br>
            <button class="btn btn-danger"><a href="${arr[i].strYoutube}"></a>You Tube</button>
                       </div>`
            
        }
        
        document.querySelector(".catego").innerHTML=dis
        
        }
        details()
        
                })
    }
    ingredientscarea()

    
        })





}








ingredients()
})

//--------------------------------------------------------------------------------------------------------

$('.search').click(function(){

    arr = [""]
       
     
    async function search(){
    
    
    
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
            let result =await res.json()
         arr = result.meals
    var dis = ""
    
    
    for (let i = 0; i < arr.length; i++) {
        
    
    
    
            dis+= ` <div class="col-sm-3 search-section ">
            <div class="item plus" >
            <img src="${arr[i].strMealThumb}" alt="">
            <div class="layer">
            <h4 class="searchtext">${arr[i].strMeal}</h4>
             </div>
            </div>
            </div>` 
       
    
    
    
    }
    
    
    
    document.querySelector('.catego').innerHTML= `<div class="d-flex justify-content-between ">
    <input  " type="text" placeholder="Search by Name" class="input form-control mb-5 w-75 m-1"  >
     <input type="text" placeholder="Search by first letter" class="input form-control mb-5 m-1 w-75"> 
     </div> ` +dis
     $('.navhide').animate({ left: (-hidenavbarwidth) }, 500)
     $(".navside").animate({ left: "0px" }, 500)
     $(".navbtn").text('☰')
    
    
     $(".search-section").click(function(){
    
    
    
        $(".search-section").fadeOut(50)
        
        async function ingredientscarea() {
        
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`)
            let result =await res.json()
         arr = result.meals    
        
         let diss = ""
        for (let i = 0; i < arr.length; i++) {
            
         diss+= ` <div class="col-sm-3 ">
         <div class="item plus" >
         <img src="${arr[i].strMealThumb}" alt="">
         <div class="layer">
         <h4 class="searchtext">${arr[i].strMeal}</h4>
          </div>
         </div>
         </div>` 
        }
        
         document.querySelector(".catego").innerHTML= diss
         
         $('.item').click(function(){
                
            $('.item').fadeOut(500)
            
            async function details (){
            
                let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
                let result =await res.json()
             arr = result.meals
            var dis = ""
            
            for (let i = 0; i < arr.length; i++) {
                
                dis+=`     <div class="col-md-4 details g-5 ">
                <div class="detailsimg">
                <img src="${arr[i].strMealThumb}" alt="">
                <h2>${arr[i].strMeal}</h2>
                </div>
                           </div>
                           <div class="col-md-8 details  g-3">
                
                  <h4>Instructions</h4>
                   <p>${arr[i].strInstructions} </p>
                   <p class="fs-5 fw-bold "> Area : ${arr[i].strArea}</p>
                   <p class="fs- 5 fw-bold ">Category  : ${arr[i].strCategory}</b>
                   <p class="fs-2 fw- mt-5">Recipes :</p>
                   <div class="detailsrecips">
                <p>${arr[i].strIngredient1}</p>
                <p>${arr[i].strIngredient2}</p>
                <p>${arr[i].strIngredient3}</p>
                <p>${arr[i].strIngredient4}</p>
                <p>${arr[i].strIngredient5}</p>
                <p>${arr[i].strIngredient6}</p>
                <p>${arr[i].strIngredient7}</p>
                <p>${arr[i].strIngredient8}</p>
                <p>${arr[i].strIngredient9}</p>
                <p>${arr[i].strIngredient10}</p>
                <p>${arr[i].strIngredient11}</p>
                <p>${arr[i].strIngredient12}</p>
                <p>${arr[i].strIngredient13}</p>
                <p>${arr[i].strIngredient14}</p>
                <p>${arr[i].strIngredient15}</p>
                </div>
                
                <b >Tags :</b> <br> <br>
                <button class="btn btn-danger"><a href="${arr[i].strYoutube}"></a>You Tube</button>
                           </div>`
                
            }
            
            document.querySelector(".catego").innerHTML=dis
            
            }
            details()
            
                    })
        }
        ingredientscarea()
    
        
            })
    
    
    
    
    }
    
    search()
    
    
    
    
    
     
             
       
    
    })

    //--------------------------------------------------------

$('.contact').click(function(){

   
    

    document.querySelector('.catego').innerHTML= ` 
    <h2 class="text-center text-light">ContacUs...</h2>
 
  
  <form action=" " class="g-4 p-4" >
  <div class="row">

   <div class="col-md-6  "> 
    <input onkeyup="validation()" type="text" placeholder="Enter Your Name" class="form-control w-100 m-1 contactinput " id="name">
    <div class="alert mt-1 alert-danger d-none" id="namealert" role="alert">
    Special Characters and Numbers not allowed
</div>
    </div>
    
    <div class="col-md-6 ">
    <input type="email" placeholder="Enter Email" class="form-control  w-100 m-1 contactinput  " id="email">
    <div class="alert mt-1 alert-danger d-none" id="emailalert" role="alert">
    Special Characters and Numbers not allowed
</div>
    </div>


  
  <div class="col-md-6 pt-3">
    <input type="tel"  placeholder="Enter Phone" class="form-control w-100 m-1 contactinput" id="phone">
	<div class="alert mt-1 alert-danger d-none" id="phonealert" role="alert">
	Special Characters and Numbers not allowed
	</div>
</div>
  <div class="col-md-6  pt-3">
  <input type="number" placeholder="Enter Age" class="form-control w-100 m-1 contactinput" id="age">
  <div class="alert mt-1 alert-danger d-none" id="agealert" role="alert">
  Special Characters and Numbers not allowed
</div>
  </div>


  <div class="col-md-6 pt-3">
  <input type="password" placeholder="Enter Password"  class="form-control w-100 m-1 contactinput" id="password">
  <div class="alert mt-1 alert-danger d-none" id="passalert" role="alert">
  Special Characters and Numbers not allowed
</div>
  </div>


<div class="col-md-6 pt-3">
 <input type="password"  placeholder="Enter RePassword"  class="form-control w-100 m-1 contactinput" id="repassword">
 <div class="alert mt-1 alert-danger d-none" id="repassalert" role="alert">
 Special Characters and Numbers not allowed
</div>
 </div>
  
  <div class="m-auto text-center"> 
  <button type="submit" class="btn btn-light text-danger  mt-4  contactbtn " disabled  id="contactbtn">Submit</button>
  </div>
  </div>
  </form>`
  
  
  
  
 

  $('.navhide').animate({ left: (-hidenavbarwidth) }, 500)
  $(".navside").animate({ left: "0px" }, 500)
  $(".navbtn").text('☰')



})

//-------------------------------------------------------------



userName = document.getElementById("name"),
userEmail = document.getElementById("email"),
userPhone = document.getElementById("phone"),
userAge = document.getElementById("age"),
userPassword = document.getElementById("password"),
userRePassword = document.getElementById("rePassword"),
userNameAlert = document.getElementById("namealert"),
userEmailAlert = document.getElementById("emailalert"),
userPhoneAlert = document.getElementById("phonealert"),
userAgeAlert = document.getElementById("agealert"),
userpasswordAlert = document.getElementById("passalert"),
userRepasswordAlert = document.getElementById("repassalert");




let nameToached = false,
    emailToached = false,
    phoneToached = false,
    ageToached = false,
    passwordToached = false,
    repasswordToached = false;



$(userName).focus(function(){
    nameToached = true
})
$(userEmail).focus(function(){
    emailToached = true
})
$(userPhone).focus(function() {
    phoneToached = true
})
$(userAge).focus(function() {
    ageToached = true
})
$(userPassword).focus(function() {
    passwordToached = true
})
$(userRePassword).focus(function() {
    repasswordToached = true
})




$("input").click(function(){

    if (nameToached) {
        if (userNameValid()) {
            userName.classList.remove("is-invalid")
            userName.classList.add("is-valid")
            userNameAlert.classList.replace("d-block", "d-none")
            userNameAlert.classList.replace("d-block", "d-none")

        } else {
            userName.classList.replace("is-valid", "is-invalid")
            userNameAlert.classList.replace("d-none", "d-block")
        }
    }

    if (emailToached) {
        if (userEmailValid()) {
            userEmail.classList.remove("is-invalid")
            userEmail.classList.add("is-valid")
            userEmailAlert.classList.replace("d-block", "d-none")
            userEmailAlert.classList.replace("d-block", "d-none")
        } else {
            userEmail.classList.replace("is-valid", "is-invalid")
            userEmailAlert.classList.replace("d-none", "d-block")
        }
    }

    if (phoneToached) {
        if (userPhoneValid()) {
            userPhone.classList.remove("is-invalid")
            userPhone.classList.add("is-valid")
            userPhoneAlert.classList.replace("d-block", "d-none")
            userPhoneAlert.classList.replace("d-block", "d-none")
        } else {
            userPhone.classList.replace("is-valid", "is-invalid")
            userPhoneAlert.classList.replace("d-none", "d-block")
        }
    }

    if (ageToached) {
        if (userAgeValid()) {
            userAge.classList.remove("is-invalid")
            userAge.classList.add("is-valid")
            userAgeAlert.classList.replace("d-block", "d-none")
            userAgeAlert.classList.replace("d-block", "d-none")
        } else {
            userAge.classList.replace("is-valid", "is-invalid")
            userAgeAlert.classList.replace("d-none", "d-block")
        }
    }

    if (passwordToached) {
        if (userPasswordValid()) {
            userPassword.classList.remove("is-invalid")
            userPassword.classList.add("is-valid")
            userpasswordAlert.classList.replace("d-block", "d-none")
            userpasswordAlert.classList.replace("d-block", "d-none")
        } else {
            userPassword.classList.replace("is-valid", "is-invalid")
            userpasswordAlert.classList.replace("d-none", "d-block")
        }
    }

    if (repasswordToached) {
        if (userRePasswordValid()) {
            userRePassword.classList.remove("is-invalid")
            userRePassword.classList.add("is-valid")
            userRepasswordAlert.classList.replace("d-block", "d-none")
            userRepasswordAlert.classList.replace("d-block", "d-none")
        } else {
            userRePassword.classList.replace("is-valid", "is-invalid")
            userRepasswordAlert.classList.replace("d-none", "d-block")
        }
    }

    if(userNameValid() && userEmailValid() && userPhoneValid() && userAgeValid() && userPasswordValid() && userRePasswordValid()){
        document.getElementById("contactbtn").removeAttribute("disabled")
    }else{
        document.getElementById("contactbtn").setAttribute("disabled","true")
    }



function userNameValid() {
    return /^[a-zA-Z ]+$/.test(userName.value)
}

function userEmailValid() {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail.value)
}

function userPhoneValid() {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userPhone.value)
}

function userAgeValid() {
    return /^[1-9][0-9]?$|^100$/.test(userAge.value)
}

function userPasswordValid() {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value)
}

function userRePasswordValid() {
    return userPassword.value == userRePassword.value
}


})

})






