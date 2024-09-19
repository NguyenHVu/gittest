const formLogin = document.getElementById("form-login");

const email = document.getElementById("email");
const password = document.getElementById("password");
const userName = document.getElementById("username");

function validation (value, type) {
    if (value === "") {
        alert(`${type} không được để trống`);
        return false;
    }
    if (type === "Email") {
        //regex: test email đúng đụng dạng hay không
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Regex
        if (!emailPattern.test(value)) {
            alert("Email không đúng định dạng");
            return false;
        }
    }
    return true;
}
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    const userNameValue = userName.value;

    // lấy list user từ local storage đã đăng ký
    const listUser = JSON.parse(localStorage.getItem("listUser")) || [];

    // email: email => required, phải là email.
    // password => required, phải có ít nhất 8 ký tự.
    // userName => required, phải có ít nhất 6 ký tự.
    // =>> true/false

    // validation: email, password, userName
    const isActive = validation(emailValue, "Email") && validation(passwordValue, "Password") && validation(userNameValue, "Username");

    if(!isActive){
        return;
    }else{
        // kiểm tra email và password đã đăng ký chưa
        for (let i = 0; i < listUser.length; i++) {
            const email = listUser[i].email;
            const password = listUser[i].password;
            if(email === emailValue && password === passwordValue){
                localStorage.setItem("user", JSON.stringify({
                    email: emailValue,
                    password: passwordValue,
                    userName: userNameValue
                }))
                window.location.href = "../index.html";
            }else{
                alert("Đăng Nhập không thành công");
            }
        }
    }
})