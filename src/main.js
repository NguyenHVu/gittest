import { handelMethod, HOST, KEY, url } from "./containts/common.js";

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

// async, await

// async function getListFood() {

// }

const root = document.getElementById("product");

const handelDelete = (id) => {
  const data = JSON.parse(localStorage.getItem("data"));
  const index = data.findIndex((item) => item.id === id);
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  renderUI();
};

const getListFood = async () => {
  const option = handelMethod("GET", KEY, HOST);
  try {
    const response = await fetch(url, option);
    const data = await response.json();
    localStorage.setItem("data", JSON.stringify(data));

  } catch (error) {
    console.error(error);
  } finally {
    console.log("Done");
  }
};

getListFood();

const renderUI = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  for (let i = 0; i < data.length; i++) {
    const food = data[i];
    const cardItem = document.createElement("div");
    cardItem.classList.add("card");
    cardItem.style =
      "width: 18rem; margin: auto; margin-bottom: 20px; min-height:300px";

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.style = "height: 200px; object-fit: cover;";
    img.src = food.image;
    img.alt = food.title;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = food.title;

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn", "btn-danger");
    btnDelete.innerText = "Delete";

    btnDelete.onclick = () => handelDelete(food.id);

    cardItem.appendChild(img);
    cardItem.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(btnDelete);
    root.appendChild(cardItem);
  }
};

renderUI();
