let boxes = document.querySelectorAll('.box');
let rstButton = document.querySelector('#reset-btn');
let newbtn = document.querySelector('#new-btn');
let msgcontainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')

let turn0 = true;
let winningPaterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box)=>{
    box.addEventListener('click', ()=> {
        if(turn0){
            box.innerHTML = 'O';
            turn0 = false
        }else{
            box.innerHTML = 'X';
            turn0 = true
        }
        box.disabled = true

        checkWinner()
    },false)
    
})

function resetBtn(){
    turn0 = true;
    enableBoxes()
    msgcontainer.classList.add('hide')
}

function dibledBoxes(){
    for(let box of boxes){
        box.disabled = true;
    }
}

function enableBoxes(){
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

function showWinner(winner){
    msg.innerText = `Congratulations! The Winner is ${winner}`
    msgcontainer.classList.remove("hide")
    dibledBoxes()
}

function checkWinner(){
    for(let pattern of winningPaterns){
        // console.log(pattern[0], pattern[1], pattern[2])
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]])
       let firstval = boxes[pattern[0]].innerText;
       let secndval = boxes[pattern[1]].innerText;
       let thirdval = boxes[pattern[2]].innerText
       if(firstval != "" && secndval != "" && thirdval != ""){
        if(firstval == secndval && secndval == thirdval){
            console.log("winner")
            showWinner(firstval)
        }
       }
    }
}

rstButton.addEventListener('click', resetBtn)
newbtn.addEventListener("click", resetBtn)
