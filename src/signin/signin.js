const formSingIn = document.getElementById("form-login");

const email = document.getElementById("email");
const password = document.getElementById("password");
const userName = document.getElementById("name");

formSingIn.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = email.value;
  const passwordValue = password.value;
  const userNameValue = userName.value;

  // validation: email, password, userName

  //tạo list user mới
    const listUser = [];
    const user = {
      email: emailValue,
      password: passwordValue,
      userName: userNameValue,
    };
    //thêm user mới vào list
    listUser.push(user);


    //lưu list user vào local storage
    localStorage.setItem("listUser", JSON.stringify(listUser));
    //chuyển hướng về trang login
    window.location.href = "../Login/login.html";
});
