function stack() {
    this.data = [];

    this.isEmpty = function() {
        return this.data.length === 0 ? 'Yes' : 'No';
    }

    this.popData = function() {
        if(this.isEmpty() === 'Yes') {
            return "Stack is empty";
        }
        this.data.pop();
    }

    this.pushData = function(ele) {
        this.data.push(ele);
    }

    this.printStack = function() {

    }
}

// Test the code.
const stack1 = new stack();
stack1.pushData(11);
stack1.pushData(12);
stack1.pushData(13);
stack1.isEmpty();
stack1.popData();
console.log(stack1.data);
stack1.popData();
stack1.popData();
console.log(stack1.popData());