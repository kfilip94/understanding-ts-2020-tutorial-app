let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Kamil';

// this won't work
// userName = userInput;

if (typeof userInput === 'string') {
  // but this will work
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError('An error occurred!', 500);