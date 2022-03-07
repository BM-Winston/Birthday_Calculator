const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const akanNames = {
    Male:{
        Sunday : "Kwasi",
        Monday : "Kwadwo",
        Tuesday : "Kwabena",
        Wednesday :"Kwaku",
        Thursday : "Yaw",
        Friday : "Kofi",
        Saturday : "Kwame",
    },
    Female:{
        Sunday : "Akosua",
        Monday : "Adwoa",
        Tuesday : "Abenaa",
        Wednesday : "Akua",
        Thursday : "Yaa",
        Friday : "Afua",
        Saturday : "Ama", 

    }

}



const userForm = document.querySelector(".userForm");

userForm.addEventListener("submit", validateUserInfo);
function validateUserInfo(event) {
    event.preventDefault();
    // alert("submitted!")
    const userDate = document.querySelector("input[name=date]");
    const gender = document.querySelector("input[name=gender]:checked")

    const convertedDate = new Date(userDate.value)
    const day = convertedDate.getDay();
    if (day<1 ) {
        return alert("Invalid day. Enter valid day!")
        
    }
    
   
    const weekDays = days[day]
    alert(akanNames[gender.value][weekDays]);
    
    
}

