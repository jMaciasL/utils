export default class Tree {
    constructor(parent, id) {
        this._id = id;
        this._parent = parent;
        this._children = new Map();
        this._leafs = [];
    }

    static createRoot() {
        return new Tree(null);
    }

    static createNode(parent, id) {
         return new Tree(parent, id);
    }

    isLeaf() {
        return this._children.length === 0;
    }
    isRoot() {
        return this._parent === null;
    }
    addLeaf(conf) {
        this._leafs.push(conf);
    }
    getChildren() {
        return Array.from(this._children.values());
    }
    hasChildren() {
        return this._children.size !== 0;
    }
    getLeafs() {
        return this._leafs;
    }
    getId() {
        return this._id;
    }
    insertNode(id) {
        if(this._children.has(id)) return this._children.get(id);
        const child = Tree.createNode(this, id);
        this._children.set(id, child);
        return child;
    }
    insertLeaf(id, payload) {
        const child = this.insertNode(id);
        child.addLeaf(info);
        return child;
    }
    getRoot() {
        if (this.isRoot) return this;
        return this._parent.getRoot();
    }
}