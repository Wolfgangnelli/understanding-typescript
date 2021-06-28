// UNION TYPES

function combinee(input1: number | string, input2: number | string) {
    let res;
    if(typeof input1 === 'number' && typeof input2 === 'number') {
         res = input1 + input2;
    }  else {
        res = input1.toString() + input2.toString();
    }
    return res;
  }


  const combinedAges = combinee(30, 26);
console.log(combinedAges);

const combinedNames = combinee('Max', 'Anna');
console.log(combinedNames);
