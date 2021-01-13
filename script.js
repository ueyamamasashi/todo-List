'use strict';

const trigger = document.getElementById("trigger");
const addValue = document.getElementById("addValue");
const tBody = document.getElementById("tbody");
let counter = 0;
//task add
const addTask = (task) => { 
    const params = {
        'No'       : counter,
        'content'  : task,
        'condition': conditionBtn(),
        'delete'   : deleteBtn()
    }
    counter++;
    return params;
}
//todo表示
const displayTask = (params) => {
    const newTable = document.createElement('tr');
    const newId = document.createElement('td');
    const newTask = document.createElement('td');
    const newCondition = document.createElement('td');
    newId.innerText = params['No'];
    newTask.innerText = params['content'];
    newTable.appendChild(newId);
    newTable.appendChild(newTask);
    newCondition.appendChild(params['condition']);
    newCondition.appendChild(params['delete']);
    newTable.appendChild(newCondition);
    tBody.appendChild(newTable);
}

//conditionBtn
const conditionBtn = () => {
    const newBtn = document.createElement('button');
    newBtn.innerText = '作業中'; //soon boolen
    return newBtn;
}

//deleteBtn
const deleteBtn = () => {
    const newDeleteBtn = document.createElement('button');    
    newDeleteBtn.innerText = '削除';
    return newDeleteBtn;
}

trigger.addEventListener('click', (event) => {
    const task = addValue.value;
    const params = addTask(task);
    displayTask(params);
    addValue.value = '';
});