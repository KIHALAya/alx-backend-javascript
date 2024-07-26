// 1-stdin.js

/**
 * Prints the welcome message, handles user input, and exits gracefully.
 */
function displayMessage() {
  console.log('Welcome to Holberton School, what is your name?');

  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    console.log(`Your name is: ${name}`);
    process.stdin.pause(); // Pause the stdin stream to ensure 'end' event is fired
  });

  process.stdin.on('end', () => {
    console.log('This important software is now closing');
  });

  process.on('SIGINT', () => {
    console.log('This important software is now closing');
    process.exit();
  });
}

// Call the function to run the program
displayMessage();
