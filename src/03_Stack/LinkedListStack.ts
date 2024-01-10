import { LinkedList } from "../02_LinkedList/LinkedList";
import { type Stack } from './Stack';

export class LinkedListStack<T> implements Stack<T>{
    private data: LinkedList<T>;

    constructor(){
        this.data = new LinkedList();
    }

    getSize(): number {
        return this.data.getSize();
    }

    isEmpty(): boolean {
        return this.data.isEmpty();
    }

    push(e: T): void {
        this.data.addLast(e);
    }

    pop(): T{
        return this.data.removeLast();
    }

    peek(): T{
        return this.data.getLast();
    }

    toString(): string {
        return this.data.toString();
    }
}