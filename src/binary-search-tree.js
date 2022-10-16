const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addValue(this.rootTree, data);

    function addValue(node, data) {

      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        node.left = addValue(node.left, data);
      } else {
        node.right = addValue(node.right, data);
      }
      return node;
    }

  }

  has(data) {
    return search(this.rootTree, data)

    function search(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return search(node.left, data)
      } else {
        return search(node.right, data)
      }
    }
  }

  find(data) {
    return search(this.rootTree, data)

    function search(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return search(node.left, data)
      } else {
        return search(node.right, data)
      }
    }

  }

  remove(data) {
    this.rootTree = removeThis(this.rootTree, data);

    function removeThis(node, data) {

      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeThis(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeThis(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeThis(node.right, minRight.data);

        return node
      }
    }

  }

  min() {
    if (!this.rootTree) {
      return null;
    }

    let node = this.rootTree;

    while (node.left) {
      node = node.left;
    }
    return node.data
  }

  max() {
    if (!this.rootTree) {
      return null;
    }

    let node = this.rootTree;
    while (node.right) {
      node = node.right;
    }
    return node.data
  }

}

module.exports = {
  BinarySearchTree
};