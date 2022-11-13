let x = 1;

let getStart = (inputNumber) => {
  let bin = (x >>> 0).toString(2);
  let makeArray = bin.split('');
  let reminaArray = [];
  let reminaArrayLength = 32 - makeArray.length;
  reminaArray.length = reminaArrayLength;
  reminaArray.fill(0);
  let finalBinary = [...reminaArray, ...makeArray];
  let makeString = finalBinary.toString().replaceAll(',', '');
  // make 0 -> @
  makeString = makeString.replaceAll('0', '@');
  // make 1 -> 0
  makeString = makeString.replaceAll('1', '0');
  // make @ -> 1
  makeString = makeString.replaceAll('@', '1');
  makeString = parseInt(makeString, 2);
  return makeString;
};
console.log(getStart(x));
