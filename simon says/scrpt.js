//first i select all the elements that i need to use in my game

let play = document.querySelector('.play button');
let level = document.querySelector('.level');
let score = document.querySelector('.score');
let buttons = document.querySelectorAll('.main button');


//after that i create an array to store the colors that the computer will select;
let carr = [];
let bool = false;
let scr=0;

let lev= 1;

//intially buttons will be disabled
buttons.forEach((button) => {
    button.disabled = true;
})


//it is a fuction that generate a rendon no. and computer select a color by generated no.
function game() {
    setTimeout(()=>{

    
    let random = Math.floor(Math.random() * 4);
    let cselect = buttons[random];
    cselect.style.boxShadow = '0 0 20px 5px black';
    //timeout function is used to generate black shadow to selected button for 500ms
    setTimeout(() => {
        cselect.style.boxShadow = 'none';
    }, 500);
    carr.push(cselect.innerText);
},300)
}

//this function is for user to select color and it return a promise .
function user() {
    return new Promise((resolve) => {
        let correct = true;
        let i = 0;
  //this function will check that the selected color by user is same as computer selected color or not.

  //here e is the event, genereted whech we click on button
        function check(e) {
            let button = e.target;
            button.style.boxShadow = `0 0 10px 5px ${e.target.innerText}`;
            setTimeout(() => {
                button.style.boxShadow = 'none';
            }, 300);


            if (carr[i] === e.target.innerText) {
               
                correct = true;
                
            } else {
              
                correct = false;
              
            }

            i++;
            
            
            if (i === carr.length || !correct) {
                scr+=10;
                lev+=1;
                i=0;
                level.innerText=`Level: ${lev}`
                score.innerText=`Your Score is: ${scr}`
                if(!correct){
                scr-=10;
                lev-=1;
             score.innerText=`Game Over Your Finale Score is: ${scr}`
               level.innerText=`Level: ${lev}`

                }
                //once if statement is correct then eventlistnewer will be removed from buttons
                buttons.forEach((button) => {
                    button.removeEventListener("click", check);
                });
                resolve(correct);
            }
        }
     //it is for reset button for resetting between the game
        play.addEventListener("click",()=>{
            correct=false;
            resolve(correct)
        })
        buttons.forEach((button) => {
            button.addEventListener("click", check);
        });
    });
  
}
//function for resetting the game
function resett() {
    carr = [];
    scr=0;
    lev=1;
    level.innerText = "Level: 1";
    score.innerText = "Your Score is: 0";
    buttons.forEach((button) => {
        button.disabled = true;
        button.style.boxShadow = 'none';
    });
    play.innerText = "Play Again";
    bool = false;

    
}

play.addEventListener('click', async () => {
    if (bool) {
        resett();
     
    } else {
        bool = true;
        buttons.forEach((button) => {
            button.disabled = false;
        });
        play.innerText = "Reset Game";

        game();
    
        //because its parant is async function so wehave to use await for user so that the next code will not run until the user function is completed;
        let correct = await user();
        while (correct && bool) {
            game();
            console.log(carr);
            correct = await user();
        }

        if (bool) {
            play.innerText = "Play Again";
            buttons.forEach((button) => {
                button.disabled = true;
                
                
                 scr=0;
                 lev=1
            });
        }
    }
});
