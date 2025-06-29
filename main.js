import LinkedList from "./linked-list.js";

const myLinkedList = new LinkedList();
myLinkedList.append("chicken");
myLinkedList.append("chicken nugget");
myLinkedList.prepend("bacon");
myLinkedList.prepend("burgers");
console.log(myLinkedList.toString());
console.log(myLinkedList.at(1));