// game winning logic

const allWiningArr = [
    ['unit1', 'unit2', 'unit3'],
    ['unit4', 'unit5', 'unit6'],
    ['unit7', 'unit8', 'unit9'],
    ['unit1', 'unit4', 'unit7'],
    ['unit2', 'unit5', 'unit8'],
    ['unit3', 'unit6', 'unit9'],
    ['unit1', 'unit5', 'unit9'],
    ['unit3', 'unit5', 'unit7']
];

let winOrNot = 0; 

let playerArr = ['unit1', 'unit5', 'unit9'];

// loop through allWiningArr
// if an element 
for(let i=0; i<allWiningArr.length; i++){
    allWiningArr[i].forEach(val => {
        if(playerArr.includes(val)){
            winOrNot += 1; 
        }
    });
    if(winOrNot === 3){ //get all 3 val, then must be a winner, 
        break;
    }else{
        winOrNot = 0;
    }
} //get all 3 val, then must be a winner; <3, not a winner

console.log(winOrNot);

