const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    this.root = addValue(this.root, data);

    function addValue(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.value === data) {
        return node;
      }

      if (node.value > data) {
        node.left = addValue(node.left, data);
      } else {
        node.right = addValue(node.right, data);
      }

      return node;
    }

  }

  has(data) {
    return search(this.root, data)

    function search(node, data) {
      if (!node) {
        return false;
      }
      if (node.value === data) {
        return true;
      }
      if (data < node.value) {
        return search(node.left, data)
      } else {
        return search(node.right, data)
      }
    }
  }

  find(data) {
    return search(this.root, data)

    function search(node, data) {
      if (!node) {
        return null;
      }
      if (node.value === data) {
        return node;
      }
      if (node.value < data) {
        return search(node.left, value)
      } else {
        return search(node.right, value)
      }
    }

  }

  remove(data) {
    this.root = removeThis(this.root, data);

    function removeThis(node, data) {

      if (!node) {
        return null;
      }

      if (data < node.value) {
        node.left = removeThis(node.left, data);
        return node;
      } else if (data > node.value) {
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
        node.value = minRight.value;
        node.right = removeThis(node.right, minRight.value);

        return node
      }
    }

  }

  min() {
    if (!this.root) {
      return null;
    }

    let node = this.root;
    while (node.left) {
      node = node.left;
    }

  }

  max() {
    if (!this.root) {
      return null;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.value
  }

}

module.exports = {
  BinarySearchTree
};