import { type Stack } from './Stack';
import { MyArray } from '../01_Array/MyArray'

export class ArrayStack<T> implements Stack<T>{
    private data: MyArray<T>;

    constructor(capacity: number = 10){
        this.data = new MyArray<T>(capacity);
    }

    /**
     * 查询栈大小
    */
    getSize(): number{
        return this.data.getSize();
    }

    /**
     * 是否为空
    */
    isEmpty(): boolean{
        return this.data.isEmpty();
    }

    /**
     * 推入新元素
    */
    push(e: T): void{
        this.data.push(e);
    }

    /**
     * 弹出栈顶元素并返回
    */
    pop(): T{
        if(this.isEmpty()){
            throw new Error('pop failed. stack is empty.');
        }
        return this.data.pop();
    }

    /**
     * 查看栈顶元素
    */
    peek(): T{
        return this.data.getLast();
    }

    /**
     * 格式化
    */
    toString(): string{
        let res = '\n ArrayStack [';
        
        for(let i=0; i<this.getSize(); i++){
            res += `${this.data.get(i)}`;
            if(i!==this.getSize()-1){
                res += ', ';
            }
        }

        res += '] <top>\n';

        return res;
    }
}