'use strict';

const trigger = document.getElementById("trigger");
const addValue = document.getElementById("addValue");
const tBody = document.getElementById("tbody");
const radioId = document.getElementById("radio");
const radioInput = document.getElementsByName("radio");


//taskのトータルを取るために敢えてcounterを付け、テーブルidにする
let counter = 0;
//task add
const addTask = (task) => {
    const afterDeleteTr = document.querySelectorAll('tr'); //1回目
    const todo = {
        'id': afterDeleteTr.length-1,
        'content': task,
        'condition': '作業中', //いずれboolenにする
    }
    return todo;
}
//todo表示
const displayTask = (todo) => {
    const newTable = document.createElement('tr');
    const newId = document.createElement('td');
    const newTask = document.createElement('td');
    const newCondition = document.createElement('td');
    //const afterDeleteTr = document.querySelectorAll('tr'); //2回目
    newId.innerText = todo['id'];
    newTask.innerText = todo['content'];
    newTable.appendChild(newId);
    newTable.appendChild(newTask);
    const newBtn = conditionBtn(counter);
    newBtn.innerText = todo['condition'];
    newCondition.appendChild(newBtn);
    const newDeleteBtn = deleteBtn();
    newDeleteBtn.innerText = '削除';
    //deleteBtnに属性付与
    newDeleteBtn.setAttribute('id', `delete-${counter}`);
    newCondition.appendChild(newDeleteBtn);
    newTable.appendChild(newCondition);
    newTable.setAttribute('id', `table-${counter}`);
    tBody.appendChild(newTable);
    //以下、別関数が良いとは思うが、関数の作り方が思い浮かばない
    //また当初'newDeleteBtn.setAttribute('id', `delete-${counter}`);'直下に以下を置いていたためappendChildが動かず、idが変わらなかった
    newDeleteBtn.onclick = function(event) {
        console.log('target_id--' + event.target);
        const id = event.target.id.split('-');
        const num = parseInt(id[1]);
        console.log('id-' + num);
        const deleteTable = `table-${num}`;
        const table = document.getElementById(deleteTable);        
        table.remove();
        const afterDeleteTr = document.querySelectorAll('tr'); //3回目 
        console.log(afterDeleteTr);
        afterDeletetasks(afterDeleteTr);        
    }
    //conditionを作業中と完了に切り替える
    newBtn.onclick = function(event){
        
        if (newBtn.innerText==='作業中'){
            newBtn.innerText = '完了';
        } else if (newBtn.innerText==='完了') {
            newBtn.innerText = '作業中';
        }
    };
    radioBtnChanged();
    counter++;
}

//conditionBtn
const conditionBtn = (counter) => {
    const newBtn = document.createElement('button');
    //eventListener作成
    newBtn.setAttribute('id', `condition-${counter}`);
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



//削除後のテーブルを再規定
const afterDeletetasks = (afterDeleteTr) => {
    for (let i=0; i<=afterDeleteTr.length-1; i++) {
        //console.log('trの長さ' + afterDeleteTr.length);
        const j = i-1;
        afterDeleteTr[i].childNodes[0].outerHTML = `<td>${j}</td>`;
    }
}

//ラジオボタン操作
const radioBtnChanged = () => {
    //すべて
    radioInput[0].onclick = function(evt){
        console.log(radioInput[0].checked);
        const allTr = document.querySelectorAll('tr');  
        console.log(allTr);
        Array.from(allTr).map(function(tr){
            tr.style.display = 'table-row';
            //tBody.appendChild(tr); 
        });
    };
    //作業中
    radioInput[1].onclick = function(){
        console.log(radioInput[1].checked);
        const allTr = document.querySelectorAll('tr');
      
        allTr[0].style.display = 'table-row';

        Array.from(allTr).map(function(tr){
            tr.style.display = 'table-row';
            //console.log(tr)
            const getChild = tr.lastElementChild;
            //console.log('a'+getChild);
            const getName = getChild.localName;
            //console.log('b'+getName);
            if (getName === "td"){               
                const lastTd = tr.childNodes[2];
                const lastButton = lastTd.childNodes[0].innerText;
                //const lastButton = lastTd.lastChild;
                console.log('lastTd::'+lastButton)
                if (lastButton ==='作業中') {
                    //tBody.appendChild(tr); 
                } else {
                    tr.style.display = 'none';
                }
            }            
        }); 
    };
    //完了
    radioInput[2].onclick = function(){
        console.log(radioInput[2].checked);
        const allTr = document.querySelectorAll('tr');
        //thだけは先にアップ
        allTr[0].style.display = 'table-row';
        //ここから作業中・完了を切り分け
        Array.from(allTr).map(function(tr){
            tr.style.display = 'table-row';
            console.log(tr)
            const getChild = tr.lastElementChild;
            console.log('a'+getChild);
            const getName = getChild.localName;
            console.log('b'+getName);
            if (getName === "td"){               
                const lastTd = tr.childNodes[2];
                const lastButton = lastTd.childNodes[0].innerText;

                //const lastButton = lastTd.lastChild;
                console.log('lastTd::'+lastButton)
                if (lastButton ==='完了') {
                    //tBody.appendChild(tr); 
                } else {
                    tr.style.display = 'none';
                }
            }            
        }); 
    };

}
 



