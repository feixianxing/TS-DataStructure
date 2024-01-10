import { ArrayQueue } from "./ArrayQueue";
import { LinkedListQueue } from "./LinkedListQueue";
import { LoopQueue } from "./LoopQueue";

// const test = new ArrayQueue<number>();
// const test = new LinkedListQueue<number>();
const test = new LoopQueue<number>();

console.log('isEmpty测试: '+test.isEmpty());

for(let i=1; i<= 15; i++){
    test.enqueue(i);
}
console.log('入队测试: '+test);

console.log('isEmpty测试: '+test.isEmpty());

test.dequeue();
console.log('出队测试: '+test);

console.log('getFront测试: '+test.getFront());
