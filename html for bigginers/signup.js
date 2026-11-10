const signupForm = document.querySelector("form");

function claimFreeTrial(event) {
    event.preventDefault();
    alert("Your fre trial has been claimed!");
}
0
signupForm.addEventListener("submit", claimFreeTrial);