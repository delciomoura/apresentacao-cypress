var randomCharacter = (() => {
    var length = 4,
        charset = "abcdefghijklmnopqrstuvwxyz0123456789",
        letterNumber = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        letterNumber += charset.charAt(Math.floor(Math.random() * n));
    }
    return letterNumber;
});

var letterNumber = randomCharacter();

var randomName = `Delcio_${letterNumber}`
var randomEmail = `delcio${letterNumber}@gmail.com`

export { randomName, randomEmail }
