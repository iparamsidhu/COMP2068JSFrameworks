
const connect = require('connect');
const url = require('url');
const app = connect();

function calculate(req, res, next) {
    // Parse the URL for method, x, and y
    const queryObject = url.parse(req.url, true).query;
    const method = queryObject.method;
    const x = parseFloat(queryObject.x);
    const y = parseFloat(queryObject.y);x
    let result;

    if (isNaN(x) || isNaN(y)) {
        res.end('Invalid numbers provided for x or y.');
        return;
    }

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

    res.end(result);
}

app.use('/lab2', calculate);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});