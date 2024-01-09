export class Node<T>{
    // 一个链表节点包含本身的值和指向下一个节点的引用
    public value: T | undefined;
    public next: Node<T> | null;

    // 构造函数重载：只初始化数值，或者初始化数值和下一节点引用，或者只传一个undefined作为链表头部
    constructor(value: T);
    constructor(value: T, next: Node<T>);
    constructor(value: undefined);
    constructor(value?: T, next?: Node<T>){
        this.value = value;
        if(next===undefined){
            this.next = null;
        }else{
            this.next = next;
        }
    }
}

export class LinkedList<T>{
    public root: Node<T> | null = null;
    public length: number = 0; 

    constructor(){
        this.root = new Node<T>(undefined);
        
    }
}