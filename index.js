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