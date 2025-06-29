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

    prepend(value) {
        const newNode = new Node(value);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    toString() {
        let stringToReturn = "";
        let currentNode = this.head;
        while (currentNode !== null) {
            stringToReturn += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        stringToReturn += null;
        return stringToReturn;
    }
}