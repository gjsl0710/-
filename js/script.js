var images = ['https://cdn.discordapp.com/attachments/911919436057935882/912944201560379452/88775396_p0.png', 'https://cdn.discordapp.com/attachments/911919436057935882/912944201874931742/shark_2_1.png'];

$('#container').append('<style>#container, .acceptContainer:before, .logoContainer:before {background: url(' + images[Math.floor(Math.random() * images.length)] + ') center fixed }');
