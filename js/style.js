let taskAdd = document.getElementById('taskAdd');
let taskInput = document.getElementById('taskInput');
let noTask = document.getElementById('noTask');
let allTasks = document.getElementById('allTasks');
let invalid = document.getElementById('invalid');
let closeValidtaionMessage = document.querySelector('#invalid .close');
let addSuccess = document.getElementById('addSuccess');
let addDanger = document.getElementById('addDanger');
let addInfo = document.getElementById('addInfo');


let closeValidtaionMessagefunc = () => {
    invalid.classList.toggle('none');
}
let NoTaskToShow = () => {
    if (allTasks.childElementCount > 0) {
        noTask.classList.add('none');
    } else {
        noTask.classList.remove('none');
    }
}

let addTask = () => {
    let taskData = taskInput.value;
    if (taskData.trim() == "") {
        closeValidtaionMessagefunc();
    } else {
        noTask.classList.add('none');
        allTasks.innerHTML += `
        <div class='alert alert-info ' >
        ${taskData}
        <i class="fas fa-trash float-right delete pt-1 icon" ></i>
        <i class="fas fa-check-square float-right check pt-1 mr-3 icon"></i>
        </div>
        `;
        taskInput.value = "";
        addSuccess.classList.remove('none');
        setTimeout(() => {
            addSuccess.classList.add('none');
        }, 1500);

    }
}

taskAdd.addEventListener('click', addTask);

closeValidtaionMessage.addEventListener('click', closeValidtaionMessagefunc);

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) { //delete
        e.target.parentElement.remove();
        addDanger.classList.remove('none');
        setTimeout(() => {
            addDanger.classList.add('none');
        }, 1000);
    }
    if (e.target.classList.contains('check')) { //check
        e.target.parentElement.classList.toggle('done');
        addInfo.classList.remove('none');
        setTimeout(() => {
            addInfo.classList.add('none');
        }, 1000);
    }
    NoTaskToShow();
});

//Switcher
let btn = document.getElementById('switcher');
let body = document.querySelector('body');
let i = document.getElementById('i1');
let card = document.querySelectorAll('.card');

btn.onclick = function () {
    if (body.classList.contains('body')) {
        body.classList.toggle('body');
        card[0].classList.toggle('cardlight');
        card[1].classList.toggle('cardlight');
        taskAdd.classList.toggle('btnhoverlight');
        btn.classList = "btn btn-light my-3 switcher";
        i.classList = "far fa-sun";
    } else {
        body.classList.toggle('body');
        card[0].classList.toggle('cardlight');
        card[1].classList.toggle('cardlight');
        taskAdd.classList.toggle('btnhoverlight');
        btn.classList = "btn btn-dark my-3 switcher";
        i.classList = "far fa-moon";
    }
}