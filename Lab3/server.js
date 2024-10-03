 // Import the Connect and URL packages
const connect = require('connect');
const url = require('url');

// Create the server
const app = connect();

// Calculate function
function calculate(req, res, next) {
    // Parse the URL for method, x, and y
    const queryObject = url.parse(req.url, true).query;
    const method = queryObject.method;
    const x = parseFloat(queryObject.x);
    const y = parseFloat(queryObject.y);x
    let result;

    // Check if x and y are numbers
    if (isNaN(x) || isNaN(y)) {
        res.end('Invalid numbers provided for x or y.');
        return;
    }

    // Determine the method and calculate the result
    switch (method) {
        case 'add':
            result = `${x} + ${y} = ${x + y}`;
            break;
        case 'subtract':
            result = `${x} - ${y} = ${x - y}`;
            break;
        case 'multiply':
            result = `${x} * ${y} = ${x * y}`;
            break;
        case 'divide':
            if (y === 0) {
                result = 'Error: Cannot divide by zero';
            } else {
                result = `${x} / ${y} = ${x / y}`;
            }
            break;
        default:
            result = 'Error: Invalid method. Use add, subtract, multiply, or divide.';
    }

    // Display the result
    res.end(result);
}

// Use the calculate function on requests to /lab2
app.use('/lab2', calculate);

// Listen on port 3000
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});