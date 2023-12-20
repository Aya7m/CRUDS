var prName=document.getElementById("pn");
var prPrice=document.getElementById("pp");
var prCatagory=document.getElementById("pc");
var prDiscriptin=document.getElementById("pd");
var productList=[];
var mood="create";
var x;

if(localStorage.product !=''){
    productList=JSON.parse(localStorage.product );

}
else{
    productList=[];
}
// <=================================CREATE PRODUCT======================>
function addProduct(){
    // console.log("creat");
   if(validNewProduct()){
    
        var newProduct={
            name:prName.value,
            price:prPrice.value,
            catagory:prCatagory.value,
            discription:prDiscriptin.value,
        }
    
        if(mood==="create")
        {
             productList.push(newProduct);
            // console.log(productList)
            localStorage.setItem("product",JSON.stringify(productList));
         
            
        }else{
            productList[x]=newProduct;
            mood="create";
            submet.innerHTML="create";
            
    
    
        }
        validPrice()
        validCatagory()
        validDisc()
    
    }

      clearProduct()
    displayProduct()
}
   
      
    

 
    // <=================================CLEAR PRODUCT======================>
    function clearProduct(){
        prName.value='';
        prPrice.value='';
        prCatagory.value='';
        prDiscriptin.value='';
    }

    // <=================================Displsy PRODUCT======================>
    function displayProduct(){
        var output='';
    for(var i=0;i<productList.length;i++){
        output+=`     <tr>
        <td>${i+1}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].catagory}</td>
        <td>${productList[i].discription}</td>
        <td><button onclick="updateProduct(${i})" class="btn btn-warning">update</button></td>
        <td><button onclick="deletPr(${i})" class="btn btn-danger">delete</button></td>
    </tr>`
    }

    document.getElementById("tebody").innerHTML=output;
   

    }
    displayProduct()
  

  // <=================================DELET PRODUCT======================>
function deletPr(i){
    
// console.log(i)
productList.splice(i,1);
localStorage.product=JSON.stringify(productList);
displayProduct()

}

// <=================================EDIT PRODUCT======================>

var submet=document.getElementById("submet");
var upbutt=document.getElementById("update");
function updateProduct(i){
   prName.value=productList[i].name;
   prPrice.value=productList[i].price;
   prCatagory.value=productList[i].catagory;
   prDiscriptin.value=productList[i].discription;
   mood="update";
   
   submet.innerHTML="update";
   x=i;
 scroll({
    top:0,
    behavior:'smooth',

 })
  
   
}

var search=document.getElementById("search");
var output='';
function searchProduct(value){
   for(var i=0;i<productList.length;i++){
    if(productList[i].name.includes(value))
    {
        productList[i].name= productList[i].name.replace(value,`<span class='text-danger fw-bold'>${value}</span>`);
            output+=`     <tr>
            <td>${i+1}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].catagory}</td>
            <td>${productList[i].discription}</td>
            <td><button onclick="updateProduct(${i})" class="btn btn-warning">update</button></td>
            <td><button onclick="deletPr(${i})" class="btn btn-danger">delete</button></td>
        </tr>`
        
        
    }
   
   }
   document.getElementById("tebody").innerHTML=output;

}
function validNewProduct(){
    var regex=/^[A-Z][a-z]{3,6}$/;
    var isVlaid=regex.test(prName.value);
    if(isVlaid){
        document.getElementById("nameError").classList.replace('d-inline-block','d-none');

    }
    else{
        document.getElementById("nameError").classList.replace('d-none','d-inline-block');
    }
    return isVlaid;
}
validNewProduct(prName.value);


function validPrice(){
    var regex=/^([1-9][0-9]{3}|10000)$/;
    var x=regex.test(prPrice.value);
    if(x){
        document.getElementById("priceError").classList.replace('d-inline-block','d-none');

    }
    else{
        document.getElementById("priceError").classList.replace('d-none','d-inline-block');

    }
    return x;
}
validPrice(prPrice.value);  


function validCatagory(){
    var regex=/(phone|mobile|screeb|watch)$/;
    var y=regex.test(prCatagory.value);
    if(y){
        document.getElementById("catError").classList.replace('d-inline-block','d-none');
    }
    else{
        document.getElementById("catError").classList.replace('d-none','d-inline-block');
    }
    return y;
}
validCatagory(prCatagory.value);


function validDisc(){
    var reg=/^([a-z]{1-9} {0,}[a-z]{0,}|[a-z]{1-9})/;
    var z=reg.test(prDiscriptin.value);
    if(z){
        document.getElementById("disError").classList.replace('d-inline-block','d-none');
    }
    else{
        document.getElementById("disError").classList.replace('d-none','d-inline-block');
    }
    return z;

}
validDisc(prDiscriptin.value)

