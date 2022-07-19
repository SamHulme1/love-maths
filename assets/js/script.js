document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === 'submit') {
                alert('You Clicked Submit');
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You Clicked ${gameType}`);
            }
        })
    }
});
/**
 * The main game loop called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame(){
    // create 2 random numbers between 1 and 25
    let num1 = math.floor(math.random() * 21) +1;
    let num2 = math.floor(math.random() * 21) +1;
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplicationQuestion(){

}

function displayDivisionQuestion(){

}