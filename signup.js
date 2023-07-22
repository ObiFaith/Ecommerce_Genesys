// Code hop-up
const heroBtn = document.querySelector(".hero-btn")
const hopUp = document.querySelector(".hop-up")
const infoPrompt = document.querySelector(".infoPrompt")
const hopPrompt = document.querySelector(".hopPrompt")

heroBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    const userInputs = document.querySelectorAll(".user");

    let isEmpty = false;
    userInputs.forEach((input) => {
      if (input.value === "") {
        isEmpty = true;
        infoPrompt.textContent = "Please fill in your details"
        infoPrompt.style.color = "red"
      }
    });
  
    if (!isEmpty) {
        infoPrompt.textContent = ""
        hopUp.style.display = "flex"
    }
})

// Hop redirection
hopUp.addEventListener("click", (e) => {
    e.preventDefault();
    const codeInputs = document.querySelectorAll(".code");
  
    let isEmpty = false;
    codeInputs.forEach((input) => {
      if (input.value === "") {
        isEmpty = true;
        hopPrompt.textContent = "Please fill in the code sent"
        hopPrompt.style.color = "red"
      }
    });
  
    if (!isEmpty) {
        hopPrompt.textContent = ""
      window.location = '/login.html';
    }
  });
  