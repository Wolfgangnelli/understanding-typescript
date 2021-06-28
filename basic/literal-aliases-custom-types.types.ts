// TYPE ALIASES / CUSTOM TYPES (reusable types)
type NumStr = number | string;
type ConversionDesc = 'as-number' | 'as-text';
type User = { name: string; age: number; }
type User2 = {name: string} | string;
// LITERAL TYPES (is an union types with literals, is more specific types)

function combine(input1: NumStr, input2: NumStr, resultConversion: ConversionDesc) {
    let res;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
         res = +input1 + +input2;
    }  else {
        res = input1.toString() + input2.toString();
    }
    return res;
/*     if(resultConversion === 'as-number') {
        return +res;
    } else {
        return res.toString();
    } */
  }

  function greet (user: User) {
      return `Hi, I am ${user.name} and i have ${user.age}`;
    }
  const greeting = greet({name: 'Marcus', age: 42});
  console.log(greeting);


  const combinedAgess = combine(30, 26, 'as-number');
  console.log(combinedAgess);
  
  const combinedStringAges = combine('30', '26', 'as-number');
  console.log(combinedStringAges);
  

  const combinedNamess = combine('Max', 'Anna', 'as-text');
  console.log(combinedNamess);
  