// Get references to the DOM elements
const sendButton = document.getElementById('send-btn');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const optionsContainer = document.getElementById('options-container');
const chatButton = document.getElementById('chat-button');
const chatWindow = document.getElementById('chat-window');
const closeChatButton = document.getElementById('close-chat');

// Function to add a new message to the chat area
function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    messageDiv.innerHTML = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
}

// Function to handle bot's response based on user input
function botReply(userInput) {
    let botMessage = '';
    const userMessage = userInput.toLowerCase().trim();

    // Logic to generate bot's responses
    if (userMessage.includes('hello') || userMessage.includes('hi')) {
        botMessage = "Hello there! How can I assist you today?";
        showOptions(); // Show predefined options after greeting
    } else if (userMessage.includes('projects')) {
        botMessage = "I have several exciting projects! Check them out on my portfolio website.";
    } else if (userMessage.includes('contact')) {
        botMessage = "You can reach me at somafu@outlook.com or call +27 792 201 323.";
    } else if (userMessage.includes('name')) {
        botMessage = "My name is Ongako Somafu, nice to meet you!";
    } else if (userMessage.includes('thanks') || userMessage.includes('thank you')) {
        botMessage = "You're welcome! Feel free to ask anything else.";
    } else if (userMessage.includes('who are you')) {
        botMessage = "I am Ongako Somafu, a certified SAP Consultant and a problem solver.";
    } else if (userMessage.includes('bye') || userMessage.includes('goodbye')) {
        botMessage = "Goodbye! Have a great day!";
    } else {
        botMessage = "I'm sorry, I didn't quite understand that. Could you rephrase your question?";
    }

    setTimeout(() => {
        addMessage(botMessage, 'bot');
    }, 1500);
}

// Function to show predefined options for the user to click
function showOptions() {
    optionsContainer.innerHTML = ''; // Clear previous options

    const options = [
        { text: 'Tell me about your projects', value: 'projects' },
        { text: 'How can I contact you?', value: 'contact' },
        { text: 'What is your name?', value: 'name' },
        { text: 'Who are you?', value: 'who are you' },
        { text: 'Thank you', value: 'thanks' }
    ];

    options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option-btn');
        optionButton.innerText = option.text;
        optionButton.onclick = () => handleOptionClick(option.value);
        optionsContainer.appendChild(optionButton);
    });
}

// Function to handle the click event for predefined options
function handleOptionClick(optionValue) {
    chatInput.value = optionValue; // Set the input field to the option text
    sendButton.click(); // Simulate the send button click
}

// Event listener for the send button
sendButton.addEventListener('click', () => {
    const userInput = chatInput.value.trim();
    if (userInput !== '') {
        addMessage(userInput, 'user');
        chatInput.value = '';
        botReply(userInput);
    }
});

// Event listener for the Enter key press
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click(); // Trigger the send button click on Enter press
    }
});

// Initialize the chat window toggle and close button
chatButton.addEventListener('click', () => {
    chatWindow.style.display = 'block'; // Show the chat window
    chatButton.style.display = 'none'; // Hide the small chat button
});

closeChatButton.addEventListener('click', () => {
    chatWindow.style.display = 'none'; // Hide the chat window
    chatButton.style.display = 'block'; // Show the small chat button
});

// Initialize welcome message from the bot
setTimeout(() => {
    addMessage("Hi there! How can I assist you today?", "bot");
    showOptions(); // Show options after the initial greeting
}, 1000);
