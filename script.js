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