/**
 * JS 原生自带顺序表 Array，容量是动态的，且成员可以是不同类型。
 * 这里使用 TS 实现传统意义上的Array，命名为MyArray
*/

export class MyArray<T>{
    private size: number;
    private data: T[];

    constructor(params?: number | T[]) {
        if (Array.isArray(params)) {
            this.data = params;
            this.size = params.length;
        } else {
            // ?? 表示当params为undefined的时候返回右侧的值.
            this.data = new Array(params ?? 10);
            this.size = 0;
        }
    }

    /**
     * 修改数组容量
    */
    private resize(newCapacity: number): void {
        const newData: T[] = new Array(newCapacity);
        // 
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData;
    }

    /**
     * 获取数组的元素个数
    */
    getSize(): number {
        return this.size;
    }

    /**
     * 获取数组的容量
    */
    getCapacity(): number {
        return this.data.length;
    }

    /**
     * 在 index 索引处添加一个新元素 e
    */
    add(index: number, e: T): void {
        // index 范围判定
        if (index < 0 || index > this.size) {
            throw new Error('add failed. index was out of range.');
        }
        // 判断是否需要扩容
        if (this.size === this.data.length) {
            this.resize(2 * this.data.length);
        }

        for (let i = this.size; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = e;
        this.size++;
    }

    /**
     * 向开头添加一个元素
    */
    unshift(e: T): number {
        this.add(0, e);
        return this.getSize();
    }

    /**
     * 向尾部添加一个元素
    */
    push(e: T): number {
        this.add(this.size, e);
        return this.getSize();
    }

    /**
     * 从索引 index 处删除一个元素，返回删除的元素
    */
    remove(index: number): T {
        // 索引越界判断
        if (index < 0 || index >= this.size) {
            throw new Error('remove failed. index was out of range');
        }

        const res: T = this.data[index];

        // 更新数组
        for (let i = index; i < this.size - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.size--;

        // 缩容策略：如果数组大小为容量的四分之一，且数组大小大于1，则将容量减小一半。
        // 优点：不会浪费太多空间，且不会频繁触发缩容.
        // 注：JS中number是double类型，直接 x/4 会得到小数，使用 >> 2 .
        if (this.size === this.data.length >> 2 && this.data.length >> 1 !== 0) {
            this.resize(this.data.length >> 1);
        }

        return res;
    }

    /**
     * 删除指定元素 e
    */
    removeElement(e: T): void {
        const index = this.indexOf(e);
        this.remove(index);
    }

    /**
     * 删除第一个元素
    */
    shift(): T {
        return this.remove(0);
    }

    /**
     * 删除最后一个元素
    */
    pop(): T {
        return this.remove(this.size - 1);
    }

    /**
     * 查询元素 e 是否存在于数组中
    */
    contains(e: T): boolean {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === e) {
                return true;
            }
        }
        return false;
    }

    /**
     * 查询元素 e 所在的第一个索引， 未找到则返回 -1
    */
    indexOf(e: T): number {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === e) {
                return i;
            }
        }
        return -1;
    }

    /**
     * 获取 index 索引位置的元素
    */
    get(index: number): T{
        if(index<0||index>=this.size){
            throw new Error('get failed. index was out of range.');
        }
        return this.data[index];
    }

    /**
     * 获取首个元素
    */
    getFirst(): T{
        if(this.isEmpty()){
            throw new Error('get failed. array is empty.');
        }
        return this.data[0];
    }

    /**
     * 获取最后一个元素
    */
    getLast(): T{
        if(this.isEmpty()){
            throw new Error('get failed. array is empty.');
        }
        return this.data[this.size-1];
    }

    /**
     * 修改 index 索引位置的元素
    */
    set(index: number, e: T): void{
        if(index<0 || index >=this.size){
            throw new Error('set failed. index was out of range.');
        }
        this.data[index] = e;
    }

    /**
     * 交换指定索引位置的两个元素
    */
    swap(i:number, j:number): void{
        if(i<0 || i>=this.size || j<0 || j>=this.size){
            throw new Error('index was out of range');
        }
        let temp: T = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    }

    /**
     * 判断是否为空
    */
    isEmpty(): boolean{
        return this.size === 0;
    }

    /**
     * 格式化输出
    */
    toString(): string{
        let res: string = `\n MyArray: size = ${this.size}, capacity = ${this.data.length}\n`;
        res += '[';
        for(let i=0; i<this.size; i++){
            res += `${this.data[i]}`;
            if(i!==this.size-1){
                res += ', ';
            }
        }
        res += ']\n';
        return res;
    }
}