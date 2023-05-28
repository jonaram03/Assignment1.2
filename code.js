function rollDice() {
    // Generate random dice values between 1 and 6
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
  
    // Calculate the sum of the dice values
    const sum = dice1 + dice2;

    document.getElementById("sum").innerHTML = "Sum of rolls: " + sum;

  
    // Determine the outcome based on the sum
    let message = "";
  
    if (sum === 7 || sum === 11) {
      message = "I guess you have some luck";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      message = "Crap(s) you lost!";
    } else
      message = "I too like delaying the inevitable"
  
    // Display the outcome on the web page
    document.getElementById("message").innerHTML = message;
  }