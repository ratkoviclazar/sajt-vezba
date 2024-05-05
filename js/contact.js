function validateForm(e) {
  e.preventDefault();
  document.getElementById("correct").style.display = "none";
  document.querySelectorAll(".error").forEach((error) => {
    error.style.display = "none";
  });
  document.getElementById("name").style.border = "#576d94 1px solid";
  document.getElementById("name").style.backgroundColor = "transparent";
  document.getElementById("surname").style.border = "#576d94 1px solid";
  document.getElementById("surname").style.backgroundColor = "transparent";
  document.getElementById("email").style.border = "#576d94 1px solid";
  document.getElementById("email").style.backgroundColor = "transparent";
  document.getElementById("message").style.border = "#576d94 1px solid";
  document.getElementById("message").style.backgroundColor = "transparent";

  let wrong = false;
  let name1 = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  if (name1 === "") {
    document.getElementById("name").style.border = "2px solid red";
    document.getElementById("name").style.backgroundColor =
      "rgba(255, 0, 0, 0.2)";
    document.getElementById("name-error").style.display = "block";
    wrong = true;
  }
  if (name1.length < 3) {
    document.getElementById("name").style.border = "2px solid red";
    document.getElementById("name").style.backgroundColor =
      "rgba(255, 0, 0, 0.2)";
    document.getElementById("name-error1").style.display = "block";
    wrong = true;
  }
  if (name1 !== name1.replace(/[^a-zA-Z]/g, "")) {
    document.getElementById("name").style.border = "2px solid red";
    document.getElementById("name").style.backgroundColor =
      "rgba(255, 0, 0, 0.2)";
    document.getElementById("name-error2").style.display = "block";
    wrong = true;
  }
  if (surname === "") {
    document.getElementById("surname").style.border = "2px solid red";
    document.getElementById("surname").style.backgroundColor =
      "rgba(255, 0, 0, 0.2)";
    document.getElementById("surname-error2").style.display = "block";
    wrong = true;
  }
  if (surname.length < 3) {
    document.getElementById("surname").style.border = "2px solid red";
    document.getElementById("surname").style.backgroundColor =
      "rgba(255, 0, 0, 0.2)";
    document.getElementById("surname-error").style.display = "block";
    wrong = true;
  }
  if (surname !== surname.replace(/[^a-zA-Z]/g, "")) {
    document.getElementById("surname").style.border = "2px solid red";
    document.getElementById("surname").style.backgroundColor =
      "rgba(255, 0, 0, 0.2)";
    document.getElementById("surname-error1").style.display = "block";
    wrong = true;
  }
  if (email === "") {
    document.getElementById("email").style.border = "2px solid red";
    document.getElementById("email").style.backgroundColor =
      "rgba(255, 0, 0, 0.2)";
    document.getElementById("email-error").style.display = "block";
    wrong = true;
  }
  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    document.getElementById("email").style.border = "2px solid red";
    document.getElementById("email").style.backgroundColor =
      "rgba(255, 0, 0, 0.2)";
    document.getElementById("email-error1").style.display = "block";
    wrong = true;
  }
  if (message === "") {
    document.getElementById("message").style.border = "2px solid red";
    document.getElementById("message").style.backgroundColor =
      "rgba(255, 0, 0, 0.2)";
    document.getElementById("message-error").style.display = "block";
    wrong = true;
  }
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  if (wrong) {
    return false;
  }
  document.getElementById("correct").style.display = "block";
  return true;
}

const btn = document.querySelector(".btn-submit");
btn.addEventListener("click", validateForm);
