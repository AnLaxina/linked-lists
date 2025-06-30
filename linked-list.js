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

    at(index) {
        let currentNode = this.head;
        let currentIndex = 0;
        while(currentNode) {
            if(currentIndex === index) {
                return currentNode.value;
            }

            currentNode = currentNode.nextNode;
            currentIndex++;
        }
        return null;
    }

    // Since this implementation is a singly linked list, we need to iterate through the entire
    // list and only stop when we've hit the second last node (the one right before this.tail)
    pop() {
        
        if(this.head === null && this.tail === null) {
            return null;
        }
        else if(this.head === this.tail) {
            const copyOfTail = this.tail;
            this.head = null;
            this.tail = null;
            this.size--;
            return copyOfTail;
        }
        else {
            // Once this while loop finishes, currentNode would have been the second to last node
            let currentNode = this.head;
            let copyOfTail = this.tail;
            while(currentNode !== null && currentNode.nextNode !== copyOfTail) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = null;
            this.tail = currentNode;
            this.size--;
            return copyOfTail;
        }


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