function main() {
    const loginButton = document.querySelector(".login")
    const registerButton = document.querySelector(".register")

    loginButton.addEventListener("click", () => {
        const mainDivWithContent = document.querySelector(".form-proper")
        mainDivWithContent.innerHTML = ""
        loginButton.setAttribute("style", "background-color:#7cabca")
        registerButton.setAttribute("style", "background-color:#5c97bd")

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

    registerButton.addEventListener("click", () => {
        const mainDivWithContent = document.querySelector(".form-proper")
        mainDivWithContent.innerHTML = ""
        loginButton.setAttribute("style", "background-color:#5c97bd")
        registerButton.setAttribute("style", "background-color:#7cabca")

        const spanDiv = document.createElement("div")

        const studentCheck = document.createElement("span")
        const teacherCheck = document.createElement("span")

        spanDiv.classList.add("main-span-div")
        studentCheck.classList.add("student")
        teacherCheck.classList.add("teacher")

        studentCheck.textContent = "Студент"
        teacherCheck.textContent = "Учител"

        spanDiv.appendChild(studentCheck)
        spanDiv.appendChild(teacherCheck)

        mainDivWithContent.appendChild(spanDiv)

        studentCheck.addEventListener("click", () => {
            studentCheck.setAttribute("style", "box-shadow: 0px 0px 10px white inset")
            teacherCheck.setAttribute("style", "box-shadow: none")

            const studentEmail = document.createElement("input")
            const ersteBreakEl = document.createElement("br")
            const studentUsername = document.createElement("input")
            const zweiteBreakEl = document.createElement("br")
            const studentFirstName = document.createElement("input")
            const dritteBreakEl = document.createElement("br")
            const studentFamilyName = document.createElement("input")
            const vierteBreakEl = document.createElement("br")
            const studentPassword = document.createElement("input")
            const funfteBreakEl = document.createElement("br")
            
        })

        teacherCheck.addEventListener("click", () => {
            teacherCheck.setAttribute("style", "box-shadow: 0px 0px 10px white inset")
            studentCheck.setAttribute("style", "box-shadow: none")
        })
    })
}

main()