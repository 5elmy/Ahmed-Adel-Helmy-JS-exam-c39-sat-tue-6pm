//---------------------------=defalut Api=-----------------------

let data=[]
let dataDescription=[]
let chooseEat;
async function getMeal()
{
    let apiResponse= await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    let  kdata= await  apiResponse.json();
     data=kdata.meals
  
    display();
}
getMeal()
function display()
{
        let container=``;
    for(let i=0;i< data.length;i++)
    {
        container +=` <div class=" col-md-3 shadow  contain">
       <div class=" member shadow  "> <img src="${data[i].strMealThumb}" class="img-fluid " alt="">
       <div class="overLay  ">
         <h2 class="dataValue" dataval="${data[i].strMeal}" >${data[i].strMeal}</h2>
       </div></div>
      </div>`
     
   
    } 
    document.querySelector(".row").innerHTML=container;
    let dataMeal=[]


$(".contain").click(function(e){
  console.log("qqqqqqqqqqqqqqqqqqqqqqqqq")

  async function getMeal(meal) {
      let Response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
      let dataready = await Response.json();
      dataMeal = dataready.meals;
      console.log(dataMeal);
      displayMeal();
      console.log(e.target.innerText)
  }
  getMeal(e.target.innerText)
  function displayMeal() {
      let cartona = `<div class="col-md-4 py-5 text-white">
              <img class="img-fluid" src="${dataMeal[0].strMealThumb}">
              <h3>${dataMeal[0].strMeal}</h3>
          </div>
          <div class="col-md-8 py-5 text-white">
              <h3>Instruction</h3>
              <p>${dataMeal[0].strInstructions}</p>
              <p><span class="fs-3">Area : </span>${dataMeal[0].strArea} </p>
              <p><span class="fs-3">Category : </span> ${dataMeal[0].strCategory}</p>

              <p><span class="d-block fs-3">Recipes : </span>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient1}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient2}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient3}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient4}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient5}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient6}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure1}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure2}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure3}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure4}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure5}</button>
                     <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure6}</button>
                      
                      
                      
                      </p>
                      <p><span class="fs-3">Tags : </span><button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strTags}</button> </p>

              
              <button class="btn btn-success"><a  href="${dataMeal[0].strSource}">Source</a></button>
              <button class="btn btn-danger"><a class="text-decoration-none text-light" href="${dataMeal[0].strYoutube}">Youtube</a></button>
              
          </div>`
     
      document.querySelector(".row").innerHTML = cartona;
  }
})
}
//------------------------------------=navbar=------------------------------------------

 let x=$(".ii").outerWidth(true);
 
 $("nav").css({left:`-${x}`})
 $(".main-icon").click(function(){
  let left=$("nav").css("left");
  if(left=="0px")
  {
    $("nav").animate({left:`-${x}`},1000)
   
    document.querySelector(".fa-bars").classList.remove("d-none");
    document.querySelector(".fa-xmark").classList.add("d-none");

  }
  else
  {
    $("nav").animate({left:`0px`},1000)
    document.querySelector(".fa-xmark").classList.remove("d-none");
    document.querySelector(".fa-bars").classList.add("d-none");

  }
 })
 //-------------------------------=Area&Ingredient=-------------------------------------------------
