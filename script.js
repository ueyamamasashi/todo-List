'use strict';

const trigger = document.getElementById("trigger");
const addValue = document.getElementById("addValue");
const tBody = document.getElementById("tbody");
let counter = 0;
//task add
const addTask = (task) => { 
    const todo = {
        'id': counter,
        'content': task,
        'condition': '作業中', //いずれboolenにする
    }
    counter++;
    return todo;
}
//todo表示
const displayTask = (todo) => {
    const newTable = document.createElement('tr');
    const newId = document.createElement('td');
    const newTask = document.createElement('td');
    const newCondition = document.createElement('td');
    newId.innerText = todo['id'];
    newTask.innerText = todo['content'];
    newTable.appendChild(newId);
    newTable.appendChild(newTask);
    const newBtn = conditionBtn();
    newBtn.innerText = todo['condition'];
    newCondition.appendChild(newBtn);
    const newDeleteBtn = deleteBtn();
    newDeleteBtn.innerText = '削除';
    newCondition.appendChild(newDeleteBtn);
    newTable.appendChild(newCondition);
    tBody.appendChild(newTable);
}

//conditionBtn
const conditionBtn = () => {
    const newBtn = document.createElement('button');
    return newBtn;
}

//deleteBtn
const deleteBtn = () => {
    const newDeleteBtn = document.createElement('button');    
    return newDeleteBtn;
}

trigger.addEventListener('click', (event) => {
    const task = addValue.value;
    const todo = addTask(task);
    displayTask(todo);
    addValue.value = '';
});