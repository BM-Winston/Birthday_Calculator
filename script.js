const userForm = document.querySelector("form")
const userDate = document.querySelector("input[input=date]")

userForm .addEventListener("submit", validateUserInfo)
function validateUserInfo(event) {
    event.preventDefault();
    alert("submitted")

}