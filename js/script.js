var images = ['https://cdn.discordapp.com/attachments/911919436057935882/922046718734905354/unknown.png'];

$('#container').append('<style>#container, .acceptContainer:before, .logoContainer:before {background: url(' + images[Math.floor(Math.random() * images.length)] + ') center fixed }');
