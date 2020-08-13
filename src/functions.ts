function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResults(num: number): void {
  console.log('Result: ',num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResults(add(2, 4));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResults;

console.log(combineValues(8,8));

console.log(addAndHandle(8,8, (result) => console.log('Result from callback: ',result)));