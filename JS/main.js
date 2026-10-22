function validationData() {
  const user = document.getElementById("user").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPass = document.getElementById("confirmPass").value;
  const result = document.getElementById("result");
  const submitBtn = document.getElementById("submitBtn");
  result.setAttribute("class", "text-center bg-danger fg-white p-3");
  submitBtn.classList.add("bg-danger");
  if (user === "" && email === "" && password === "" && confirmPass === "") {
    result.innerHTML = "Please fill all the fields";

    return false;
  } else if (user.length < 3 || user.length > 15) {
    result.innerHTML = "User name must be between 3 and 15 characters";
    return false;
  } else if (email.indexOf("@", 1) === -1 || email.indexOf(".com", 3) === -1) {
    result.innerHTML = "Please enter a valid email address";

    return false;
  } else if (password.length < 8) {
    result.innerHTML = "Password must be at least 8 characters long";

    return false;
  } else if (password !== confirmPass) {
    result.innerHTML = "Passwords do not match";
    return false;
  } else {
    //   console.log("I am in else");
    result.innerHTML = "Account created successfully";
    result.removeAttribute("class");
    result.setAttribute("class", "text-center bg-success fg-white p-3");
    submitBtn.classList.remove("bg-danger");
    submitBtn.classList.add("bg-success");
    return true;
  }
}
