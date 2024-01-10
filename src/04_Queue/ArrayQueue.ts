import { MyArray } from "../01_Array/MyArray";
import { type Queue } from "./Queue";

export class ArrayQueue<T> implements Queue<T>{
    private data: MyArray<T>;

    constructor(capacity: number = 10){
        this.data = new MyArray(capacity);
    }

    getSize(): number {
        return this.data.getSize();
    }

    isEmpty(): boolean {
        return this.data.isEmpty();
    }

    enqueue(e: T): void {
        this.data.push(e);
    }

    dequeue(): T {
        if(this.isEmpty()){
            throw new Error('get failed. queue is empty.');
        }
        return this.data.shift();
    }

    getFront(): T {
        if(this.isEmpty()){
            throw new Error('get failed. queue is empty.');
        }
        return this.data.getFirst();
    }

    toString(): string{
        let res = '\nArrayQueue: <front>';
        res += '[';
        for(let i=0; i<this.getSize(); i++){
            res += `${this.data.get(i)}`;
            if(i!==this.getSize()-1){
                res += ', ';
            }
        }
        res += ']';
        return res;
    }
}
