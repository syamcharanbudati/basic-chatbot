function sendMessage() {


    // Get the input box

    let input =
        document.getElementById(
            "user-input"
        );


    // Get the message

    let message =
        input.value.trim();


    // If nothing was typed

    if (message === "") {

        return;

    }


    // Get chat box

    let chatBox =
        document.getElementById(
            "chat-box"
        );


    // Create user message

    let userMessage =
        document.createElement(
            "div"
        );


    userMessage.className =
        "message user-message";


    userMessage.innerHTML = `

        <div class="message-text">

            ${message}

        </div>

        <div class="avatar">

            👤

        </div>

    `;


    chatBox.appendChild(
        userMessage
    );


    // Get chatbot answer

    let answer =
        getBotAnswer(message);


    // Create bot message

    let botMessage =
        document.createElement(
            "div"
        );


    botMessage.className =
        "message bot-message";


    botMessage.innerHTML = `

        <div class="avatar">

            🤖

        </div>

        <div class="message-text">

            ${answer}

        </div>

    `;


    chatBox.appendChild(
        botMessage
    );


    // Clear input

    input.value = "";


    // Scroll to bottom

    chatBox.scrollTop =
        chatBox.scrollHeight;

}



function getBotAnswer(message) {


    // Convert to lowercase

    message =
        message.toLowerCase();



    // Hello

    if (
        message.includes("hello") ||
        message.includes("hi") ||
        message.includes("hey")
    ) {

        return "Hello! 👋 How can I help you?";

    }



    // Name

    if (
        message.includes("your name")
    ) {

        return "My name is AI Chatbot 🤖.";

    }



    // How are you

    if (
        message.includes("how are you")
    ) {

        return "I'm doing great! 😊 Thanks for asking.";

    }



    // Java

    if (
        message.includes("java")
    ) {

        return "Java is a popular object-oriented programming language used to build applications, web applications, Android applications and more.";

    }



    // Python

    if (
        message.includes("python")
    ) {

        return "Python is a high-level programming language known for its simple syntax. It is widely used in AI, machine learning, data science, web development and automation.";

    }



    // HTML

    if (
        message.includes("html")
    ) {

        return "HTML stands for HyperText Markup Language. It is used to create the structure of web pages.";

    }



    // CSS

    if (
        message.includes("css")
    ) {

        return "CSS stands for Cascading Style Sheets. It is used to design and style HTML web pages.";

    }



    // JavaScript

    if (
        message.includes("javascript") ||
        message.includes("js")
    ) {

        return "JavaScript is a programming language used to make websites interactive and dynamic.";

    }



    // OpenCV

    if (
        message.includes("opencv")
    ) {

        return "OpenCV is an open-source computer vision library commonly used for image processing, object detection and computer vision applications.";

    }



    // Thank you

    if (
        message.includes("thank")
    ) {

        return "You're welcome! 😊";

    }



    // Bye

    if (
        message.includes("bye")
    ) {

        return "Goodbye! 👋 See you again!";

    }



    // Default answer

    return "I'm still learning. 🤖 I don't have an answer for that question yet.";

}