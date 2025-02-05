let tasks = [];

        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const task = taskInput.value.trim();

            if (task !== '') {
               
                tasks.push(task);


                taskInput.value = '';

        
                updateTaskList();
            }
        }

        function updateTaskList() {
           
            const taskList = document.getElementById('taskList');

            
            taskList.innerHTML = '';

           
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.textContent = task;
                taskList.appendChild(li);
            });
        }

        
        document.getElementById('taskInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });