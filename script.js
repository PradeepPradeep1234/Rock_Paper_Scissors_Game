let result = '';
let your_score  = 0;
let computer_score = 0;
function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    
  
    if (userChoice === computerChoice) {
      result = "It's a draw!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = 'You win!';
      your_score+=1;
    } else {
      result = 'Computer wins!';
      computer_score+=1;
    }
  
    document.getElementById('result').innerHTML =
      `<p>You chose <strong>${userChoice}</strong>.</p>
       <p>Computer chose <strong>${computerChoice}</strong>.</p>
       <p><strong>${result}</strong>.</p><p>Your Score <strong>${your_score}</strong>.</p></p><p>Computer Score <strong>${computer_score}</strong>.</p>`;
  }
  