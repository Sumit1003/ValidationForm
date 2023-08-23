function validation() {
    const uname = document.getElementById("Username").value;
    const upass = document.getElementById("password").value;

    if (uname === "") {
      document.getElementById("UsenameError").innerHTML =
        "Please enter your name";
      return false;
    } else if (upass === "") {
      document.getElementById("PasswordError").innerHTML =
        "Please enter your password";
      return false;
    }

    alert("Form submitted successfully!");
    window.location.href = "thankyou.html";
    return false;
  }