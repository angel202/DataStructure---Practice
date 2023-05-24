class LinkedList{
    //Constructor creating 2 properties value and next
    //Create linkedlist with passed value.
    constructor(value){
        //Create head node
        this.head = {
            value: value,
            next : null
        };
        //One element in the list so head is also a tail
        this.tail = this.head;
        //Length would be 1
        this.length = 1;
    }
    
}


console.log('Linkedlist');
const myLinkedList = new LinkedList(4);
console.log(myLinkedList);
