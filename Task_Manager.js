const { text } = require("express");

const tasks = [
    { id: 1, text: "Learn Javascript", completed: false},
    { id: 2, text: "Build Project", completed: true},
    { id: 3, text: "Write documentation", completed: false}
];

function displayTaskWithFor(){
    console.log("\nDisplaying tasks with for loop:");
    for (let i = 0; i < tasks.length; i++){
        console.log(`Task ${tasks[i].id}:${tasks[i].text}`);
    }
}

function displayTaskWithForEach() {
    console.log("\nDisplaying tasks with ForEach:");
    tasks.forEach(task => {
        console.log(`Task ${task.id}: ${task.each}`);
    });
}

// Create an array of 3 friends
const friends = ["Alex", "Sam", "Taylor"];

// Use forEach to greet each friend
friends.forEach(friend => {
    console.log(`Hello, ${friend}!`);
});