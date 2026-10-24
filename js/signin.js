const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

// ==========================================
// EmailJS Configuration
// Replace these with your actual EmailJS credentials from https://dashboard.emailjs.com/
// ==========================================
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";       // e.g. "AbCdEf123456"
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";       // e.g. "service_fitness"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";     // e.g. "template_welcome"

// Initialize EmailJS
if (typeof emailjs !== "undefined" && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

// Handle New User Registration Form Submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("email-form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const usernameInput = document.getElementById("user_name");
            const emailInput = document.getElementById("user_email");
            const submitBtn = form.querySelector('button[type="submit"]');

            const userName = usernameInput ? usernameInput.value.trim() : "Fitness Enthusiast";
            const userEmail = emailInput ? emailInput.value.trim() : "";

            if (!userEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
                alert("Please enter a valid email address.");
                return;
            }

            const originalBtnText = submitBtn ? submitBtn.innerText : "Register";
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerText = "Registering...";
            }

            // Check if EmailJS credentials have been configured
            if (typeof emailjs !== "undefined" && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
                const templateParams = {
                    user_name: userName,
                    to_name: userName,
                    to_email: userEmail,
                    reply_to: "fitnessplanet568@gmail.com",
                    message: "Welcome to Fitness Planet! Your account has been registered successfully."
                };

                emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
                    .then(function(response) {
                        console.log("EmailJS SUCCESS!", response.status, response.text);
                        alert(`Welcome ${userName}! Registered successfully and welcome email sent.`);
                        form.reset();
                    })
                    .catch(function(error) {
                        console.error("EmailJS FAILED...", error);
                        alert("Registered successfully! (Note: Could not send email via EmailJS: " + (error.text || error.message || "Please check credentials") + ")");
                    })
                    .finally(function() {
                        if (submitBtn) {
                            submitBtn.disabled = false;
                            submitBtn.innerText = originalBtnText;
                        }
                    });
            } else {
                // Fallback to local Node server if EmailJS keys haven't been replaced yet
                fetch('http://localhost:3000/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ user_name: userName, to_email: userEmail })
                })
                .then(response => {
                    if (response.ok) {
                        alert("Registered Successfully! Welcome email sent.");
                        form.reset();
                    } else {
                        alert("Registered successfully, but server email failed.");
                    }
                })
                .catch(() => {
                    alert("Registered! (EmailJS is ready: please fill your EmailJS keys in js/signin.js to send emails directly).");
                })
                .finally(() => {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerText = originalBtnText;
                    }
                });
            }
        });
    }
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Interactive Password Visibility Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const toggleIcons = document.querySelectorAll('.toggle-password');
    toggleIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const inputBox = this.closest('.input-box');
            if (!inputBox) return;
            const passwordInput = inputBox.querySelector('input[type="password"], input[type="text"]');
            if (!passwordInput) return;

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                this.classList.remove('bx-show');
                this.classList.add('bx-hide');
            } else {
                passwordInput.type = 'password';
                this.classList.remove('bx-hide');
                this.classList.add('bx-show');
            }
        });
    });
});