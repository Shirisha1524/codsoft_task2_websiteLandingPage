// show a popup when website loads
window.onload = function () {
    console.log("Welcome to Blossora!");
};

// simple menu toggle (optional)
let toggler = document.getElementById("toggler");
let navbar = document.querySelector(".navbar");

toggler.addEventListener("change", function () {
    if (this.checked) {
        navbar.style.left = "0";
    } else {
        navbar.style.left = "-100%";
    }
});
// Select the contact form
const form = document.querySelector("form");

// Add submit event listener
form.addEventListener("submit", function (e) {
    // Get input values
    const name = form.querySelector('input[placeholder="name"]').value.trim();
    const email = form.querySelector('input[placeholder="email"]').value.trim();
    const number = form.querySelector('input[placeholder="number"]').value.trim();

    // Validation
    if (name === "" || email === "" || number === "") {
        e.preventDefault(); // Prevent form submission
        alert("Please fill in Name, Email, and Number fields.");
        return false;
    }

    // Optional: Basic email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        e.preventDefault();
        alert("Please enter a valid email address.");
        return false;
    }

    // Optional: Basic number check
    const numberPattern = /^[0-9]{10}$/; // Assuming 10-digit number
    if (!numberPattern.test(number)) {
        e.preventDefault();
        alert("Please enter a valid 10-digit number.");
        return false;
    }

    // Form is valid
    alert("Thank you! Your message has been sent.");
});
