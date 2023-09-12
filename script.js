// Get references to HTML elements
const themeToggle = document.getElementById('themeToggle');
const equal = document.querySelector('#equal');
const form = document.querySelector('form');
const display = document.getElementById('display');
const buttons = document.querySelector('.buttons');
const resultEL = document.querySelector('.result');
const body = document.body;
const root = document.documentElement;

// Initialize variables
let result = ''; // Stores the current mathematical expression
let current = ''; // Stores the current user input
let inputDisplay = ''; // Displays the user input and result
let evaluation = false; // Flag to indicate if an evaluation is in progress
let basicOperations = { '+': '+', '/': '/', '*': '*', '-': '-' }; // Basic arithmetic operations

// Set a CSS variable to match the width of the result element
root.style.setProperty('--width-to-match', `${resultEL.clientWidth}px`);

// Theme toggle functionality
const theme = (theme, inverse = theme === 'dark' ? 'light' : 'dark') => {
  themeToggle.checked = theme === 'dark' ? true : false;
  body.classList.remove(`${inverse}-theme`);
  body.classList.add(`${theme}-theme`);
  localStorage.setItem('theme', `${theme}-theme`);
};

function themeSwitch() {
  if (this.checked === true) theme('dark');
  else theme('light');
}

themeToggle.addEventListener('click', themeSwitch);

// Retrieve saved theme from local storage
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  body.classList.add(savedTheme);
  if (savedTheme === 'dark-theme') theme('dark');
  else theme('light');
}

// Handle Enter key to trigger evaluation
form.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    equal.click();
  }
});

// Function to format numbers with a digit threshold
function formatted(number, digitThreshold = 10) {
  const digitCount = `${number}`.replace(/^0+|\.+/g, '').length;
  if (digitCount > digitThreshold) {
    return number.toExponential(7).replace('+', '');
  } else {
    return number.toLocaleString();
  }
}
