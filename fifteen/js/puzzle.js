const puzzleBoardDiv = document.querySelector("#puzzleBoard");
const mixUpBtn = document.querySelector("#mix-up");
const checkingArray = [
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,0]
]
let canSelectFlag = true;

for (let i = 0; i < 16; i++) {
    let puzzleBlock = document.createElement("div"); 
    puzzleBlock.setAttribute("data-row", parseInt(i / 4));
    puzzleBlock.setAttribute("data-column",(i % 4));

    puzzleBlock.addEventListener("click", function() {
        let result = checkEmptyBlock(this);
        if (result && this.hasChildNodes() && canSelectFlag) {

            this.childNodes[0].classList.add(result.side);
            canSelectFlag = false;                

            checkingArray[this.getAttribute("data-row")][this.getAttribute("data-column")] = 0;
            checkingArray[result.row][result.column] = 1;

            setTimeout(() => {                
                this.childNodes[0].classList.remove(result.side);
                this.parentNode.childNodes[(result.row * 4) + result.column].appendChild(this.childNodes[0]);

                if(checkWin()) {
                    alert("승리하셨습니다!");
                };
                canSelectFlag = true;
            }, 200);
        }
    });

    puzzleBoardDiv.appendChild(puzzleBlock);
}

function checkEmptyBlock(puzzleBlock) {
    let row = parseInt(puzzleBlock.getAttribute("data-row"));
    let column = parseInt(puzzleBlock.getAttribute("data-column"));

    if(row - 1 >= 0 && checkingArray[row - 1][column] === 0) {
        return {
            side: "slide-up",
            row: row - 1,
            column: column
        };
    }
    if(row + 1 < 4 && checkingArray[row + 1][column] === 0) {
        return {
            side: "slide-down",
            row: row + 1,
            column: column
        };
    }
    if(column - 1 >= 0 && checkingArray[row][column - 1] === 0) {
        return {
            side: "slide-left",
            row: row,
            column: column - 1
        };
    }
    if(column + 1 < 4 && checkingArray[row][column + 1] === 0) {
        return {
            side: "slide-right",
            row: row,
            column: column + 1
        };
    }
    return undefined;
}

const ghostContainer = document.createElement("div");

for (let i = 0; i < 15; i++) {
    let piece = document.createElement("div");
    piece.style.backgroundImage = `url('./images/piece${i+1}.png')`;
    piece.setAttribute("data-piece", i+1);
    ghostContainer.appendChild(piece);
}

for (let i = 0; i < 15; i++) {
    let child = ghostContainer.childNodes[parseInt(Math.random() * ghostContainer.childNodes.length)];    
    puzzleBoardDiv.childNodes[i].appendChild(child);
}

mixUpBtn.addEventListener("click", function() {
    window.location.reload();
})

function checkWin() {    
    if(checkingArray[3][3] === 0) {
        for (let i = 0; i < 15; i++) {
            if (puzzleBoardDiv.childNodes[i].childNodes[0].getAttribute("data-piece") != i + 1) {
                return false;
            }            
        }
        return true;
    }
    return false;
    
}