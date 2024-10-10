let model;
let botResponses = {
    "default": [
        "Hello! How can I help you today?",
        "I'm a simple chatbot.",
        "Tell me more about that.",
        "I'm here to assist you.",
        "Can you please elaborate?"
    ],
    "appointment": "You can book an appointment by emailing jadnehmeh@gmail.com.",
    "availability": "Our available slots are from 9 AM to 5 PM, Monday to Friday.",
    "filmmaking": [
        "Filmmaking involves several stages including development, pre-production, production, post-production, and distribution.",
        "A director is responsible for overseeing the creative aspects of a film.",
        "The cinematographer, or director of photography, is responsible for capturing the visual elements of the film."
    ],
    "company": {
        "purpose": "To produce high-quality films for various audiences.",
        "values": "Creativity, collaboration, innovation, and storytelling.",
        "audience": "Film enthusiasts, moviegoers, and potential investors."
    },
    "products": {
        "films": "We produce a variety of genres including drama, comedy, action, and documentary.",
        "services": "Besides film production, we offer scriptwriting, casting, editing, and distribution services.",
        "quality": "We ensure the quality of our films through a rigorous production process and quality control measures."
    },
    "clients": {
        "contact": "Clients can get in touch with us via email at contact@filmmaking.com, phone at (123) 456-7890, or through our website.",
        "phone": "You can contact us at our phone at (123) 456-7890.",
        "timeline": "The typical project timeline includes stages such as development, pre-production, production, post-production, and distribution, each with its own estimated timeframe.",
        "collaboration": "We involve clients in the creative process through regular updates, feedback sessions, and collaborative decision-making."
    },
    "culture": {
        "unique": "Our company is unique due to our innovative approach and commitment to storytelling.",
        "environment": "We foster a creative and collaborative work environment through our company culture and values.",
        "growth": "Our plans for future growth and expansion include exploring new markets and investing in cutting-edge technology."
    }
};

async function loadModel() {
    model = await use.load();
    document.getElementById('chat-container').innerHTML += '<div class="chat-message bot-message">Bot: Hello! How can I help you today?</div>';
}

function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    if (userMessage.includes("book an appointment")) {
        return botResponses["appointment"];
    } else if (userMessage.includes("availability") || userMessage.includes("available")) {
        return botResponses["availability"];
    } else if (userMessage.includes("filmmaking") || userMessage.includes("film")) {
        return botResponses["filmmaking"][Math.floor(Math.random() * botResponses["filmmaking"].length)];
    } else if (userMessage.includes("purpose")) {
        return botResponses["company"]["purpose"];
    } else if (userMessage.includes("core values") || userMessage.includes("values")) {
        return botResponses["company"]["values"];
    } else if (userMessage.includes("target audience") || userMessage.includes("audience")) {
        return botResponses["company"]["audience"];
    } else if (userMessage.includes("kind of films") || userMessage.includes("films")) {
        return botResponses["products"]["films"];
    } else if (userMessage.includes("additional services") || userMessage.includes("services")) {
        return botResponses["products"]["services"];
    } else if (userMessage.includes("quality of your films") || userMessage.includes("quality")) {
        return botResponses["products"]["quality"];
    } else if (userMessage.includes("phone number") || userMessage.includes("phone")) {
        return botResponses["clients"]["phone"];
    } else if (userMessage.includes("get in touch") || userMessage.includes("contact")) {
        return botResponses["clients"]["contact"];
    } else if (userMessage.includes("project timeline") || userMessage.includes("timeline")) {
        return botResponses["clients"]["timeline"];
    } else if (userMessage.includes("client collaboration") || userMessage.includes("collaboration")) {
        return botResponses["clients"]["collaboration"];
    } else if (userMessage.includes("company unique") || userMessage.includes("unique")) {
        return botResponses["culture"]["unique"];
    } else if (userMessage.includes("work environment") || userMessage.includes("environment")) {
        return botResponses["culture"]["environment"];
    } else if (userMessage.includes("future growth") || userMessage.includes("growth")) {
        return botResponses["culture"]["growth"];
    }
    // For simplicity, we use a random response from the default list
    return botResponses["default"][Math.floor(Math.random() * botResponses["default"].length)];
}

async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    const chatContainer = document.getElementById('chat-container');
    chatContainer.innerHTML += `<div class="chat-message user-message">You: ${userInput}</div>`;

    const botResponse = getBotResponse(userInput);
    chatContainer.innerHTML += `<div class="chat-message bot-message">Bot: ${botResponse}</div>`;

    document.getElementById('user-input').value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

document.getElementById('chat-button').addEventListener('click', function() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.style.display = 'flex';
    document.getElementById('user-input').focus();
});

document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('chat-window').style.display = 'none';
});

loadModel();