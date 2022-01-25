// canvas 
const canvas = document.querySelector('#canvas');
canvas.width = 400;
canvas.height = 400;

const ctx = canvas.getContext('2d');

for(let i = 0; i < 8; i++){
    let color;
    
    for(var j = 0; j < 8; j++){

        if(i %2 === 0 ){
            
            if(j%2 == 0){
                ctx.fillStyle = '#df3d3d';
            } else {
                ctx.fillStyle = '#c39347';
            }
        } else {
            if(j%2 == 1){
                ctx.fillStyle = '#df3d3d';
            } else {
                ctx.fillStyle = '#c39347';
            }
        }

        ctx.fillStyle = color;
        ctx.fillRect(i * 50, j * 50, 50 ,50)
    }
}

const pawnW = new Image();
pawnW.src = './image/pawnWhite.png';
const pawnB = new Image();
pawnB.src = './image/pawnBlack.png';

pawnW.addEventListener('load', () => {
    for(var k = 0; k < 8; k++){
        ctx.drawImage(pawnW , (k * 50) + 5 , 55, 40 , 40);
        ctx.drawImage(pawnB , (k * 50) + 5 , 305, 40 , 40);
    }
})

const rookW = new Image();
const rookB = new Image();
rookW.src = './image/rookWhite.png';
rookB.src = './image/rookBlack.png';

pawnW.addEventListener('load', () => {
    for(var p = 0; p < 2; p++){
        ctx.drawImage(rookW , (p * 350) + 5 , 5, 40 , 40);
        ctx.drawImage(rookB , (p * 350) + 5 , 355, 40 , 40);
    }
})


const knightW = new Image();
const knightB = new Image();
knightW.src = './image/knightWhite.png';
knightB.src = './image/knightBlack.png';

knightW.addEventListener('load', () => {
    for(var d = 0; d < 2; d++){
        ctx.drawImage(knightW , (d * 250) + 55 , 5, 40 , 40);
        ctx.drawImage(knightB , (d * 250) + 55 , 355, 40 , 40);
    }
})

const bishopW = new Image();
const bishopB = new Image();
bishopW.src = './image/bishopWhite.png';
bishopB.src = './image/bishopBlack.png';

bishopW.addEventListener('load', () => {
    for(var a = 0; a < 2; a++){
        ctx.drawImage(bishopW , (a * 150) + 105 , 5, 40 , 40);
        ctx.drawImage(bishopB , (a * 150) + 105 , 355, 40 , 40);
    };
})

const queenW = new Image();
const queenB = new Image();
queenW.src = './image/queenWhite.png';
queenB.src = './image/queenBlack.png';

const kingW = new Image();
const kingB = new Image();
kingW.src = './image/kingWhite.png';
kingB.src = './image/kingBlack.png';

queenW.addEventListener('load', () => {
    ctx.drawImage(queenW , 205 , 5, 40 , 40);
    ctx.drawImage(queenB , 155 , 355, 40 , 40);
    
    ctx.drawImage(kingW , 155 , 5, 40 , 40);
    ctx.drawImage(kingB , 205 , 355, 40 , 40);

})