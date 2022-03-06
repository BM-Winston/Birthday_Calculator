const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const gender ={
    Male : {
        Sunday:"Kwasi"
        Monday:"Kwadwo"
        Tuesday:"Kwabena"
        Wednesday:"Kwaku"
        Thursday:"Yaw"
        Friday:"Kofi"
        Saturday:"Kwame"
    }.
    Female : {
        Sunday:"Akosua"
        Monday:"Adwoa"
        Tuesday:"Abenaa"
        Wednesday:"Akua"
        Thursday:"Yaa"
        Friday:"Afua"
        Saturday:"Ama"
}
         
    }


const userForm = document.querySelector("form")
const userDate = document.querySelector("input[input=date]")

userForm .addEventListener("submit", validateUserInfo)
function validateUserInfo(event) {
    event.preventDefault();
    alert("submitted");
   

   const getConvertedDate = new(userDate.value);
   const day = getConvertedDate.getDay();
   console.log(days[day]);
   const weekDays = days[day]
   console.log(gender["Male"]["weekDays"]);
   console.log(gender["Female"][weekDays]);
}