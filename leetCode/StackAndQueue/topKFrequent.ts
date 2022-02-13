function topKFrequent(nums: number[], k: number): number[] {

    return [];

};


// 比较函数的类型 接口
interface ComparedFunction {
    (a: [number, number], b: [number, number]): boolean
}
class PriorityQueue {


    queue: [number, number][] = [];
    compareFN: ComparedFunction = () => false;
    constructor(
        comparedFn: ComparedFunction
    ) {
        this.compareFN = comparedFn;
    }


    public push(item: [number, number]) {

        this.queue.push(item);

        let index = this.queue.length - 1;
        // 找刚插入的点的父节点
        let parent = this.getParentIndex(index);
        // 小顶堆  排序 (上浮)
        // compare(parent,index)>0表示parent的值比刚index的值大，
        // 然而我们用的是小顶堆，小号排前，parent需要小的
        while (parent >= 0 && this.compare(parent, index) > 0) {

            [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];
            // 还以为会是index--；应该就是 比较父节点和子节点就好了
            // 一层一层往上判断，大了就让小的节点上
            index = parent;
            parent = this.getParentIndex(index);
        }
    }


    public pop() {

        const ret = this.queue[0];
        // 把最后一个节点移到 堆顶  
        this.queue[0] = this.queue.pop() as [number, number];

        let index = 0;
        // 左子节点的下标 ，left+1为右子节点的下标
        let left = 1;
        // 找到第二层哪个元素是比较小的
        let selectedChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
        // 下沉
        while (selectedChild !== undefined && this.compare(index, selectedChild) > 0) {

            //  index是父节点， selectedChild 为子节点中较小的 
            [this.queue[index], this.queue[selectedChild]] = [this.queue[selectedChild], this.queue[index]];

            index = selectedChild;
            //  左子节点
            left = 2 * index + 1;
            selectedChild = this.compare(left, left + 1) > 0 ? left + 1 : left;

        }

        return ret;
    }

    public size() { 
        return this.queue.length;
    }




    private compare(index1: number, index2: number) {

        if (this.queue[index1] === undefined) {
            return 1;
        }

        if (this.queue[index2] === undefined) {
            return -1;
        }

        return this.compareFN(
            this.queue[index1],
            this.queue[index2]
        );

    }

    private getParentIndex(curIndex: number) {
        return Math.floor((curIndex - 1) / 2);
    }


}