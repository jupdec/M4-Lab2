/*eslint-env browser*/
//Loading initial set of employees
let employeeArray = [
    ['EMP-001', 'Lauren Mogloian', '12643', 'lauren1264@sdsu.edu', 'Administrative'],
    ['EMP-002', 'Hazell Diaz', '13245', 'hazel2341@sdsu.edu', 'Sales'],
    ['EMP-003', 'Shayla Smith', '12448', 'smiths234@sdsu.edu', 'Engineering'],
    ['EMP-004', 'Anothny Roman', '13571', 'aanthony23@sdsu.edu', 'Marketing'],
    ['EMP-005', 'Jesus Hernandez', '98176', 'jesusssat@sdsu.edu', 'Executive']
];
//Storing the data
if (localStorage.getItem('employees') !== null) {
    employeeArray = JSON.parse(localStorage.getItem('employees'))
}
let addform = document.getElementById('addForm')
let empTable = document.getElementById('empTable')
let empCount = document.getElementById('empCount')
Gridbuilding()
// Adding the data
addform.addEventListener('submit', (e) => {
    e.preventDefault();
    let empID = parseInt(document.getElementById('id').value)
    let empName = document.getElementById('name').value
    let empExt = parseInt(document.getElementById('extension').value)
    let empEmail = document.getElementById('email').value
    let empDept = document.getElementById('department').value
    let arrNewEmployee = [empID, empName, empExt, empEmail, empDept]
    employeeArray.push(arrNewEmployee)
    Gridbuilding()
    addform.reset()
    addform.id.focus()
})
//Removing data
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Please confirm that you want to delete this employee from the system?')) {
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            employeeArray.splice(rowIndex - 1, 1)
            Gridbuilding()
        }
    }
})
// Building the grid
function Gridbuilding() {
    empTable.lastElementChild.remove()
    let tbody = document.createElement('tbody')
    for (let employee of employeeArray) {
        tbody.innerHTML +=
            `<tr>
            <td>${employee[0]}</td>
            <td>${employee[1]}</td>
            <td>${employee[2]}</td>
            <td>${employee[3]}</td>
            <td>${employee[4]}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `}
    empTable.appendChild(tbody);
    empCount.value = `(${employeeArray.length})`
    //Storing the data
    localStorage.setItem('employees', JSON.stringify(employeeArray))
}