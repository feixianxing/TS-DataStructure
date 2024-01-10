import { MyArray } from "./MyArray";

const test = new MyArray<number>(5);

// 新增测试
test.push(1);
test.push(2);
test.push(3);
test.push(4);
test.push(5);
console.log('测试代码: ' + test);

// 扩容测试
test.add(1, 6);
console.log('扩容测试: ' + test);

// 移除测试
test.remove(2);
console.log('移除测试: ' + test);

// 缩容测试
test.pop();
test.pop();
test.pop();
console.log('缩容测试: ' + test);

// 交换测试
test.swap(0, 1);
console.log('交换测试: ' + test);