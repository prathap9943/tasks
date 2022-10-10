class Node {
  constructor(val) {
    this.data = val;
    this.link = null;
  }
}

function newNode(data) {
  temp = new Node(data);
  return temp;
}

function makeCycle(linkedlist, cyclePos) {
  var index = 0;
  while (cyclePos > -1 && linkedlist != null) {
    if (cyclePos === index) {
      curr.link = linkedlist;
      cyclePos = -1;
    }
    linkedlist = linkedlist.link;
    index++;
  }
}

function isCyclic(head) {
  if (head == null) {
    return false;
  }
  var existingNodes = [];
  existingNodes.push(head);
  var curr = head.link;

  while (curr != null) {
    if (
      existingNodes.filter((obj) => {
        return curr.data === obj.data && curr.link === obj.link;
      }).length
    ) {
      return true;
    }
    existingNodes.push(curr);
    curr = curr.link;
  }
  return false;
}

//Change values here to check multiple inputs

var input = [1, 2, 3, 4];
var cyclePos = 2;

var linkedlist = newNode(input[0]);
var head = linkedlist;
var curr = linkedlist;

for (let i = 1; i < input.length; i++) {
  curr.link = newNode(input[i]);
  curr = curr.link;
}

makeCycle(head, cyclePos);
if(isCyclic(head)) {
    console.log("The given linked list is cyclic");
}
else {
    console.log("The given linked list is not cyclic");
}
