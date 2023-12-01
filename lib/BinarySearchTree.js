class BinarySearchTree {
  constructor() {
    this.root = null;
    this.numberNodes = 0;
    this.mainDepth = 0
  }

  balanceHeight (currentNode) {
    if (currentNode == null) return 0;
    const leftSubtreeHeight = this.balanceHeight (currentNode.left);
    if (leftSubtreeHeight == -1) return -1;
    const rightSubtreeHeight = this.balanceHeight (currentNode.right);
    if (rightSubtreeHeight == -1) return -1;
    if (Math.abs(leftSubtreeHeight - rightSubtreeHeight) > 1) return -1;
    return (Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1);
  }

  _betterCandidate(value, node) {
    const betterNode = node.value > value ? node.left : node.right;
    if (betterNode !== null) return this._betterCandidate(value, betterNode);
    else return node;
  }

  lookfor(value) {
    const betterNode = this._betterCandidate(value, this.root);
    return betterNode?.value === value ? true : false;
  }

  insert(value) {
    const newNode = new Node(value);
    const betterNode = this.root ? this._betterCandidate(value, this.root) : null;
    if (!betterNode) {
      newNode.depth = 1;
      this.mainDepth = 1;
      this.root = newNode;
    } else {
      newNode.depth = betterNode.depth + 1;
      this.mainDepth = this.mainDepth > newNode.depth
        ? this.mainDepth
        : newNode.depth;
      if (betterNode.value > value) betterNode.left = newNode;
      else if (betterNode.value < value) betterNode.right = newNode;
      else console.warn (value + ' is a value already inserted in the tree');
    }
    this.numberNodes++;
  }
}

class Node{
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.depth = null;
  }
}

function traverse(node) {
  const tree = {value: node.value};
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

function perro(ladridos) {
  const BST = new BinarySearchTree();
  BST.insert(ladridos/2)
  let i = 0;
  while(i < ladridos) {
    BST.insert(Math.floor(Math.random()*100));
    i++;
  }
  console.log(traverse(BST.root));
  console.log(BST.balanceHeight(BST.root))
  console.log(BST.lookfor(10));
}

perro(100);
