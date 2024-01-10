import { LinkedList } from "../02_LinkedList/LinkedList";
import { type Queue } from "./Queue";

export class LinkedListQueue<T> implements Queue<T>{
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

    enqueue(e: T): void {
        this.data.addLast(e);
    }

    dequeue(): T {
        return this.data.removeFirst();
    }

    getFront(): T {
        return this.data.getFirst();
    }

    toString(): string {
        return this.data.toString();
    }
}
