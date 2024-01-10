import { type Queue } from './Queue';

export class LoopQueue<T> implements Queue<T>{
    private data: Array<T|null>;
    private front: number;
    private rear: number;
    private size: number;

    constructor(capacity: number = 10){
        this.data = new Array<T>(capacity+1);
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }

    private resize(newCapacity: number): void{
        let newData = new Array<T|null>(newCapacity+1);

        for(let i=0; i<this.size; i++){
            newData[i] = this.data[(i+this.front)%this.data.length];
        }

        this.data = newData;
        this.front = 0;
        this.rear = this.size;
    }

    getCapacity(): number{
        return this.data.length - 1;
    }

    getSize(): number{
        return this.size;
    }

    isEmpty(): boolean {
        return this.front === this.rear;
    }

    enqueue(e: T): void {
        // 扩容
        if((this.rear+1)%this.data.length === this.front){
            this.resize(this.getCapacity()*2);
        }
        this.data[this.rear] = e;
        this.rear = (this.rear+1)%this.data.length;
        this.size++;
    }

    dequeue(): T {
        if(this.isEmpty()){
            throw new Error('dequeue failed. queue is empty.');
        }
        let res = this.data[this.front] as T;
        // 这里不要将队头设置为null，而是直接控制front的位置，
        // 使其对外不可见. 
        this.front = (this.front+1)%this.data.length;
        this.size--;

        // 缩容
        if(this.size === this.getCapacity() >> 2
        && this.getCapacity()>>1!==0){
            this.resize(this.getCapacity() >> 1);
        }

        return res;
    }

    getFront(): T {
        return this.data[this.front] as T;
    }

    toString(): string{
        let res = '\n LoopQueue:';
        res += '<front>[';
        for(let i=0; i<this.size; i++){
            res += `${this.data[(i+this.front)%this.data.length]}`;
            if(i!==this.size-1){
                res += ', ';
            }
        }
        res += ']<rear>'
        return res;
    }
}