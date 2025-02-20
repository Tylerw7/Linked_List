
// This class creates a new Node for the doubly list
class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}


class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this
    }

    insert(index, value) {
        //check params
        if (index >= this.length) {
            return this.append(value)
        }

        const newNode = new Node(value)
        const leader = this.traverseToIndex(index - 1)
        const follower = leader.next
        leader.next = newNode
        newNode.next = follower
        newNode.prev = leader
        follower.prev = newNode
        this.length++
        return this

    }

    traverseToIndex(index) {
        let counter = 0
        let currentNode = this.head
        while (counter != index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length--
        return this
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value); // Store value instead of node
            currentNode = currentNode.next;
        }
        return array;
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let currentNode = this.head;
        this.tail = this.head;
        while (currentNode) {
            // Swap next and prev for each node
            const temp = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = temp;
            // Move to the next node (which is now the previous one)
            if (!temp) {
                this.head = currentNode;
            }
            currentNode = temp;
        }
        return this;
    }
}

const mylist = new DoublyLinkedList(10)
mylist.append(5)
mylist.append(16)
mylist.prepend(1)
mylist.insert(2, 99)

console.log(mylist.printList())


