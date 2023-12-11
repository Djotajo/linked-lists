class LinkedList {
    constructor(head = null) {
      this.head = head;
    }
    
    // Methods

    // Adds a new node containing value to the end of the list
    append(node) {
        if (this.head === null) {
            this.head = node;
        } else {
            this.tail().nextNode = node;
        }
    }

    // Adds a new node containing value to the start of the list
    prepend(node) {
        if (this.head === null) {
            this.head = node;
        } else {
        node.nextNode = this.head;
        this.head = node;
    }
    }

    // Returns the total number of nodes in the list
    size() {
        if (this.head === null) {
            return "The list is empty";
        } else {
            let size = 0;
            let current = this.head;
            while (current) {
                current = current.nextNode;
                size++;
            } return size; 
        }

    }

    // Returns the first node in the list
    head() {
        if (this.head === null) {
            return "The list is empty";
        } else {
        return this.head;
        }
    }

    // Returns the last node in the list
    tail(current = this.head) {
        if (this.head === null) {
            return "The list is empty";
        } else {
        while (current.nextNode != null) {
            return this.tail(current.nextNode);
        } return current;
    }
    }

    // Returns the node at the given index
    at(index) {
        let current = this.head;
        let currentIndex = 0;

        while (current) {
            if (currentIndex === index) {
                return current;
            } else {
            current = current.nextNode;
            currentIndex++;
        }
        } return "Number too high";
    }

    // Removes the last element from the list
    pop() {
        if (this.head === null) {
            return "The list is empty";
        } else {
        let tail = this.tail();

        let newTail = this.head;
        while (newTail.nextNode != tail) {
            newTail = newTail.nextNode;
        } 
        newTail.nextNode = null;
    }
    }

    // Returns true if the passed in value is in the list and otherwise returns false
    contains(value) {
        let current = this.head;

        while (current) {
            if (current.nodeValue === value) {
                return true;
            } else {
            current = current.nextNode;
        }
        } return false;
    }

    // Returns the index of the node containing value, or null if not found
    find(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.nodeValue === value) {
                return index;
            } else {
            current = current.nextNode;
            index++;
        }
        } return null;
    }

    // Represents your LinkedList objects as strings
    toString() {
        let stringList = "";
        let current = this.head;
        while (current) {
            stringList += `( ${current.nodeValue} ) -> `
            current = current.nextNode;
        } return stringList += `null`;
    }

    // Inserts a new node with the provided value at the given index
    insertAt(value, index) {
        if (this.head === null) {
            return "The list is empty, you can only insert at index 0";
        }
        if (index > this.size() -1 || index < 0) {
            return "Wrong index";
        }
        let current = this.head;
        let currentIndex = 0;
        let previous;
        let replaced;

        while (current) {
            if (currentIndex === index-1) {
                previous = current;
                current = current.nextNode;
                currentIndex++;
            }
            else if (currentIndex === index) {
                replaced = current;
                current = current.nextNode;
                currentIndex++;
            }
            else {
            current = current.nextNode;
            currentIndex++;
        }
        }
        let newNode = createNode(value);
        newNode.nextNode = replaced;
        previous.nextNode = newNode;
        return newNode;
    }

    // Removes the node at the given index
    removeAt(index) {
        if (this.head === null) {
            return "The list is empty";
        }
        if (index > this.size() -1 || index < 0) {
            return "Wrong index";
        }
        let current = this.head;
        let currentIndex = 0;
        let previous;
        let next;
        let removed;

        while (current) {
            if (currentIndex === index-1) {
                previous = current;
                current = current.nextNode;
                currentIndex++;
            }
            else if (currentIndex === index) {
                removed = current;
                current = current.nextNode;
                currentIndex++;
            }
            else if (currentIndex === index+1) {
                next = current;
                current = current.nextNode;
                currentIndex++;
            }
            else {
            current = current.nextNode;
            currentIndex++;
        }
        }
        previous.nextNode = next;
        return removed;
    }


  }

//   Node factory
function createNode (value) {
    const nodeValue = value;
    const nextNode = null;
    return { nodeValue, nextNode };
  }