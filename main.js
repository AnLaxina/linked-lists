import LinkedList from "./linked-list.js";

const myLinkedList = new LinkedList();
myLinkedList.append("Chicken");
console.log("Initial linked list: ");
console.log(myLinkedList.toString());

myLinkedList.insertAt("Lego", 0);
myLinkedList.insertAt("Mega Bloks", 2)
console.log(myLinkedList.toString());



