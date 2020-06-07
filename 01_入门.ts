// type point = {a: number, b: number};
interface point {
  a: number;
  b: number;
}

function demo01(data: point) {
  return Math.sqrt(data.a ** 2 + data.b ** 2);
  console.log('123');
}

console.log(demo01({ a: 4, b: 5 }));
var a = 1;
