document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const errorMessage = document.querySelector(".email-error-message");
    const notifyButton = document.querySelector(".notify");

    emailInput.addEventListener("blur", () => {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            emailInput.style.border = "2px solid hsl(354, 79%, 64%)";
            errorMessage.style.display = "block";
        }
    });

    emailInput.addEventListener("input", () => {
        emailInput.style.border = "1px solid hsl(223, 100%, 88%)";
        errorMessage.style.display = "none";
    });

    notifyButton.addEventListener("click", (e) => {
        e.preventDefault();
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            emailInput.style.border = "2px solid hsl(354, 79%, 64%)";
            errorMessage.style.display = "block";
        } else {
            emailInput.value = "";
        }
    });
});