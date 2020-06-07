// function add(first: number, second: number): number {
//   return first + second;
// }

// console.log(add(11, 22));

function sayHello(): void {
  console.log('hello michael');
}

sayHello();

function errorEmitter(): never {
  throw new Error('我是向上抛出的错误信息');
}
// errorEmitter();

// 函数中的参数使用解构赋值
function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}
console.log(add({ first: 11, second: 22 }));

// 函数中的参数使用解构赋值 只有一个参数
function add1({ first }: { first: number }): number {
  return first;
}
console.log(add1({ first: 11 }));
