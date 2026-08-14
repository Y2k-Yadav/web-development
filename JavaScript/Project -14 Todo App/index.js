// ---------- STEP 1: Setup ----------
let todoInput = document.getElementById('input')
let data = []

try {
    data = JSON.parse(localStorage.getItem('allTodo')) || []
} catch (e) {
    data = []
}


// ---------- STEP 2: Functions ----------

function removeTodo(index) {
    data.splice(index, 1)
    localStorage.setItem('allTodo', JSON.stringify(data))
    displayTodo()
}

function toggleTodo(index) {
    data[index].completed = !data[index].completed
    localStorage.setItem('allTodo', JSON.stringify(data))
    displayTodo()
}

function todoStructure(singleTodo, index) {
    let div = document.createElement('div')
    div.setAttribute('class', 'singleTodo')

    // ---- top row: label + checkbox grouped on left, remove button on right ----
    let header = document.createElement('div')
    header.setAttribute('class', 'todo-header')

    let left = document.createElement('div')
    left.setAttribute('class', 'todo-left')

    let label = document.createElement('span')
    label.setAttribute('class', 'todo-label')
    label.textContent = `Task ${index + 1}`

    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('class', 'todo-check')
    checkbox.checked = singleTodo.completed

    let btn = document.createElement('button')
    btn.setAttribute('class', 'remove-btn')
    btn.textContent = 'Remove Todo'

    left.appendChild(label)
    left.appendChild(checkbox)

    header.appendChild(left)
    header.appendChild(btn)

    // ---- bottom row: full content ----
    let h2 = document.createElement('h2')
    h2.setAttribute('class', 'todo-text')
    h2.textContent = singleTodo.todoVal

    if (singleTodo.completed) {
        h2.classList.add('completed')
    }

    btn.addEventListener('click', () => {
        div.remove()
        removeTodo(index)
    })

    checkbox.addEventListener('click', () => {
        toggleTodo(index)
    })

    div.appendChild(header)
    div.appendChild(h2)

    document.getElementsByClassName('todo-list')[0].appendChild(div)
}

function displayTodo() {
    document.getElementsByClassName('todo-list')[0].innerHTML = ''
    data.map((singleTodo, index) => {
        todoStructure(singleTodo, index)
    })
}

function addTodo() {
    let todoVal = todoInput.value.trim()
    if (todoVal !== '') {
        data.push({ todoVal, completed: false })
        localStorage.setItem('allTodo', JSON.stringify(data))
        displayTodo()
    }
    todoInput.value = ''
}


// ---------- STEP 3: Listen for clicks and Enter key ----------

document.getElementsByClassName('todo-btn')[0].addEventListener('click', addTodo)

todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTodo()
    }
})


// ---------- STEP 4: First run ----------

displayTodo()