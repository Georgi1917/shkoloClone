function main() {
    const loginButton = document.querySelector(".login")
    const registerButton = document.querySelector(".register")

    loginButton.addEventListener("click", () => {
        const mainDivWithContent = document.querySelector(".form-proper")
        mainDivWithContent.innerHTML = ""

        const emailOrUsernameInputField = document.createElement("input")
        emailOrUsernameInputField.type = "text"
        emailOrUsernameInputField.placeholder = "Имейл или Потребителско име"

        const firstBreakEl = document.createElement("br")
        const secondBreakEl = document.createElement("br")

        const passwordField = document.createElement("input")
        passwordField.type = "text"
        passwordField.placeholder = "Парола"

        const buttonElement = document.createElement("button")
        buttonElement.type = "submit"
        buttonElement.classList = "enter-button"
        buttonElement.textContent = "Вход"

        mainDivWithContent.appendChild(emailOrUsernameInputField)
        mainDivWithContent.appendChild(firstBreakEl)
        mainDivWithContent.appendChild(passwordField)
        mainDivWithContent.appendChild(secondBreakEl)
        mainDivWithContent.appendChild(buttonElement)
    })
}

main()