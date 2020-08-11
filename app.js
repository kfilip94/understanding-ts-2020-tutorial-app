var userInput;
var userName;
userInput = 5;
userInput = 'Kamil';
// this won't work
// userName = userInput;
if (typeof userInput === 'string') {
    // but this will work
    userName = userInput;
}
