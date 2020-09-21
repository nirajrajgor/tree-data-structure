const T = require('./index');
const Node = T.Node;
const Tree = T.Tree;

describe('Node', () => {
  test('Node is a constructor', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
  });

  test('Node has a data and children properties', () => {
    const n = new Node('a');
    expect(n.data).toEqual('a');
    expect(n.children.length).toEqual(0);
  });

  test('Node can add children', () => {
    const n = new Node('a');
    n.add('b');
    expect(n.children.length).toEqual(1);
    expect(n.children[0].children).toEqual([]);
  });

  test('Node can remove children', () => {
    const n = new Node('a');
    n.add('b');
    expect(n.children.length).toEqual(1);
    n.remove('b');
    expect(n.children.length).toEqual(0);
  });
});

describe('Tree', () => {
  test('starts empty', () => {
    const t = new Tree();
    expect(t.root).toEqual(null);
  });

  test('Can traverse BF', () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node('a');
    t.root.add('b');
    t.root.add('c');
    t.root.children[0].add('d');

    t.traverseBF(node => {
      letters.push(node.data);
    });

    expect(letters).toEqual(['a', 'b', 'c', 'd']);
  });

  test('Can traverse DF', () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node('a');
    t.root.add('b');
    t.root.add('d');
    t.root.children[0].add('c');

    t.traverseDF(node => {
      letters.push(node.data);
    });

    expect(letters).toEqual(['a', 'b', 'c', 'd']);
  });

  test('Can traverse DF Post Order', () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node('a');
    t.root.add('b');
    t.root.add('c');
    t.root.children[0].add('d');

    t.traverseDFPost(node => {
      letters.push(node.data);
    });
    expect(letters).toEqual(['d', 'b', 'c', 'a']);
  });

  test('Can traverse DF Post Order one more example', () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node('10');
    t.root.add('6');
    t.root.add('15');
    t.root.children[0].add('3');
    t.root.children[0].add('8');
    t.root.children[0].add('7');
    t.root.children[1].add('20');

    t.traverseDFPost(node => {
      letters.push(node.data);
    });
    expect(letters).toEqual(['3', '8', '7', '6', '20', '15', '10']);
  });


  test('Can traverse DF Post Order Recursion', () => {
    const letters = [];
    const t = new Tree();
    t.root = new Node('a');
    t.root.add('b');
    t.root.add('c');
    t.root.children[0].add('d');

    t.traverseDFPostRecursion(node => {
      letters.push(node.data);
    });
    expect(letters).toEqual(['d', 'b', 'c', 'a']);
  });

});
