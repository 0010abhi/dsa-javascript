/**
 * 
 * 
 * Operations on linked list - traverse, insertion, deletion, search, sort
    While implementation Things to Remember about Linked List
    head - points to the first node of the linked list
    next pointer - of the last node is NULL, so if the next current node is NULL, we have reached the end of the linked list.
 */

function LinkedListNode(val) {
   return {
      val: val,
      next: null
   };
}

function print(head) {
   let curr = head;

   while (curr !== null) {
      console.log(curr.val);
      curr = curr.next;
   }
}

function recPrint(head) {
   if (head === null) { return };

   console.log(head.val);
   recPrint(head.next);
}



function deleteMiddle(head) {
   // Edge case: If there's only one node, the middle is that node.
   // Deleting it returns null.
   if (!head || !head.next) return null;

   let linkMap = new Map();
   let current = head;
   let count = 0;

   // 1. Fill the map with index -> Node object
   while (current) {
      linkMap.set(count, current);
      count++;
      current = current.next; // Move to next node (prevents infinite loop)
   }

   // 2. Find the index of the middle node
   // For n = 4, middle is 2. For n = 3, middle is 1.
   const middleIndex = Math.floor(count / 2);

   // 3. Get the node BEFORE the middle node
   const prevNode = linkMap.get(middleIndex - 1);

   // 4. Get the node AFTER the middle node (might be undefined if middle was tail)
   const nextNode = linkMap.get(middleIndex + 1) || null;

   // 5. Skip the middle node
   prevNode.next = nextNode;

   return head;
};

function insertAtEnd(head, val) {
   let curr = head;
   let newNode = new LinkedListNode(val);

   while (curr.next !== null) {
      curr = curr.next;
   }

   curr.next = newNode;

   return head;
}

function reverseLinkedList(head) {
   let prev = null;
   let curr = head;
   

   while(curr !== null) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
   }

   return prev;
}



let head = new LinkedListNode(10);
head.next = new LinkedListNode(20);
head.next.next = new LinkedListNode(30);
head.next.next.next = new LinkedListNode(40);
head.next.next.next.next = new LinkedListNode(50);
head.next.next.next.next.next = new LinkedListNode(60);
head.next.next.next.next.next.next = new LinkedListNode(70);

console.log('>>> print linked list');
print(head);
// console.log('>>> print linked list rec');
// recPrint(head)

console.log('>>> insert at end and print');
insertAtEnd(head, 80);
print(head);

console.log('>>> reverse linkedList');
head = reverseLinkedList(head);
print(head);