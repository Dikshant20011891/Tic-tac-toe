let p1turn = new Audio("music/player1.mp3")
let p2turn = new Audio("music/player2.mp3")
let gover = new Audio("music/gameover.mp3")

let turn = "X";
let game = false;

const changeturn = ()=>{
    return turn == "X"?"0":"X";
}

const checkturn = (turn)=>{
    if(turn === "X")
    {
        p1turn.play();
        document.querySelector(".info").innerHTML = "Player 1 Turn";
    }
    else{
        p2turn.play()
        document.querySelector(".info").innerHTML = "Player 2 Turn";
    }
}

const checkwin = ()=>{
    let box = document.getElementsByClassName("boxtext") 
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    win.forEach(e => {
        if((box[e[0]].innerText === box[e[1]].innerText) && (box[e[1]].innerText === box[e[2]].innerText) && (box[e[0]].innerText != ''))
        {
            gover.play()
            game = true;
            if(box[e[0]].innerText === "X")
            {
                document.querySelector(".info").innerHTML = "Player 1 Wins";
            }
            else
            {
                document.querySelector(".info").innerHTML = "Player 2 Wins";
            }
        }
    });
}

// Logic
let arr = Array.from(document.getElementsByClassName("box"));
arr.forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if(boxtext.innerHTML === '' && game === false){
            boxtext.innerHTML = turn
            turn = changeturn()
            checkwin()
            if(game === false)
            {
                checkturn(turn)
            }
        }
    })
});

let reset = document.getElementById("reset");
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach(element => {
        element.innerHTML = "";
    });
    document.querySelector(".info").innerHTML = "Player 1 Turn";
    game = false
    turn = "X"
    p1turn.play();
})



