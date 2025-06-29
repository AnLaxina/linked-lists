import Node from "./node.js";

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    toString() {
        let stringToReturn = "";
        let currentNode = this.head;
        while (currentNode !== null) {
            if(currentNode.nextNode !== null) {
                stringToReturn += `( ${currentNode.value} ) -> ( ${currentNode.nextNode.value} ) -> `;
            }
            else {
                stringToReturn += null;
            }
            currentNode = currentNode.nextNode;
        }
        return stringToReturn;
    }
}