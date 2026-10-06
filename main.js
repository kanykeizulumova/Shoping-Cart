const input = document.getElementById('shop-input');
const addBtn = document.getElementById('add-btn');
const shopList = document.getElementById('shop-list');
const errMsg = document.getElementById('error');

let tasks = [];
let nextId = 1;

function addTask() {
    const text = input.value.trim();
    errMsg.hidden = true;
    if (text === '') {
        errMsg.hidden = false;
        errMsg.textContent = 'Введите название товара';
        return;
    }
    tasks.push({ id: nextId++, text: text, bought: false });
    input.value = "";
    render();
}

function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    render();
}
function toggleTask(id) {
    const task = tasks.find((t) => t.id === id);
    if (task) {
        task.bought = !task.bought;
        render();
    }
}

function render() {
    shopList.textContent = '';
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const li = document.createElement("li");
        li.className = "buy";
        if (task.bought) {
            li.classList.add("bought");
        }
        const span = document.createElement("span");
        span.className = "buy-text";
        span.textContent = task.text;
        span.addEventListener("click", () => toggleTask(task.id));

        const del = document.createElement("button");
        del.className = "buy-delete";
        del.textContent = "✕";
        del.addEventListener("click", () => deleteTask(task.id));

        li.appendChild(span);
        li.appendChild(del);
        shopList.appendChild(li);
    }
}

addBtn.addEventListener("click", addTask);

render();