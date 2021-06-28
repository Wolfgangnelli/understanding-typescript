function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  /*   if(typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error("Incorrent input!");
    } */
    let res = n1+n2;
    if(showResult) {
        console.log(phrase + res);
    } else {
        return res;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);

