const container = document.querySelector('#container');

function makeGrid(size) {
    for(let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.className = 'gridRow'

        for(let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';

            cell.addEventListener("mouseover", function (e) {
                e.target.style.background = "blue";
            });
            
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

makeGrid(16);