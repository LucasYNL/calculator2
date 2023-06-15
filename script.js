const display = document.querySelector(".display");
const digits = document.querySelectorAll(".nums, .ops");
const operators = document.querySelectorAll(".ops");
const calculate = document.querySelector(".do");

let screen1 = [];

// BASIC MATH FUNCTIONS 
function add(i, x) {
    return i + x;
}

function sub(i, x) {
    return i - x;
}

function mul(i, x) {
    return i * x;
}

function divi(i, x) {
    return i / x;
}

// CALCULATOR OPERATIONS
function operate(num1, num2, op) {
    let result = 0;

    switch (op) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = sub(num1, num2);
            break;
        case "x":
            result = mul(num1, num2);
            break;
        case "/":
            result = divi(num1, num2);
            break;
        default:
            alert("what is u doing???");
    }

    return result;
}

function populate(num) {
    screen1.push(num);
    display.value = screen1.join('');
}

digits.forEach(function (x) {
    x.addEventListener('click', () => {
        populate(x.value);
    });
})



calculate.addEventListener('click', () => {
    main();
});