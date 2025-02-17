var botui = new BotUI('botui-app');

botui.message.add({
    content: 'Hi! How can I help you today? Feel free to ask about my resume or portfolio.'
}).then(function () {
    return botui.action.text({
        action: {
            placeholder: 'Ask me about my resume or projects!'
        }
    });
}).then(function (res) {
    if (res.value.toLowerCase().includes('resume')) {
        botui.message.add({
            content: 'You can view my resume by clicking the "Resume" link above.'
        });
    } else if (res.value.toLowerCase().includes('projects')) {
        botui.message.add({
            content: 'You can view my projects on my Portfolio page.'
        });
    } else {
        botui.message.add({
            content: 'Sorry, I didn’t quite understand that. Can you ask something else?'
        });
    }
});
