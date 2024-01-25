let generated_OTP;

function displayElement(elementId, displayStyle) {
  const element = document.getElementById(elementId);
  element.style.display = displayStyle;
}

function generateOTP() {
  const phone = document.querySelector("#number");
  const phoneNumber = phone.value;
  if (phoneNumber.length === 10) {
    displayElement("loader", "flex");

    const OTP = Math.floor(1000 + Math.random() * 9000);
    generated_OTP = OTP;

    setTimeout(() => {
      displayElement("loader", "none");
      displayElement("form", "none");
      displayElement("verify", "flex");

      if (generated_OTP) {
        displayElement("show", "flex");
        document.getElementById(
          "show"
        ).innerText = `Otp is 😊 - ${generated_OTP}`;
      }
    }, 3000);
  } else {
    // alert("Invalid phone! 😔");
    showToast("Invalid phone! 😔", "invalid");
  }
}

function verifyOTP() {
  const enteredOtp = document.getElementById("enteredOTP").value;

  if (generated_OTP == enteredOtp) {
    displayElement("loader", "flex");
    setTimeout(() => {
      displayElement("loader", "none");
      displayElement("verify", "none");
      displayElement("show", "none");
      displayElement("welcome", "flex");
      displayElement("image", "none");

      // alert("OTP verified ! 😊");
      showToast("OTP verified ! 😊", "success");
    }, 3000);
  } else {
    showToast("Invalid OTP !! 😔", "error");
  }
}

// *** toast ****

const toastBox = document.getElementById("toastBox");

function showToast(message, type) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = message;

  switch (type) {
    case "success":
      toast.classList.add("Success");
      toast.innerHTML = message;
      break;

    case "error":
      toast.classList.add("Error");
      toast.innerHTML = message;
      break;

    case "invalid":
      toast.classList.add("Invalid");
      toast.innerHTML = message;
      break;

    default:
      console.log("some issue....");
      break;
  }

  toastBox.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 5000);
}