let char;
let items
$(".areaIngred ").click(function(e){
  let char=$(e.target).attr("meal-type");
 
  async function getInteg_area(char)
  {
   let apiResponse= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?${char}=list`)
  let apidata= await apiResponse.json();
    items=apidata.meals;
  
    displayCAI()
 
  }
  getInteg_area(char)
 
  function displayCAI()
 {
         let container=``;
         if(char=="a")
         {
           for(let i=0;i< items.length;i++)
              {
             container +=` <div class=" col-md-3 member  text-center  ">
             <i class="fa-solid fa-city fa-3x"></i>
                <div class="  ">
                <h2>${items[i].strArea}</h2>
              </div>
             </div>`
      
            }
            document.querySelector(".row").innerHTML=container;
            $("#desc").empty();


            $(".member").click(function(e){
              async function mealInCategory(meal) {
                let Response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${meal}`);
                let dataready = await Response.json();
                datamealInCategory = dataready.meals;
                console.log(datamealInCategory );
                displaymealInCategory();
                console.log(e.target.innerText)
            }
            mealInCategory(e.target.innerText)
            
            function displaymealInCategory()
            {
              let container=``;
              for(let i=0;i<datamealInCategory.length;i++)
            {
              
            
                    container+=`<div class=" col-md-3  shadow  ">
                    <div class="hovermain position-relative ">
                    <img src="${datamealInCategory[i].strMealThumb}" class="img-fluid" alt="">
                    <div class="hoverLay d-flex align-items-center  ">
                      <h2>${datamealInCategory[i].strMeal}</h2>
                    </div>
                    
                    </div>
            
            </div>`
             
            }
            
            document.querySelector(".row").innerHTML=container;


            let dataMeal=[]
            $(".hovermain").click(function(e){
              console.log("qqqqqqqqqqqqqqqqqqqqqqqqq")
              
              async function getMeal(meal) {
                  let Response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
                  let dataready = await Response.json();
                  dataMeal = dataready.meals;
                  console.log(dataMeal);
                  displayMeal();
                  console.log(e.target.innerText)
              }
              getMeal(e.target.innerText)
              function displayMeal() {
                  let cartona = `<div class="col-md-4 py-5 text-white">
                          <img class="img-fluid" src="${dataMeal[0].strMealThumb}">
                          <h3>${dataMeal[0].strMeal}</h3>
                      </div>
                      <div class="col-md-8 py-5 text-white">
                          <h3>Instruction</h3>
                          <p>${dataMeal[0].strInstructions}</p>
                          <p><span class="fs-3">Area : </span>${dataMeal[0].strArea} </p>
                          <p><span class="fs-3">Category : </span> ${dataMeal[0].strCategory}</p>
            
                          <p><span class="d-block fs-3">Recipes : </span>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient1}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient2}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient3}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient4}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient5}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient6}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure1}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure2}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure3}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure4}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure5}</button>
                                 <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure6}</button>
                                  </p>
                                  <p><span class="fs-3">Tags : </span><button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strTags}</button> </p>

                                 


            
                          
                          <button class="btn btn-success"><a  href="${dataMeal[0].strSource}">Source</a></button>
                          <button class="btn btn-danger"><a  href="${dataMeal[0].strYoutube}">Youtube</a></button>
                          
                      </div>`
                 
                  document.querySelector(".row").innerHTML = cartona;
              }
            })

            }
            })
            
             
 
         }
         else
         {
 
           for(let i=0;i< items.length;i++)
              {
             container +=` <div class=" col-md-3 member  text-center ">
             <i class="fa-solid fa-bowl-food fa-3x"></i>
                <div class="  ">
                <h2>${items[i].strIngredient}</h2>
              
              </div>
             </div>`
      
            }
            document.querySelector(".row").innerHTML=container;
            $("#desc").empty()

// <p>${items[i].strDescription.split(" ").splice(0,5).join('')}</p>
            $(".member").click(function(e){
              async function mealInCategory(meal) {
                let Response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`);
                let dataready = await Response.json();
                datamealInCategory = dataready.meals;
                console.log(datamealInCategory );
                displaymealInCategory();
                console.log(e.target.innerText)
            }
            mealInCategory(e.target.innerText)
            
            function displaymealInCategory()
            {
              let container=``;
              for(let i=0;i<datamealInCategory.length;i++)
            {
              
            
                    container+=`<div class=" col-md-3  shadow  ">

                    <div class="hovermain position-relative">

                        <img src="${datamealInCategory[i].strMealThumb}" class="img-fluid" alt="">
                        <div class="hoverLay d-flex align-items-center  ">
                       <h2>${datamealInCategory[i].strMeal}</h2>
                       </div>
                    </div>
             
            </div>`
             
            }
            
            document.querySelector(".row").innerHTML=container;

            let dataMeal=[]
            $(".hovermain").click(function(e){
              console.log("qqqqqqqqqqqqqqqqqqqqqqqqq")
              
              async function getMeal(meal) {
                  let Response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
                  let dataready = await Response.json();
                  dataMeal = dataready.meals;
                  console.log(dataMeal);
                  displayMeal();
                  console.log(e.target.innerText)
              }
              getMeal(e.target.innerText)
              function displayMeal() {
                  let cartona = `<div class="col-md-4 py-5 text-white">
                          <img class="img-fluid" src="${dataMeal[0].strMealThumb}">
                          <h3>${dataMeal[0].strMeal}</h3>
                      </div>
                      <div class="col-md-8 py-5 text-white">
                          <h3>Instruction</h3>
                          <p>${dataMeal[0].strInstructions}</p>
                          <p><span class="fs-3">Area : </span>${dataMeal[0].strArea} </p>
                          <p><span class="fs-3">Category : </span> ${dataMeal[0].strCategory}</p>
            
                          <p><span class="d-block fs-3">Recipes : </span>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient1}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient2}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient3}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient4}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient5}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient6}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure1}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure2}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure3}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure4}</button>
                                   <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure5}</button>
                                 <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure6}</button>
                                  
                                  
                                  
                                  </p>
                                  <p><span class="fs-3">Tags : </span><button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strTags}</button> </p>
                                  <button class="btn btn-success"><a  href="${dataMeal[0].strSource}">Source</a></button>
                                  <button class="btn btn-danger"><a class="text-decoration-none text-light" href="${dataMeal[0].strYoutube}">Youtube</a></button>
            
                          
                                  
                          
                      </div>`
                 
                  document.querySelector(".row").innerHTML = cartona;
              }
            })

            }
            })
           
            
         }
 
 
     
     
   



 
 }
  


})




// .split(" ").splice(0,5).join('')

//--------------------------------=Category=------------------------------------
let datacateg=[];
let datamealInCategory=[] 
$(".cat").click(function(e){
 
  async function getCategory()
{
  let apiresponse=await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
  let apiresult= await apiresponse.json();
  datacateg=apiresult.categories;
  displayCategory()
}
getCategory()
function displayCategory()
{
        let container=``;
    for(let i=0;i<datacateg.length;i++)
    {
      

            container+=`<div class=" col-md-3  shadow  ">
            <div class="hovermain position-relative">
              <img src="${datacateg[i].strCategoryThumb}" class="img-fluid" alt="">
             <div class="hoverLay d-flex align-items-center  ">
              <h2>${datacateg[i].strCategory}</h2>
              </div>
            </div>


     
             </div>`
     
    }
    
    document.querySelector(".row").innerHTML=container;
    $("#desc").empty();
    //2222222222222222222222222222222222222222222222222222222222222222222

    $(".hovermain").click(function(e){
      async function mealInCategory(meal) {
        let Response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`);
        let dataready = await Response.json();
        datamealInCategory = dataready.meals;
        console.log(datamealInCategory );
        displaymealInCategory();
        console.log(e.target.innerText)
    }
    mealInCategory(e.target.innerText)

    function displaymealInCategory()
    {
      let container=``;
      for(let i=0;i<datamealInCategory.length;i++)
    {
      

            container+=`<div class=" col-md-3  shadow  ">
            <div class="hovermain position-relative">

                <img src="${datamealInCategory[i].strMealThumb}" class="img-fluid" alt="">
                  <div class="hoverLay d-flex align-items-center  ">
                   <h2>${datamealInCategory[i].strMeal}</h2>
                 </div>
            
            </div>
     
   </div>`
     
    }
    
    document.querySelector(".row").innerHTML=container;

       //---------------------------------333333333333333333333333333333-------------------------------------------------
    let dataMeal=[]
    $(".hovermain").click(function(e){
      console.log("qqqqqqqqqqqqqqqqqqqqqqqqq")
      async function getMeal(meal) {
          let Response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
          let dataready = await Response.json();
          dataMeal = dataready.meals;
          console.log(dataMeal);
          displayMeal();
          console.log(e.target.innerText)
      }
      getMeal(e.target.innerText)
      function displayMeal() {
          let cartona = `<div class="col-md-4 py-5 text-white">
                  <img class="img-fluid" src="${dataMeal[0].strMealThumb}">
                  <h3>${dataMeal[0].strMeal}</h3>
              </div>
              <div class="col-md-8 py-5 text-white">
                  <h3>Instruction</h3>
                  <p>${dataMeal[0].strInstructions}</p>
                  <p><span class="fs-3">Area : </span>${dataMeal[0].strArea} </p>
                  <p><span class="fs-3">Category : </span> ${dataMeal[0].strCategory}</p>
    
                  <p><span class="d-block fs-3">Recipes : </span>
                           <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient1}</button>
                           <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient2}</button>
                           <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient3}</button>
                           <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient4}</button>
                           <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient5}</button>
                           <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient6}</button>
                           <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure1}</button>
                           <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure2}</button>
                           <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure3}</button>
                           <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure4}</button>
                           <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure5}</button>
                         <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure6}</button>
                          
                          
                          
                          </p>
                          <p><span class="fs-3">Tags : </span><button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strTags}</button> </p>
    
                  
                  <button class="btn btn-success"><a  href="${dataMeal[0].strSource}">Source</a></button>
                  <button class="btn btn-danger"><a  href="${dataMeal[0].strYoutube}">Youtube</a></button>
                  
              </div>`
         
          document.querySelector(".row").innerHTML = cartona;
      }
    })

    }
    })

}


})

