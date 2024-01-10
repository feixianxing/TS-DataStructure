import { ArrayStack } from "./ArrayStack";
import { LinkedListStack } from "./LinkedListStack";

const test = new ArrayStack<number>();
// const test = new LinkedListStack<number>();

test.push(1);
test.push(2);
test.push(3);

console.log('push测试: '+test);

test.pop();
console.log('pop测试: '+test);

console.log('peek测试: '+test.peek());
