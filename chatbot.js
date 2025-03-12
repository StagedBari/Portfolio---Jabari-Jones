var botui = new BotUI('botui-app');

function askQuestion() {
    botui.message.add({
        content: 'Hi! How can I help you today? You can ask about my resume, projects, or skills.'
    }).then(function () {
        return botui.action.text({
            action: {
                placeholder: 'Type your question...'
            }
        });
    }).then(function (res) {
        var userInput = res.value.toLowerCase();

        if (userInput.includes('resume')) {
            botui.message.add({
                content: 'You can view my resume by clicking [here](resume.html).'
            }).then(askQuestion);
        } else if (userInput.includes('projects')) {
            botui.message.add({
                content: 'You can check out my projects on the Portfolio page.'
            }).then(askQuestion);
        } else if (userInput.includes('skills')) {
            botui.message.add({
                content: 'I am skilled in HTML, CSS, Java, Python, and Cisco networking.'
            }).then(askQuestion);
        } else {
            botui.message.add({
                content: 'I didn’t understand that. Try asking about my resume, projects, or skills.'
            }).then(askQuestion);
        }
    });
}

// Start the chatbot interaction
askQuestion();
