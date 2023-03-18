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

//game version 1: choose shape --> player game --> decide winner --> restart game


// create object to store data
function playerCreate(name, shape) {  //factory function
    return {
        player: name,
        shape: shape,
        arr: []
    }
}

//choose shape
function handleChooseShape(event) {
    let shape = event.target.innerHTML;
    const player = playerCreate('player', shape);
    console.log(player);

    // handle unit click: it must happen after click choose shape, and must not be occupied.
    // so it could be wrapped in handleChooseShape
    function handleUnitClick(event) {
        event.target.innerHTML = player.shape;
    }
    const units = document.getElementsByClassName('unit');
    console.log(units);
    units[0].addEventListener('click', handleUnitClick);
    /*
    forEach(element => {
        element.addEventListener('click', handleUnitClick);
    });
    */
    
}

document.querySelector('#x-shape').addEventListener('click', handleChooseShape);
document.querySelector('#o-shape').addEventListener('click', handleChooseShape);

