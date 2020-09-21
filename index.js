class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }
  remove(data) {
    this.children = this.children.filter(child => child.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    let arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      fn(node);
      arr.push(...node.children);
    }
  }

  // DFS with Pre Order traversal
  traverseDF(fn) {
    let arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      fn(node);
      arr.unshift(...node.children);
    }
  }

  // DFS with Post Order traversal
  traverseDFPost(fn) {
    let arr = [this.root];
    let res = [];
    while (arr.length) {
      const node = arr.pop();
      res.unshift(node);
      arr.push(...node.children);
    }
    while (res.length) {
      const node = res.shift();
      fn(node);
    }
  }

  // DFS with Post Order traversal using recursion
  traverseDFPostRecursion(fn) {
    function postOrder(node, fn) {
      if (node.children.length !== 0) {
        node.children.forEach(child => {
          postOrder(child, fn);
        })
      }
      fn(node);
      return true;
    }
    postOrder(this.root, fn)
  }
}

module.exports = { Tree, Node };
