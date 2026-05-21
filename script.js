document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const contactForm = document.getElementById('contactForm');

    // Add Task Functionality
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `<span>${taskText}</span><button class="delete-btn">Delete</button>`;
        taskList.appendChild(li);

        // Add event listener to the new delete button
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });

        taskInput.value = ''; // Clear input field
        taskInput.focus();
    }

    // Delete Task Functionality (delegated to parent for efficiency)
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });

    // Contact Form Submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! Thank you.');
        contactForm.reset();
    });
});
