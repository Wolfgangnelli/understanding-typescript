// UNKNOWN Type

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if(typeof userInput === 'string') {
    userName = userInput;
}

// NEVER Type

function generateError(message: string, code: number): never {
    throw {message, errorCode: code};  
}

generateError('And error occured!' , 500);

