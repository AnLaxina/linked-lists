import LinkedList from "./linked-list.js";

const myLinkedList = new LinkedList();
myLinkedList.append("Chicken");
myLinkedList.append("Lego Batman")
myLinkedList.append("Lego Star Wars");
console.log("Initial linked list: ");
console.log(myLinkedList.toString());

console.log(`Does it contain Chicken: ${myLinkedList.contains("Chicken")}`);
console.log(`Does it include burgers: ${myLinkedList.contains("burgers")}`);


