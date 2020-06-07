// 基础类型 null，undefined, sysmol, boolean, void, number, string
const count: number = 123;
const str: string = '123';

// 对象类型
class Person {}

const teacher: {
  name: string;
  age: number;
} = {
  name: 'michael',
  age: 18,
};

const numbers: number[] = [1, 2, 3];

const michael: Person = new Person();

const getTotal: (str: string) => number = (str) => {
  return parseInt(str);
};
console.log(getTotal('12'));
