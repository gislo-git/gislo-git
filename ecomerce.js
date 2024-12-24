
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
//menuItems.forEach((item, index)=>{
    //item.addEventListener("click", ()=>{
        //wrapper.style.transform =`translateX(${-100 * index}vw)`;
     //});
//});

//arrays
const products=[
{
id:0,
title: "Air Force",
price:112,
colors:[
{
code:"white",
img:"/img/Air_Force.png",
},
{
//code:"black",
//img:"./img/pexels-chuck-3261068",

},
],
},
{
id:1,
title: "JORDAN",
price:132,
colors:[
{
code:"gray",
img:"img/Air_Jordan.png",
},
{
//code:"yellow",
//img:"./img/pexels-88",

},
],
},  
{
id:2,
title: "BRAZZER",
price:122,
colors:[
{
code:"blue",
img:"img/blazer.png",
},
{
//code:"pink",
//img:"./img/pexels-bemistermister-3490360",

},
],
},
{
id:3,
title: "CRATER ",
price:102,
colors:[
{
code:"green",
img:"img/Crater.png",
},
{
//code:"lightBlue",
//img:"./img/pexels-perfect-lens-17918934",

},
],
},
{
id:4,
title: "NIKE ",
price:142,
colors:[
{
code:"marron",
img:"img/nike.png",
},
{
//code:"indigo",
//img:"./img/pexels-micaasato-1580267",

},
],
},



]
let choosenProduct =products[0]
const currentProductImg = document.querySelector(".ProductImg");
const currentProuctTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index)=>{
    item.addEventListener("click", ()=>{

        // change the current slide

        wrapper.style.transform =`translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];
        // change text of current product

         currentProuctTitle.textContent = choosenProduct.title;
         currentProductPrice.textContent = "$"+choosenProduct.price;
        
         currentProductImg.src = choosenProduct.colors[0].img;
         //assighning new colors
         currentProductColors.forEach((color,index)=> {
            color.style.backgroundcolor =choosenProduct.colors[index].code;
         });

    });
});
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
})
currentProductSizes.forEach((size,index)=>{
   size.addEventListener("click",()=>{
    currentProductSizes.forEach((size)=>{
        size.style.backgroundColor="white";
        size.style.color="black";
   });

        size.style.backgroundColor="black";
        size.style.color="white";

        
    });

});
const productButton=document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close =document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
});
close.addEventListener("click",()=>{
    payment.style.display="none"
});