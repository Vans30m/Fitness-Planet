const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

// ==========================================
// EmailJS Configuration
// ==========================================
const EMAILJS_PUBLIC_KEY = "fFhWqSrZ8yn7YNo-F";
const EMAILJS_SERVICE_ID = "service_hnomdjb";
const EMAILJS_TEMPLATE_ID = "template_ca6astl";

// Initialize EmailJS
if (typeof emailjs !== "undefined" && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

// Helper: retrieve registered users from localStorage
function getStoredUsers() {
    try {
        return JSON.parse(localStorage.getItem("fitness_users")) || [];
    } catch (e) {
        return [];
    }
}

// Helper: save registered users to localStorage
function saveStoredUser(user) {
    const users = getStoredUsers();
    users.push(user);
    localStorage.setItem("fitness_users", JSON.stringify(users));
}

// Handle User Authentication (Registration & Login)
document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("email-form");
    const loginForm = document.getElementById("login-form");

    // 1. REGISTRATION HANDLER
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const usernameInput = document.getElementById("user_name");
            const emailInput = document.getElementById("user_email");
            const passwordInput = document.getElementById("user_password");
            const submitBtn = registerForm.querySelector('button[type="submit"]');

            const userName = usernameInput ? usernameInput.value.trim() : "";
            const userEmail = emailInput ? emailInput.value.trim() : "";
            const userPassword = passwordInput ? passwordInput.value : "";

            if (!userName) {
                alert("Please enter a username.");
                return;
            }

            if (!userEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (!userPassword || userPassword.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }

            // Check if user already exists
            const existingUsers = getStoredUsers();
            const emailExists = existingUsers.some(u => u.email.toLowerCase() === userEmail.toLowerCase());
            const usernameExists = existingUsers.some(u => u.username.toLowerCase() === userName.toLowerCase());

            if (emailExists) {
                alert("An account with this email already exists. Please login instead.");
                return;
            }
            if (usernameExists) {
                alert("This username is already taken. Please choose another one.");
                return;
            }

            const originalBtnText = submitBtn ? submitBtn.innerText : "Register";
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerText = "Registering...";
            }

            // Save user to localStorage
            saveStoredUser({
                username: userName,
                email: userEmail,
                password: userPassword,
                registeredAt: new Date().toISOString()
            });

            // Set current logged-in user session
            localStorage.setItem("currentUser", JSON.stringify({ username: userName, email: userEmail }));

            // Trigger EmailJS welcome email
            const templateParams = {
                user_name: userName,
                name: userName,
                to_name: userName,
                to_email: userEmail,
                email: userEmail,
                reply_to: "pfitness972@gmail.com",
                message: "Welcome to Fitness Planet! Your account has been registered successfully."
            };

            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
                .then(function(response) {
                    console.log("EmailJS SUCCESS!", response.status, response.text);
                    alert(`Welcome ${userName}! Registered successfully and welcome email sent.`);
                    registerForm.reset();
                    if (typeof updateNavbarAuthState === 'function') updateNavbarAuthState();
                    window.location.href = "index.html";
                })
                .catch(function(error) {
                    console.error("EmailJS error:", error);
                    // Registration succeeded in localStorage even if EmailJS Gmail grant expired
                    alert(`Registered successfully, ${userName}! (Welcome email could not be delivered: Gmail account in EmailJS needs to be reconnected).`);
                    registerForm.reset();
                    if (typeof updateNavbarAuthState === 'function') updateNavbarAuthState();
                    window.location.href = "index.html";
                })
                .finally(function() {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerText = originalBtnText;
                    }
                });
        });
    }

    // 2. LOGIN HANDLER
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const usernameInput = document.getElementById("login_username");
            const passwordInput = document.getElementById("login_password");

            const enteredUsername = usernameInput ? usernameInput.value.trim() : "";
            const enteredPassword = passwordInput ? passwordInput.value : "";

            const users = getStoredUsers();
            const matchedUser = users.find(u => 
                (u.username.toLowerCase() === enteredUsername.toLowerCase() || u.email.toLowerCase() === enteredUsername.toLowerCase()) 
                && u.password === enteredPassword
            );

            if (matchedUser) {
                localStorage.setItem("currentUser", JSON.stringify({ username: matchedUser.username, email: matchedUser.email }));
                alert(`Welcome back, ${matchedUser.username}! Login successful.`);
                window.location.href = "index.html";
            } else {
                alert("Invalid username or password. Please try again or create an account.");
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