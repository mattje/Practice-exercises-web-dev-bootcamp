let quit = false;
let todos = [];
let input = null;

// const todoList = ['Brush teeth', 'Brew coffee'];

while (!quit) {
    input = prompt("Enter a command. Options: list, new, delete, quit");

    switch (input) {
        case 'list' :
            console.log("***Begin List***");
            for (let i = 0; i < todos.length; i++) {
                console.log(`${i}: ${todos[i]}`);
            }
            console.log("***End List***");
            break;
        case 'new' :
            const newItem = prompt("What would you like to add to the list?");
            todos.push(newItem);
            console.log(`${newItem} added to the list.`)
            break;
        case 'delete' :
            const index = parseInt(prompt('Okay, enter an index to delete:'));
            if (!Number.isNaN(index)) {
                const deleted = todos.splice(index,1);
                console.log (`Okay, deleted ${deleted[0]}`)
            } 
            else {
                console.log('Unknown index!');
            }
            break;
        case 'quit' :
        case 'q' :
            console.log("Okay, quitting the app!");
            quit = true;
            break;
        case 'default' :
            alert("Command not recognized. Try again.");
    }
}

console.log("Okay, quit the app.")


