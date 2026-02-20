let students = [];

const nameInput = document.querySelector('#nameInput');
const ageInput = document.querySelector('#ageInput');
const scoreInput = document.querySelector('#scoreInput');
const addBtn = document.querySelector('#addBtn');
const tableBody = document.querySelector('#studentTableBody');
const statsContainer = document.querySelector('#statsContainer');

const updateStats = () => {
    const total = students.length;
    const avg = total ? (students.reduce((sum, s) => sum + s.score, 0) / total).toFixed(1) : 0;
    const passed = students.filter(s => s.score >= 50).length;
    const failed = total - passed;

    const statCards = [
        { label: 'Total', value: total, color: 'blue' },
        { label: 'Average', value: avg, color: 'purple' },
        { label: 'Passed', value: passed, color: 'green' },
        { label: 'Failed', value: failed, color: 'red' }
    ];

    statsContainer.innerHTML = ''; 
    statCards.forEach(stat => {
        const div = document.createElement('div');
        div.className = `bg-white p-4 rounded-lg shadow border-b-4 border-${stat.color}-500`;
        
        const label = document.createElement('p');
        label.className = "text-xs uppercase text-gray-500 font-bold";
        label.textContent = stat.label;
        
        const val = document.createElement('p');
        val.className = "text-2xl font-bold";
        val.textContent = stat.value;

        div.appendChild(label);
        div.appendChild(val);
        statsContainer.appendChild(div);
    });
};

const deleteStudent = (id) => {
    students = students.filter(student => student.id !== id);
    renderStudents();
    updateStats();
};

const renderStudents = () => {
    tableBody.textContent = ''; 

    students.forEach(student => {
        const tr = document.createElement('tr');
        tr.className = "border-t hover:bg-gray-50 transition";

        // Helper to create cells
        const createCell = (text) => {
            const td = document.createElement('td');
            td.className = "p-3";
            td.textContent = text;
            return td;
        };

        const statusTd = document.createElement('td');
        statusTd.className = "p-3";
        const statusSpan = document.createElement('span');
        const isPassed = student.score >= 50;
        statusSpan.textContent = isPassed ? 'Pass' : 'Fail';
        statusSpan.className = `px-2 py-1 rounded text-xs font-bold ${isPassed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`;
        statusTd.appendChild(statusSpan);

        const actionTd = document.createElement('td');
        actionTd.className = "p-3 text-right";
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.className = "text-red-500 hover:text-red-700 text-sm font-medium";
        delBtn.addEventListener('click', () => deleteStudent(student.id));
        actionTd.appendChild(delBtn);

        tr.appendChild(createCell(student.name));
        tr.appendChild(createCell(student.age));
        tr.appendChild(createCell(student.score));
        tr.appendChild(statusTd);
        tr.appendChild(actionTd);

        tableBody.appendChild(tr);
    });
};

const addStudent = () => {
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);
    const score = parseInt(scoreInput.value);

    if (!name || isNaN(age) || isNaN(score)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const newStudent = {
        id: Date.now(), // Unique ID for filtering
        name,
        age,
        score
    };

    students.push(newStudent);
    
    // Clear inputs
    nameInput.value = '';
    ageInput.value = '';
    scoreInput.value = '';

    renderStudents();
    updateStats();
};

// --- EVENTS ---
addBtn.addEventListener('click', addStudent);

// Initial empty stats
updateStats();
