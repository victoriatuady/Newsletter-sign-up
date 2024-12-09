const input = document.getElementById("email");
const message = document.querySelector(".error-msg");
const emailField = document.querySelector(".email-section");
const successField = document.querySelector(".success-message-section");
const email = document.getElementById("individual-email");
const button1 = document.getElementById("button");
const button2 = document.getElementById("dismiss-btn");
const regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;

button1.addEventListener("click", () => {
  const inputValue = input.value.trim();
  const found = inputValue.match(regex);

  // IF EMAIL IS VALID/REGEX MATCHES
  if (found) {
    successField.style.display = "block";
    emailField.style.display = "none";
    email.innerText = inputValue;
    email.style.fontWeight = "bolder";

    //TIMER TO REMOVE MESSAGE
    setTimeout(() => {
      input.style.border = "1px solid #9294a0";
      message.innerText = "";
    }, 2000);
  } else if (inputValue === "") {
    input.style.border = "1px solid #ff6257";
    message.innerText = "Valid Email Required";
    message.style.color = "#ff6257";
    input.style.backgroundColor = "#ff625754";

    //TIMER TO REMOVE MESSAGE
    setTimeout(() => {
      input.style.border = "1px solid #9294a0";
      message.innerText = "";
      input.style.backgroundColor = "transparent";
    }, 2000);
  } else {
    input.style.border = "1px solid #ff6257";
    message.innerText = "Valid Email Required";
    message.style.color = "#ff6257";
    input.style.backgroundColor = "#ff625754";
    input.style.color = "#ff62579a";

    //TIMER TO REMOVE MESSAGE
    setTimeout(() => {
      input.style.border = "1px solid #9294a0";
      message.innerText = "";
      input.style.backgroundColor = "transparent";
      input.style.color = "#000";
    }, 2000);
  }
});

// BUTTON TO DISMISS FIELD
button2.addEventListener("click", () => {
  emailField.style.display = "flex";
  successField.style.display = "none";
});
