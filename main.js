import LinkedList from "./linked-list.js";

const myLinkedList = new LinkedList();
myLinkedList.append("Chicken");
myLinkedList.append("Lego Batman")
myLinkedList.append("Lego Star Wars");
console.log("Initial linked list: ");
console.log(myLinkedList.toString());

myLinkedList.pop();
console.log("After first pop:");
console.log(myLinkedList.toString());

myLinkedList.pop();
console.log("After second pop:");
console.log(myLinkedList.toString());


