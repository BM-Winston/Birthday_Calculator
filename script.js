const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const gender = {
    male:{
        Sunday : "Kwasi",
        Monday : "Kwadwo",
        Tuesday : "Kwabena",
        Wednesday :"Kwaku",
        Thursday : "Yaw",
        Friday : "Kofi",
        Saturday : "Kwame",
    },
    females:{
        Sunday : "Akosua",
        Monday : "Adwoa",
        Tuesday : "Abenaa",
        Wednesday : "Akua",
        Thursday : "Yaa",
        Friday : "Afua",
        Saturday : "Ama", 

    }

}



const userForm = document.querySelector("form");

userForm.addEventListener("submit", validateUserInfo);
function validateUserInfo(event) {
    event.preventDefault();
    alert("submitted!")
    const userDate = document.querySelector("input[name=date]");

    const convertedDate = new Date(userDate.value)
    const day = convertedDate.getDay();
    
    const weekDays = days[day]
    console.log(gender["male"][weekDays]);
    
    
}