//--------------------------------=Search=-----------------------
$(".search").click(function(){
  let container=`
       <div class="col-md-6"><input id="input1" data="s" class=" text-white w-75 mx-auto bg-transparent form-control text-center searchby " placeholder="Search By Name" type="text"></div>
       <div class="col-md-6"> <input id="input2" data="f" class=" text-white w-75 mx-auto bg-transparent form-control text-center searchby" placeholder="Search By First letter" type="text"></div>
 `

document.querySelector("#desc").innerHTML=container;
$(".row").empty()
$("#input1 ,#input2").keyup(function(){
  console.log("hiii")
  let char=$(this).attr("data");
  console.log(char)
 let variabledata=  $(this).val()
 console.log(variabledata);
 async function getMeal()
{
    let apiResponse= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${char}=${variabledata}`);
    let  kdata= await  apiResponse.json();
     data=kdata.meals
  
    display();
}
getMeal()
function display()
{
        let container=``;
    for(let i=0;i< data.length;i++)
    {
        container +=` <div class=" col-md-3 shadow  contain">
       <div class=" member shadow  "> <img src="${data[i].strMealThumb}" class="img-fluid " alt="">
       <div class="overLay  ">
         <h2 class="dataValue" dataval="${data[i].strMeal}" >${data[i].strMeal}</h2>
       </div></div>
      </div>`
     
   
    } 
    document.querySelector(".row").innerHTML=container;
    let dataMeal=[]


$(".contain").click(function(e){
  console.log("qqqqqqqqqqqqqqqqqqqqqqqqq")

  async function getMeal(meal) {
      let Response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
      let dataready = await Response.json();
      dataMeal = dataready.meals;
      console.log(dataMeal);
      displayMeal();
      console.log(e.target.innerText)
  }
  getMeal(e.target.innerText)
  function displayMeal() {
      let cartona = `<div class="col-md-4 py-5 text-white">
              <img class="img-fluid" src="${dataMeal[0].strMealThumb}">
              <h3>${dataMeal[0].strMeal}</h3>
          </div>
          <div class="col-md-8 py-5 text-white">
              <h3>Instruction</h3>
              <p>${dataMeal[0].strInstructions}</p>
              <p><span class="fs-3">Area : </span>${dataMeal[0].strArea} </p>
              <p><span class="fs-3">Category : </span> ${dataMeal[0].strCategory}</p>

              <p><span class="d-block fs-3">Recipes : </span>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient1}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient2}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient3}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient4}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient5}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strIngredient6}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure1}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure2}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure3}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure4}</button>
                       <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure5}</button>
                     <button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strMeasure6}</button>
                      
                      
                      
                      </p>
                      <p><span class="fs-3">Tags : </span><button class="p-2 bg-secondary rounded-3 my-3 me-1">${dataMeal[0].strTags}</button> </p>

              
              <button class="btn btn-success"><a  href="${dataMeal[0].strSource}">Source</a></button>
              <button class="btn btn-danger"><a class="text-decoration-none text-light" href="${dataMeal[0].strYoutube}">Youtube</a></button>
              
          </div>`
     
      document.querySelector(".row").innerHTML = cartona;
  }
})
}

})

})




//---------------------------------=concat=------------------------
$(".Contact").click(function(){
  console.log("Contact");
  let container=` <section class="d-flex justify-content-center align-items-center bg-black  ">

      
       
  <div class="container">
    <div class="row g-0">
      <h2 class="text-center text-white mb-5">ContactUS........</h2>
        <div class="col-md-6 mb-4"><input class=" text-white w-75 mx-auto bg-transparent form-control text-center searchby yname  " placeholder="Enter Your Name" type="text"></div>
        <div class="col-md-6 mb-4"> <input class=" text-white w-75 mx-auto bg-transparent form-control text-center searchby yemail"  placeholder="Enter Email" type="email"></div>
        <div class="col-md-6 mb-4"><input class=" text-white w-75 mx-auto bg-transparent form-control text-center searchby yphone   " placeholder="Enter Phone" type="tel"></div>
        <div class="col-md-6 mb-4"> <input class=" text-white w-75 mx-auto bg-transparent form-control text-center searchby yage  " placeholder="Enter Age" type="text"></div>
        <div class="col-md-6 mb-4"><input class=" text-white w-75 mx-auto bg-transparent form-control text-center searchby ypass   " placeholder="Enter Password" type="password"></div>
        <div class="col-md-6 mb-4"> <input class=" text-white w-75 mx-auto bg-transparent form-control text-center searchby yrepass  " placeholder="Enter Repassword" type="password"></div>
        
    </div>
    <div class=" d-flex justify-content-center align-items-center mt-3"><button class="text-center btn btn-outline-danger sub mx-auto  bg-transparent py-1 px-2" type="submit">Submit</button></div>
   </div>



</section>`

document.querySelector(".row").innerHTML=container;
})
 


 



 







 


