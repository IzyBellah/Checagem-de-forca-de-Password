function checkPassword() {
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    let inputField = document.getElementById("password");

    let strength = getPasswordStrength(password);

    if (strength === "fraca") {
        message.textContent = "Senha fraca! Gerando nova senha...";
        message.style.color = "red";
        inputField.className = "weak";
        setTimeout(() => {
            let newPassword = generateStrongPassword();
            document.getElementById("password").value = newPassword;
            message.textContent = "Nova senha gerada!";
            message.style.color = "green";
            inputField.className = "strong";
        }, 1000);
    } else if (strength === "média") {
        message.textContent = "Senha mediana!";
        message.style.color = "yellow";
        inputField.className = "medium";
    } else {
        message.textContent = "Senha forte!";
        message.style.color = "green";
        inputField.className = "strong";
    }
}

function getPasswordStrength(password) {
    if (password.length < 6 || /^[a-zA-Z]+$/.test(password) || /^\d+$/.test(password)) {
        return "fraca";
    } else if (password.length >= 6 && /\d/.test(password) && /[a-zA-Z]/.test(password)) {
        return "média";
    } else if (password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password) && /[^a-zA-Z0-9]/.test(password)) {
        return "forte";
    }
}

function generateStrongPassword() {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 10; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}