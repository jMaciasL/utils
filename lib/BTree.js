class BTree {
    constructor(initNode) {
        this.root = initNode;
        this.deep = 0;
        this.nodesCounter = 1;
    }
    
    static seedBTree(value) {
        const node = new Bnode(value);
        return new BTree(node);
    }
    
    add(value) {
        const child = this.root.addChild(value, 1)
        this.deepness(child);
        this.nodesCounter++;
    } 
    
    representTree() {
        return JSON.stringify(this);
    }
    deepness(child) {
        if(child.level > this.deep) this.deep = child.level;
    }
    
    newNode(value, level) {
        return new Bnode(value, level);
    }
    
    search(value) {
        if(this.root.value === value) return value;
        if(this.root.value > value) return this.root.right.search(value);
        if(this.root.value < value) return this.root.left.search(value);
    }
    
    isBalanced() {
        return this.root.isBalanced();
    }
    
}

class Bnode {
    constructor(value, level = 0) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.level = level;
        this.deep = 0;
    }
        
    addChild(value, level) {
        if (this.value > value) {
            if(this.right) {
                level++;
                const child = this.right.addChild(value, level);
                this.deepness(child.level - this.level);
                return child;
            } else {
                this.right = new Bnode(value, level);
                return this.right;
            }
        } else {
            if(this.left) {
                level++;
                const child = this.left.addChild(value, level);
                this.deepness(child.level - this.level);
                return child;
            } else {
                this.left = new Bnode(value, level);
                return this.left;
            }
        }
    }
    
    deepness(deep) {
        if(deep > this.deep) this.deep = deep;
    }
    
    search(value, iter = 0) {
        if(this.value > value && this.right) {
            iter++;
            return this.right.search(value, iter);
        }
        else if(this.value < value && this.left) {
            iter++;
            return this.left.search(value, iter);
        }
        else if(this.value === value) {
            console.log('Iterations: ' + iter + ' for value: ' + value);
            return value;
        }
        else {
            console.log('Iterations: ' + iter + ' for value: ' + value);
            return 'there is no results';
        }
    }
    
    isBalanced() {
        const rightBalance = this.right ? this.right.deep : 0;
        const leftBalance = this.left ? this.left.deep : 0;
        const balanceTree = Math.abs(rightBalance - leftBalance) <= 1;
        const rightBalanceTree = this.right ? this.right.isBalanced() : true;
        const leftBalanceTree = this.left ? this.left.isBalanced() : true;
        return balanceTree && rightBalanceTree && leftBalanceTree;        
    }
}

const tree = BTree.seedBTree(50);
tree.add(55);
tree.add(40);
tree.add(45);
tree.add(30);
tree.add(60);
tree.add(52);
tree.add(70);
tree.add(58);
tree.add(57);
tree.add(56);
tree.add(48);
tree.add(49);
tree.search(70);
console.log(tree.nodesCounter);
console.log(tree.deep);
console.log(tree.isBalanced());
console.log(tree.representTree());