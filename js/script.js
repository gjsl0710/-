var images = ['https://cdn.discordapp.com/attachments/911919436057935882/912941034286235690/KakaoTalk_20210724_164006437_01.gif'];

$('#container').append('<style>#container, .acceptContainer:before, .logoContainer:before {background: url(' + images[Math.floor(Math.random() * images.length)] + ') center fixed }');
