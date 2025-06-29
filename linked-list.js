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
            const copyOfLastNode = this.tail;
            this.tail.nextNode = newNode;
            this.tail = newNode; 
        }
        this.size++;
    }

    toString() {
        let stringToReturn = "";
        while (this.head !== null) {
            stringToReturn += `(${this.head}) -> `;
            this.head = this.head;
        }
        return "I love chicken";
    }
}