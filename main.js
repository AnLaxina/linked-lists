import LinkedList from "./linked-list.js";

const myLinkedList = new LinkedList();
myLinkedList.append("Chicken");
myLinkedList.append("Lego Batman")
myLinkedList.append("Lego Star Wars");
console.log("Initial linked list: ");
console.log(myLinkedList.toString());

console.log(`The index of Chicken is: ${myLinkedList.find("Chicken")}`);
console.log(`The index of Lego Star Wars is: ${myLinkedList.find("Lego Star Wars")}`);
console.log(`The index of Something is: ${myLinkedList.find("Something")}`);


