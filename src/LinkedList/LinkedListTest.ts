import { LinkedList } from "./LinkedList";

const test = new LinkedList<number>();

test.addFirst(2);
test.addFirst(1);
test.addLast(3);
test.addLast(4);
console.log('新增测试: ' + test);

console.log('get 测试: ' 
    + `get(1): ${test.get(1)}, getFirst(): ${test.getFirst()}, getLast(): ${test.getLast()}`);

test.setValue(2, 4);
console.log('set 测试: setValue(2, 4)' + test);

console.log('contains 测试:');
console.log('contains(2): ' + test.contains(2));
console.log('contains(5): ' + test.contains(5));

console.log('移除测试: (初始状态)' + test);
test.removeElements(4);
console.log('removeElements(4): '+test);
test.removeFirst();
console.log('removeFirst(): '+test);
test.removeLast();
console.log('removeLast(): '+test);