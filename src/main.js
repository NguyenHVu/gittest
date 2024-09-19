// import { handelMethod, HOST, KEY, url } from "./containts/common.js";
// const userName = document.getElementById("userName");
// const infoLocal = JSON.parse(localStorage.getItem("user"));

// const btnLogin = document.getElementById("login");
// const btnLogout = document.getElementById("logout");

// btnLogin.addEventListener("click", () => {
//   window.location.href = "./Login/login.html"
// })

// btnLogout.addEventListener("click", () => {
//   window.location.href = "./Login/login.html"
//   localStorage.clear();
// });

// if(infoLocal !== null){
//   userName.innerText = infoLocal.userName;
//   btnLogin.style.display = "none";
//   btnLogout.style.display = "block";
// }

// function getListFood() {
//   const option = handelMethod("GET", KEY, HOST);
//   fetch(url, option)
//     // Việc 1: thực hiện thành công => data > json
//     .then((response) => response.json())
//     // Việc 2: lấy dữ liệu từ data
//     .then((data) => {
//       console.log(data, "data<<<<<<<");
//       // sử lí ui
//     })
//     .catch((err) => {
//       console.error(err);
//     })
//     .finally(() => {
//       console.log("Done");
//     });
// }

// getListFood();

// // async, await

// // async function getListFood() {

// // }

// const root = document.getElementById("product");

// const handelDelete = (id) => {
//   const data = JSON.parse(localStorage.getItem("data"));
//   const index = data.findIndex((item) => item.id === id);
//   data.splice(index, 1);
//   localStorage.setItem("data", JSON.stringify(data));
//   renderUI();
// };

// const getListFood = async () => {
//   const option = handelMethod("GET", KEY, HOST);
//   try {
//     const response = await fetch(url, option);
//     const data = await response.json();
//     localStorage.setItem("data", JSON.stringify(data));

//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log("Done");
//   }
// };

// getListFood();

// const renderUI = () => {
//   const data = JSON.parse(localStorage.getItem("data"));
//   for (let i = 0; i < data.length; i++) {
//     const food = data[i];
//     const cardItem = document.createElement("div");
//     cardItem.classList.add("card");
//     cardItem.style =
//       "width: 18rem; margin: auto; margin-bottom: 20px; min-height:300px";

//     const img = document.createElement("img");
//     img.classList.add("card-img-top");
//     img.style = "height: 200px; object-fit: cover;";
//     img.src = food.image;
//     img.alt = food.title;

//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");

//     const cardTitle = document.createElement("h5");
//     cardTitle.classList.add("card-title");
//     cardTitle.innerText = food.title;

//     const btnDelete = document.createElement("button");
//     btnDelete.classList.add("btn", "btn-danger");
//     btnDelete.innerText = "Delete";

//     btnDelete.onclick = () => handelDelete(food.id);

//     cardItem.appendChild(img);
//     cardItem.appendChild(cardBody);
//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(btnDelete);
//     root.appendChild(cardItem);
//   }
// };

// renderUI();

const btnOpenCart = document.getElementById("openCart");
const elementCart = document.getElementById("cart");
const productList = document.getElementById("product");

const data = [
  {
    id: 1,
    name: "Coca",
    price: 10000,
  },
  {
    id: 2,
    name: "pepsi",
    price: 10000,
  },
  {
    id: 3,
    name: "coffe",
    price: 10000,
  },
  {
    id: 4,
    name: "walter",
    price: 10000,
  },
];

btnOpenCart.addEventListener("click", () => {
  const hidden = elementCart.style.display;
  if (hidden === "none" || hidden === "") {
    elementCart.style.display = "flex";
  } else {
    elementCart.style.display = "none";
  }
});

const renderUI = () => {
  for (let i = 0; i < data.length; i++) {
    const productData = data[i];
    const productItem = document.createElement("div");
    const title = document.createElement("h2");
    const price = document.createElement("p");

    // button add to cart
    const btnAddToCart = document.createElement("button");
    btnAddToCart.innerText = "Add to cart";

    btnAddToCart.addEventListener("click", () => {
      addProductToCart(productData.id);
    });

    price.innerText = productData.price;
    productItem.style = `
    margin: 10px
   `;

    title.innerText = productData.name;
    productItem.appendChild(title);
    productItem.appendChild(price);
    productItem.appendChild(btnAddToCart);
    productList.appendChild(productItem);
  }
};
window.onload = renderUI;

const addProductToCart = (id) => {
  const index = data.findIndex((item) => item.id === id);
  if (index === -1) return;

  const product = data[index];
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const indexCart = cart.findIndex((item) => item.id === id);

  if (indexCart !== -1) {
    cart[indexCart].quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartContent = document.getElementById("cartContent");

const renderCart = () => {
  const listData = JSON.parse(localStorage.getItem("cart"));
  let totalPrice = 0;
  const totalPriceElement = document.createElement("p");  
  for (let i = 0; i < listData.length; i++) {
    const cart = listData[i];
    totalPrice += cart.price * cart.quantity;
    const cartItem = document.createElement("div");
    const price = document.createElement("p");
    const quantity = document.createElement("p");

    quantity.innerText = cart.quantity;
    price.innerText = cart.price;
    const title = document.createElement("h2");
    title.innerText = cart.name;
    cartItem.appendChild(title);
    cartItem.appendChild(price);
    cartItem.appendChild(quantity);
    cartContent.appendChild(cartItem);
  }


  console.log(totalPrice);
  totalPriceElement.innerText = totalPrice;
  cartContent.appendChild(totalPriceElement);

};

renderCart();
