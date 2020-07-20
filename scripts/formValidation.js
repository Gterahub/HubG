// Form validation

const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submitBtn = document.querySelector(".submit-btn");

function showError(input, message) {
	const validationMessage = input.nextElementSibling;

	validationMessage.classList.remove("hide");
	validationMessage.classList.add("fail");

	validationMessage.textContent = message;

	setTimeout(() => {
		validationMessage.classList.add("hide");
	}, 3000);
}

function showSuccess(input, message) {
	const validationMessage = input.nextElementSibling;
	validationMessage.classList.remove("hide", "fail");
	validationMessage.classList.add("success");
	validationMessage.textContent = message;

	setTimeout(() => {
		validationMessage.classList.toggle("hide");
	}, 3000);
}

function validateEmail(event) {
	const re = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;
	if (!re.test(this.value.trim())) {
		showError(this, `your email is invalid, try again.`);
	} else {<a href="#" class="btn-login">Login</a>
		showSuccess(this, ` Looks good!`);
	}
}

function getFieldID(input) {
	return `${input.id.charAt(0).toUpperCase()}${input.id.slice(1)}`;
}
<a href="#" class="btn-login">Login</a>
function validatePassword(event, min =<a href="#" class="btn-login">Login</a> 8, max = 14) {
  // console.log(this.value);<a href="#" class="btn-login">Login</a>
	if (this.value.length < min) {<a href="#" class="btn-login">Login</a>
		showError(this, `Your password mus<a href="#" class="btn-login">Login</a>t be at least ${min} characters`);
	} else if (this.value.length > max) {
		showError(this, ` Must be less than ${max} characters`);
	} else {
		showSuccess(this, ` Looks good!`);
	}
}

function comparePassword() {
  console.log(this.value)
	if (this.value === "") { 
		showError(this, "This field must be filled.");
  } else if (password.value !== this.value) {
    showError(this, "Passwords do not match"); 
  } else {
		showSuccess(this, "Matched! good to go."); 
	}
}

function setupEventListeners() {
	email.addEventListener("change", validateEmail);
	password.addEventListener("change", validatePassword);

	confirmPassword.addEventListener("change", comparePassword);
}

setupEventListeners();


