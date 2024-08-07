const container = document.querySelector('#container');

function makeGrid(size) {
    container.innerHTML = '';
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.addEventListener("mouseover", function(e) {
                e.target.style.background = "blue";
            });
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function resetGridColor() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
}

function newGrid() {
    let number = prompt("How many squares per side for the new grid? (Max 100)");
    number = parseInt(number);
    if (number > 0 && number <= 100) {
        makeGrid(number);
    } else {
        alert("Please choose a number between 1 and 100.");
        newGrid();
    }
}

makeGrid(16);