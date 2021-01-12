'use strict';

const trigger = document.getElementById("trigger");
const addValue = document.getElementById("addValue");
const tBody = document.getElementById("tbody");
let counter = 0;
const addTask = (task) => {
    const newTable = document.createElement('tr');
    const newId = document.createElement('th');
    const newTask = document.createElement('th');
    const newCondition = document.createElement('th');
    const newBtn = document.createElement('button');
    const newDeleteBtn = document.createElement('button');
    newBtn.innerText = '作業中';
    newDeleteBtn.innerText = '削除';

    newId.innerText = counter;
    newTask.innerText = task;
    newCondition.appendChild(newBtn);
    newCondition.appendChild(newDeleteBtn);
    newTable.appendChild(newId);
    newTable.appendChild(newTask);
    newTable.appendChild(newCondition);
    tBody.appendChild(newTable);
    counter++;
   
    
}


trigger.addEventListener('click', (event) => {
    const task = addValue.value;
    addTask(task);
    addValue.value = '';
});