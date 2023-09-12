import "./styles.css"

const themeToggle = document.getElementById('themeToggle');
const equal = document.querySelector('#equal');
const form = document.querySelector('form');
const display = document.getElementById('display');
const buttons = document.querySelector('.buttons');
const resultEL = document.querySelector('.result');
const body = document.body;
const root = document.documentElement;

let result = '';
let current = '';
let inputDisplay = '';
let evaluation = false;
let basicOperations = { '+': '+', '/': '/', '*': '*', '-': '-' };

