function checkBirthday() {
    let correctDate = "3/11/2003"; // اكتبي تاريخها هنا
    let userDate = document.getElementById("birthdate").value.trim();

    if(userDate === correctDate){
    window.location.href = "birthday.html";
    } else {
        alert("Wrong date 😢 Try again!");
    }
}

