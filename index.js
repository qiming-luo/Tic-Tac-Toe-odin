// create grid boxes 

const gameboard = (() => {
    for(let i=1; i<=9; i++) {
        let gameboardUnit = document.createElement('div');
        gameboardUnit.className = 'unit';
        gameboardUnit.id = 'unit'+i;
        gameboardUnit.innerHTML = gameboardUnit.id; // for test only
        gameboardUnit.style.border = '1px solid black';
        document.querySelector('.grid-game-board').appendChild(gameboardUnit);
    }
})();

// game logic


// create object to store data
function playerCreate(name, shape) {  //factory function
    return {
        player: name,
        shape: shape
    }
}

//choose shape
function handleChooseShape(event) {
    let shape = event.target.innerHTML;
    const player = playerCreate('player', shape);
    console.log(player);
}

document.querySelector('#x-shape').addEventListener('click', handleChooseShape);
document.querySelector('#o-shape').addEventListener('click', handleChooseShape);