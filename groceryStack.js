let groceryStack = [];

function peek() {
    return groceryStack.length === 0 ? "Stack is empty" : groceryStack[groceryStack.length - 1];
}

function push(item) {
    console.log(`Pushing ${item} to stack`);
    groceryStack.push(item);
    console.log("Current top:", peek());
}

function pop() {
    if (groceryStack.length === 0) {
        console.log("Stack is empty, cannot pop");
    } else {
        let removedItem = groceryStack.pop();
        console.log(`Popped ${removedItem} from stack`);
        console.log("Current top:", peek());
    }
}
