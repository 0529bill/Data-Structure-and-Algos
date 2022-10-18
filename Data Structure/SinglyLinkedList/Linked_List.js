class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  add(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }
  remove(data) {
    let currentNode = this.head;
    let previousNode;
    if (currentNode.data === data) {
      this.head = currentNode.next;
    } else {
      while (currentNode.data !== data) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
  }
  indexOf(data) {
    let currentNode = this.head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.data === data) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }
  find(index) {
    let currentNode = this.head;
    let count = 0;
    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode.data;
  }
}
