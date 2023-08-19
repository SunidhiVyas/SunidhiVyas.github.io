const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id:1,
    title:"Air Force",
    price: 119,
    colors: [
      {
        code: "white",
        img: "./img/kisspng-nike-air-max-sneakers-nike-air-force-1-mid-7-mens-air-force-one-low-younes-es-5b713d69056780.0265348515341479450222.png"
      },
      {
        code: "black",
        img: "./img/pngwing.com (2).png",
      },
    ],
  },
  {
    id:2,
    title:"Air Jordan",
    price: 149,
    colors: [
      {
      code: "green",
      img: "./img/kisspng-puma-shoe-sneakers-nike-footwear-green-running-shoes-png-5ab04289c427d2.3998064715215008098035.png",
    },
    {
      code:"blue",
      img: "./img/Running-Shoes.png ",
    },
  ],
  },
  {
    id:3,
    title:"Blazer",
    price: 109,
    colors: [
      {
      code: "white",
      img: "./img/pngkit_blazer-png_2792825.png",
    },
    {
      code:"red",
      img: "./img/pngwing.com (3).png",
    },
  ],
  },
  {
    id:4,
    title:"Crater",
    price: 129,
    colors: [
      {
      code: "blue",
      img: "./img/PngItem_3837225.png",
    },
    {
      code:"orange",
      img: "./img/pngfind.com-storm-cloud-png-1683741.png",
    },
  ],
  },
  {
    id:5,
    title:"Hippie",
    price: 99,
    colors: [
      {
      code: "green",
      img: "./img/pngwing.com.png",
    },
    {
      code:"orange",
      img: "./img/pngegg.png ",
    },
  ],
  },
];

let choosenProduct = products[0]

const currentProductImg= document.querySelector(".productImg");
const currentProductTitle= document.querySelector(".productTitle");
const currentProductPrice= document.querySelector(".productPrice");
const currentProductColors= document.querySelectorAll(".color");
const currentProductSizes= document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
      //change the choosen product
      choosenProduct = products[index];

      //change texts of currentProduct
      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "$" + choosenProduct.price;
      currentProductImg.src  = choosenProduct.colors[0].img;

      currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor = choosenProduct.colors[index].code;
      })
    })
})
currentProductColors.forEach((color,index) => {
  color.addEventListener("click", () =>{
    currentProductImg.src=choosenProduct.colors[index].img
  })
})
currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
size.style.backgroundColor="white";
size.style.color="black";
    })
    size.style.backgroundColor="black";
    size.style.color="white";
  })
})
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
})

close.addEventListener("click",()=>{
  payment.style.display="none"
})