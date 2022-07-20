document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    runGame("addition");

});
/**
 * The main game loop called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame(gameType){
    document.getElementById("answer-box").value ="";
    document.getElementById("answer-box").focus();
    // create 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 21) +1;
    let num2 = Math.floor(Math.random() * 21) +1;

    if(gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if(gameType==="multiply"){
        displayMultiplicationQuestion(num1,num2);

    } else if( gameType==="subtract"){
        displaySubtractQuestion(num1, num2);
    } else if(gameType==='division'){
        displayDivisionQuestion(num1,num2);
    } else {
        alert(`unknown game type: ${gameType}`);
        throw `unknown game type: ${gameType}. Aborting!`;
    }
}
/**
 * Checks if the users entered answer is correct against the calculated answer
 */
function checkAnswer(){

    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculateAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculateAnswer[0];

    if(isCorrect){
        alert("Welldone you got it!");
        incrementScore();
    } else {
        alert(`oh dear, better luck next time ${calculateAnswer[0]}.`)
        incrementWrongAnswer();
    }

    runGame(calculateAnswer[1]);

}

/**
 * Get the operands(the numbers) and the operator(plus, miuns, times, divide)
 * directly from the DOM and return the correct answer
 */
function calculateCorrectAnswer(){

    
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return [operand1 + operand2, 'addition'];
    } else if(operator === "x"){
        return [operand1 * operand2, 'multiply'];
    }
    else if(operator==='-') {
        return[operand1 - operand2, 'subtract'];
    } else if (operator ='/'){
        return[operand1 / operand2, 'division'];
    }
    else {
        alert(`unimplimented operator ${operator}`);
        throw `unimplimented operator ${operator}. Aborting!`;
    }
    

}
/**
 * reads the current score from the DOM and increments 1
 */
function incrementScore(){

    let oldScore= parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}
/**
 * reads the current tally of incorrect answers from the DOM and increments 1
 */
function incrementWrongAnswer(){
    let oldScore= parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion(operand1,operand2){
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";

}

function displayMultiplicationQuestion(operand1,operand2){

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

function displayDivisionQuestion(operand1,operand2){
    document.getElementById('operand1').textContent = operand1 % operand2 ===0 ? operand1 : operand2 * operand1;
    document.getElementById('operand2').textContent = operand1 % operand2 ===0 ? operand1: operand1;
    document.getElementById('operator').textContent = "/";
    
    
}