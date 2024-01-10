export class Node<T>{
    public value: T | undefined;
    public next: Node<T> | null;
    constructor(value?: T, next?: Node<T> | null) {
        this.value = value;
        this.next = next ?? null;
    }
    toString(): string {
        return String(this.value);
    }
}

export class LinkedList<T>{
    /**
     * 虚拟头节点，不存储数据，只记录next
    */
    private head: Node<T>;
    private size: number;

    constructor() {
        this.head = new Node();
        this.size = 0;
    }

    getSize(): number {
        return this.size;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    /**
     * 在指定位置插入一个新元素
    */
    add(index: number, e: T): void {
        if(index<0 || index>this.size){
            throw new Error('add failed. index was out of range.');
        }
        let prev = this.head;
        for(let i=0; i<index; i++){
            if(prev.next!==null){
                prev = prev.next;
            }else{
                break;
            }
        }

        let node = new Node<T>(e);
        node.next = prev.next;
        prev.next = node;

        this.size++;
    }

    /**
     * 在链表头部添加元素
    */
    addFirst(e: T): void{
        this.add(0, e);
    }

    /**
     * 在链表尾部添加元素
    */
    addLast(e: T): void{
        this.add(this.size, e);
    }

    /**
     * 在指定索引处移除一个元素，返回该元素
    */
    remove(index: number): T{
        if(index<0 || index>=this.size){
            throw new Error('remove failed. index was out of range.');
        }

        // 指针移动到目标位置的前一个节点处
        let prev = this.head;
        for(let i=0; i<index; i++){
            if(prev.next!==null){
                prev = prev.next;
            }else{
                throw new Error('Null Pointer Error');
            }
        }

        // 目标节点的前节点直接指向后节点，实现将目标节点从链表中剔除
        let targetNode = prev.next as Node<T>;
        prev.next = targetNode.next;
        // 目标节点的next清空，避免可能的内存泄漏
        targetNode.next = null;
        this.size--;

        return targetNode.value as T;
    }

    /**
     * 移除首个元素
    */
    removeFirst(): T{
        return this.remove(0);
    }

    /**
     * 移除最后一个元素
    */
    removeLast(): T{
        return this.remove(this.size-1);
    }

    /**
     * 移除指定的元素
    */
    removeElements(e: T): void{
        let prev = this.head;
        while(prev.next !== null){
            if(prev.next.value === e){
                let target = prev.next;
                prev.next = target.next;
                target.next = null;
                this.size--;
            }else{
                prev = prev.next;
            }
        }
    }

    /**
     * 更改目标位置的节点
    */
    setValue(index: number, e: T): void{
        if(index<0 || index>this.size){
            throw new Error('remove failed. index was out of range.');
        }

        // 指针移动到目标位置的前一个节点处
        let prev = this.head;
        for(let i=0; i<index; i++){
            if(prev.next!==null){
                prev = prev.next;
            }else{
                break;
            }
        }

        prev.next!.value = e;
    }

    /**
     * 获取指定索引位置的元素
    */
    get(index: number): T{
        if(index<0 || index>this.size){
            throw new Error('get failed. index was out of range.');
        }

        let curr = this.head.next;
        for(let i=0; i<index; i++){
            if(curr !== null){
                curr = curr.next;
            }else{
                throw new Error('Null Pointer Error.');
            }
        }

        if(curr===null)throw new Error('Null Pointer Error.');

        return curr.value as T;
    }

    /**
     * 获取首个元素
    */
    getFirst(): T{
        return this.get(0);
    }

    /**
     * 获取最后一个元素
    */
    getLast(): T{
        return this.get(this.size - 1);
    }

    /**
     * 是否包含某元素
    */
    contains(e: T): boolean{
        // 从第一个元素开始遍历
        let curr = this.head.next;
        // 遍历链表，与每一个元素对比
        while(curr!==null){
            // 如果有相等则返回 true
            if(curr.value === e){
                return true;
            }
            curr = curr.next;
        }
        // 遍历结束，说明没有相等元素，返回false.
        return false;
    }

    /**
     * 格式化输出
    */
    toString(): string{
        let res = '\nHEAD -> ';
        let curr = this.head.next;
        while(curr !== null){
            res += `${curr.value} -> `;
            curr = curr.next;
        }
        res += 'NULL\n';
        
        return res;
    }
}