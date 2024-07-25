// 1-stdin.js

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Handle user input
process.stdin.on('data', (data) => {
  // Trim the input to remove any extra whitespace
  const name = data.toString().trim();

  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Close the process
  process.exit();
});

// Handle process exit
process.on('exit', () => {
  console.log('This important software is now closing');
});
