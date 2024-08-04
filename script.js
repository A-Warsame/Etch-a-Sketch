const container = document.querySelector('#container');

function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.className = 'gridRow';
        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function addHoverEffect() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener("mouseover", function(e) {
            e.target.style.background = "blue";
        });
    });
}

makeGrid(16);
addHoverEffect();